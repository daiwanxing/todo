#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo -e 'npx --no-install commitlint --edit "$1"'
