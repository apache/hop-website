#!/usr/bin/env bash
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Build the website against the hop checkout sitting next to this one and serve
# it. Antora reads that working tree directly, uncommitted edits included, so an
# .adoc change is one build away with nothing to commit, push or fetch.
#
#   git clone https://github.com/apache/hop.git ../hop
#   ./run-website-local.sh
#
# --fast re-renders only the documentation (bare Antora, no Astro, no search
# index) which is seconds rather than a minute, but it needs a full build to
# have populated public/ at least once.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLAYBOOK="antora-playbook-hop.yml"

usage() {
  cat <<'EOF'
Usage: ./run-website-local.sh [--fast] [--port PORT] [--no-serve]

Runs `npm run build:hop` (Astro + the documentation from ../hop on disk +
search index) and then `npm run serve`.

Options:
  --fast        re-render the documentation only, skipping Astro and the search
                index; requires a previous full build
  --port PORT   port to serve on (default 4000, or $PORT)
  --no-serve    build only, do not start the server
  -h, --help    this message
EOF
}

serve=true
fast=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    --fast) fast=true; shift ;;
    --port) PORT="${2:?--port needs a number}"; shift 2 ;;
    --port=*) PORT="${1#*=}"; shift ;;
    --no-serve) serve=false; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage >&2; exit 2 ;;
  esac
done
export PORT="${PORT:-4000}"

cd "$ROOT"

# The path is the playbook's, not ours: antora-playbook-hop.yml names ../hop as
# its content source, so that is the only checkout this build can read.
HOP_DIR="../hop"
if [[ ! -d "${HOP_DIR}/docs/hop-user-manual" ]]; then
  echo "No hop checkout at ${HOP_DIR}: ${PLAYBOOK} reads the documentation from there." >&2
  echo "Clone it next to this repository:" >&2
  echo "  git clone https://github.com/apache/hop.git ../hop" >&2
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "==> node_modules is missing, running npm ci"
  npm ci
fi

if [[ "$fast" == true ]]; then
  # Bare Antora writes /manual and /dev-manual into public/ and nothing else,
  # so the Astro pages, the generated UI partials and the search index have to
  # be there already from an earlier build.
  if [[ ! -f public/index.html ]]; then
    echo "--fast needs a full build first: public/index.html is missing." >&2
    echo "Run ./run-website-local.sh once without --fast." >&2
    exit 1
  fi
  echo "==> Re-rendering the documentation from ${HOP_DIR} (--fast: no Astro, no search index)"
  npx antora "$PLAYBOOK"
else
  echo "==> Building the site with the documentation from ${HOP_DIR}"
  npm run build:hop
fi

if [[ "$serve" == true ]]; then
  echo "==> Serving on http://localhost:${PORT} - Ctrl-C to stop"
  npm run serve
fi
