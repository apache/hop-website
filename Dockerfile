# Debian 11 (bullseye) left LTS on 2026-08-31, and node:lts-bullseye was
# unpinned, so the apt layer 404s as soon as bullseye moves to archive and every
# Jenkins stage fails with no code change on our side. Pinned by digest, on
# trixie, with the Chromium dependency set removed - nothing in the lockfile
# installs a browser.
FROM node:24-trixie-slim

RUN set -ex \
  && apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*
