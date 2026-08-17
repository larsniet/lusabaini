import React, {useMemo, useState} from 'react'
import {Button, Card, Flex, Stack, Text} from '@sanity/ui'

type DeployTarget = {
  name: string
  url?: string
}

type ConfiguredTarget = DeployTarget & {url: string}

type DeployResult = {
  name: string
  ok: boolean
  detail: string
}

type Status = 'idle' | 'loading' | 'done'

type DeployContentButtonProps = {
  /**
   * Optional override for the deploy targets.
   * Defaults to the portfolio and consultancy revalidate endpoints.
   */
  targets?: DeployTarget[]
  /**
   * Optional payload to send. Defaults to a small metadata object.
   */
  payload?: Record<string, unknown>
}

const DEFAULT_TARGETS: DeployTarget[] = [
  {name: 'Portfolio', url: process.env.SANITY_STUDIO_DEPLOY_PORTFOLIO_URL},
  {name: 'Consultancy', url: process.env.SANITY_STUDIO_DEPLOY_CONSULTANCY_URL},
]

async function deploy(
  target: ConfiguredTarget,
  payload: Record<string, unknown>,
): Promise<DeployResult> {
  try {
    const response = await fetch(target.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(text.trim() || `Request failed with status ${response.status}`)
    }

    return {name: target.name, ok: true, detail: 'Content deployed'}
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Unknown error'
    return {name: target.name, ok: false, detail: detail.slice(0, 200)}
  }
}

const DeployContentButton = ({targets = DEFAULT_TARGETS, payload}: DeployContentButtonProps) => {
  const configured = useMemo(
    () => targets.filter((target): target is ConfiguredTarget => Boolean(target.url)),
    [targets],
  )
  const unconfigured = useMemo(
    () => targets.filter((target) => !target.url).map((target) => target.name),
    [targets],
  )

  const [status, setStatus] = useState<Status>('idle')
  const [results, setResults] = useState<DeployResult[]>([])

  const handleDeploy = async () => {
    setStatus('loading')
    setResults([])

    const settled = await Promise.all(
      configured.map((target) =>
        deploy(target, payload ?? {source: 'sanity-studio', triggeredAt: new Date().toISOString()}),
      ),
    )

    setResults(settled)
    setStatus('done')
  }

  return (
    <Card padding={4} radius={3} shadow={1}>
      <Stack space={4}>
        <Stack space={2}>
          <Text size={2} weight="semibold">
            Deploy content
          </Text>
          <Text size={1} muted>
            Refreshes the cached content on both sites so your latest edits go live. Publish your
            changes first, then deploy.
          </Text>
        </Stack>

        {unconfigured.length > 0 && (
          <Text size={1} style={{color: 'var(--card-caution-fg-color, #8a6d00)'}}>
            Not configured: {unconfigured.join(', ')}. Set the matching
            SANITY_STUDIO_DEPLOY_*_URL variable to enable.
          </Text>
        )}

        {results.length > 0 && (
          <Stack space={3}>
            {results.map((result) => (
              <Flex key={result.name} gap={2} align="flex-start">
                <Text
                  size={1}
                  style={{
                    color: result.ok
                      ? 'var(--card-positive-fg-color, #2f8f46)'
                      : 'var(--card-critical-fg-color, #c72a2a)',
                  }}
                >
                  {result.ok ? '✓' : '✕'}
                </Text>
                <Stack space={2} flex={1}>
                  <Text size={1} weight="medium">
                    {result.name}
                  </Text>
                  <Text size={1} muted>
                    {result.detail}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Stack>
        )}

        <Button
          text={status === 'loading' ? 'Deploying…' : 'Deploy content'}
          tone="primary"
          loading={status === 'loading'}
          disabled={configured.length === 0 || status === 'loading'}
          onClick={handleDeploy}
        />
      </Stack>
    </Card>
  )
}

export default DeployContentButton
