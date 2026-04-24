#!/bin/sh
set -eu

stamp_file="/app/node_modules/.package-deps.sha256"

compute_dependency_hash() {
  sha256sum /app/package.json /app/package-lock.json | sha256sum | awk '{print $1}'
}

should_install=false

if [ ! -d /app/node_modules ] || [ -z "$(ls -A /app/node_modules 2>/dev/null)" ]; then
  should_install=true
fi

current_hash="$(compute_dependency_hash)"
installed_hash=""

if [ -f "$stamp_file" ]; then
  installed_hash="$(cat "$stamp_file")"
else
  should_install=true
fi

if [ "$current_hash" != "$installed_hash" ]; then
  should_install=true
fi

if [ "$should_install" = "true" ]; then
  echo "Installing npm dependencies for the container..."
  npm ci
  printf '%s' "$current_hash" > "$stamp_file"
fi

exec "$@"
