# Sanity Studio

This Studio is configured to be hosted on Sanity (`*.sanity.studio`) instead of running in Docker.

## Local development

```bash
pnpm --filter sanity dev
```

## First-time hosted deploy (interactive)

Run this once from the Studio folder to choose your hostname:

```bash
cd apps/studio-sanity
pnpm run deploy
```

During the prompt, pick a hostname (example: `lusabaini`).

## CI/CD hosted deploy

The GitHub workflow deploys Studio automatically on pushes to `main` when these repository secrets are set:

- `SANITY_AUTH_TOKEN` (deploy token from Sanity project management)
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_STUDIO_HOSTNAME` (the hostname chosen during first deploy, without `.sanity.studio`)

Optional:

- `SANITY_STUDIO_APP_ID`
- `SANITY_STUDIO_DEPLOY_PORTFOLIO_URL`
- `SANITY_STUDIO_DEPLOY_CONSULTANCY_URL`

`apps/studio-sanity/sanity.cli.ts` reads these values and deploys to the configured host.

## Deploy content

Both workspaces expose a **Deploy content** tool. It sends a POST to each app's
`/api/revalidate` endpoint, which purges the cached Sanity content tags so published
edits appear without a rebuild. Targets come from `SANITY_STUDIO_DEPLOY_PORTFOLIO_URL`
and `SANITY_STUDIO_DEPLOY_CONSULTANCY_URL`; each URL must carry that app's
`REVALIDATE_SECRET`. A target with no URL set is shown as unconfigured and skipped.

Because `SANITY_STUDIO_*` values are inlined into the Studio's client bundle, these
URLs and their secrets are readable by anyone who can open the Studio. Treat the
revalidate endpoints as publicly triggerable.

## Notes

- No Studio container is needed in `docker-compose.prod.yml` anymore.
- The public site (`nextjs`) still reads content from Sanity Content Lake as before.
