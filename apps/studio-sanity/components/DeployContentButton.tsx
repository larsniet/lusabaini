import React, {useState} from 'react'
import {Button, Card, Flex, Stack, Text} from '@sanity/ui'

type DeployResult = {
  name: string
  ok: boolean
  detail: string
}

const TARGETS = [
  {name: 'Portfolio', url: process.env.SANITY_STUDIO_DEPLOY_PORTFOLIO_URL},
  {name: 'Consultancy', url: process.env.SANITY_STUDIO_DEPLOY_CONSULTANCY_URL},
]

const configured = TARGETS.filter((t): t is {name: string; url: string} => Boolean(t.url))
const unconfigured = TARGETS.filter((t) => !t.url).map((t) => t.name)

async function deploy(target: {name: string; url: string}): Promise<DeployResult> {
  try {
    // No body: the endpoint only reads the secret. Keeping the request
    // header-free also avoids a CORS preflight.
    const response = await fetch(target.url, {method: 'POST'})

    if (!response.ok) {
      const text = await response.text()
      throw new Error(text.trim() || `Request failed with status ${response.status}`)
    }

    return {name: target.name, ok: true, detail: 'Deployed — live after the next page load'}
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Unknown error'
    return {name: target.name, ok: false, detail: detail.slice(0, 200)}
  }
}

const DeployContentButton = () => {
  const [isDeploying, setIsDeploying] = useState(false)
  const [results, setResults] = useState<DeployResult[]>([])

  const handleDeploy = async () => {
    setIsDeploying(true)
    setResults([])
    setResults(await Promise.all(configured.map(deploy)))
    setIsDeploying(false)
  }

  return (
    <Card padding={4} radius={3} shadow={1}>
      <Stack space={4}>
        <Stack space={2}>
          <Text size={2} weight="semibold">
            Deploy content
          </Text>
          <Text size={1} muted>
            Publish your changes first, then deploy. The sites rebuild on the next visit, so if you
            still see old content, wait a few seconds and refresh once more.
          </Text>
        </Stack>

        {unconfigured.length > 0 && (
          <Text size={1} style={{color: 'var(--card-caution-fg-color, #8a6d00)'}}>
            Not configured: {unconfigured.join(', ')}. Set the matching SANITY_STUDIO_DEPLOY_*_URL
            variable to enable.
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
          text={isDeploying ? 'Deploying…' : 'Deploy content'}
          tone="primary"
          loading={isDeploying}
          disabled={configured.length === 0 || isDeploying}
          onClick={handleDeploy}
        />
      </Stack>
    </Card>
  )
}

export default DeployContentButton
