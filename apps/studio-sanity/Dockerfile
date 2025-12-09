FROM node:22-alpine AS base

ARG PNPM_VERSION=10.20.0
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=${PNPM_HOME}:$PATH

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

FROM base AS deps

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/studio-sanity/package.json ./apps/studio-sanity/package.json
COPY apps/nextjs/package.json ./apps/nextjs/package.json

RUN pnpm install --frozen-lockfile

FROM deps AS builder

ENV SANITY_STUDIO_PROJECT_ID=0hp0ah4w
ENV SANITY_STUDIO_DATASET=production

COPY . .
RUN pnpm --filter sanity run build

FROM base AS runner

WORKDIR /app

RUN pnpm add --global http-server@14.1.1

COPY --from=builder /app/apps/studio-sanity/dist ./dist
COPY --from=builder /app/apps/studio-sanity/package.json ./package.json

EXPOSE 3333

CMD ["http-server", "dist", "-p", "3333", "-a", "0.0.0.0", "-c", "-1"]
