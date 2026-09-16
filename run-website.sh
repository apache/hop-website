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
# Build the complete website and serve it: the Astro half, every documentation
# version fetched from apache/hop, and the search index. Several minutes on a
# cold cache. For the documentation you are editing right now, use
# run-website-local.sh instead.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

usage() {
  cat <<'EOF'
Usage: ./run-website.sh [--port PORT] [--no-serve]

Runs `npm run build` (Astro + all documentation versions + search index) and
then `npm run serve`.

Options:
  --port PORT   port to serve on (default 4000, or $PORT)
  --no-serve    build only, do not start the server
  -h, --help    this message
EOF
}

serve=true
while [[ $# -gt 0 ]]; do
  case "$1" in
    --port) PORT="${2:?--port needs a number}"; shift 2 ;;
    --port=*) PORT="${1#*=}"; shift ;;
    --no-serve) serve=false; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage >&2; exit 2 ;;
  esac
done
export PORT="${PORT:-4000}"

cd "$ROOT"

if [[ ! -d node_modules ]]; then
  echo "==> node_modules is missing, running npm ci"
  npm ci
fi

echo "==> Building the full site (this fetches every release branch of apache/hop)"
npm run build

if [[ "$serve" == true ]]; then
  echo "==> Serving on http://localhost:${PORT} - Ctrl-C to stop"
  npm run serve
fi
