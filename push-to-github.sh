#!/usr/bin/env bash
# One-time setup to push this project to GitHub.
# Usage:  bash push-to-github.sh
set -e

REPO="https://github.com/malikahmi/eCeez-Agency.git"

echo "==> Initialising git (safe if already a repo)"
git init

echo "==> Setting remote to $REPO"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"

echo "==> Staging files (.gitignore excludes node_modules/dist)"
git add .

echo "==> Committing"
git commit -m "eCeez v12: client case studies, affiliate CTA, dev-company pillar, content enrichment" || echo "(nothing new to commit)"

echo "==> Pushing to main"
git branch -M main
git push -u origin main --force

echo ""
echo "Done. Netlify will build automatically if the repo is connected."
