FROM node:22-alpine AS base

ARG PNPM_VERSION=10.20.0
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=${PNPM_HOME}:$PATH

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

FROM base AS deps

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/nextjs/package.json ./apps/nextjs/package.json
COPY apps/consultancy/package.json ./apps/consultancy/package.json
COPY apps/studio-sanity/package.json ./apps/studio-sanity/package.json
COPY packages/ui/package.json ./packages/ui/package.json

RUN pnpm install --frozen-lockfile

FROM deps AS builder

ENV NEXT_TELEMETRY_DISABLED=1

ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET=consultancy
ARG NEXT_PUBLIC_SITE_DOMAIN
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=${NEXT_PUBLIC_SANITY_PROJECT_ID}
ENV NEXT_PUBLIC_SANITY_DATASET=${NEXT_PUBLIC_SANITY_DATASET}
ENV NEXT_PUBLIC_SITE_DOMAIN=${NEXT_PUBLIC_SITE_DOMAIN}

COPY . .
RUN pnpm --filter consultancy build

FROM base AS runner

ENV NODE_ENV=production
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/consultancy/node_modules ./apps/consultancy/node_modules
COPY --from=deps /app/packages/ui ./packages/ui
COPY --from=builder /app/apps/consultancy/.next ./apps/consultancy/.next
COPY --from=builder /app/apps/consultancy/public ./apps/consultancy/public
COPY --from=builder /app/apps/consultancy/package.json ./apps/consultancy/package.json
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "--dir", "apps/consultancy", "start"]
