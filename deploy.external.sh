#!/bin/bash
set -e  # Exit immediately if any command fails

# Optional: Accept a project name parameter (default is "website")
PROJECT=${1:-website}

echo "==> Step 1: Ensure pnpm is installed..."
if ! command -v pnpm &> /dev/null; then
  echo "pnpm not found. Installing globally..."
  npm install -g pnpm
fi

echo "==> Step 2: Installing dependencies for the entire monorepo..."
pnpm install

echo "==> Step 3: Building shared packages from /packages..."
# Assumes you have a script "build:packages" defined in the root package.json
pnpm run build:packages

echo "==> Step 4: Building the project in external-domains/$PROJECT..."
cd external-domains/$PROJECT
pnpm run build

echo "==> Deployment script completed successfully!"