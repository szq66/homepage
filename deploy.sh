#!/usr/bin/env sh
set -e
npm run docs:build
cd dist
git init
git add -A
git commit -m '更新'

git push -f git@github.com:szq66/szq66.github.io.git master

cd..