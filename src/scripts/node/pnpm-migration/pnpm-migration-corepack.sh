#!/bin/bash

# Script to migrate a project from npm or Yarn to pnpm using Corepack.
# This script ensures Corepack is enabled, prepares the latest pnpm version,
# removes existing npm/Yarn lock files and node_modules, and reinstalls dependencies using pnpm.

# Exit immediately if a command exits with a non-zero status.
set -e

main() {
	echo "Starting project migration to pnpm using Corepack..."
	check_corepack_installation
	prepare_pnpm
	cleanup_project
	install_dependencies
	echo "Migration to pnpm completed successfully!"
}

check_corepack_installation() {
	echo "Checking for Corepack installation..."
	if ! command -v corepack &> /dev/null; then
		echo "Error: Corepack is not installed. Please update Node.js (>= 16.9.0) to use Corepack."
		exit 1
	fi
}

prepare_pnpm() {
	if ! command -v pnpm &> /dev/null; then
		echo "pnpm is not installed. Preparing pnpm using Corepack..."
		corepack enable
		corepack prepare pnpm@latest --activate
	else
		echo "pnpm is already installed."
	fi
}

cleanup_project() {
	if [ -f "package-lock.json" ]; then
		echo "Removing package-lock.json..."
		rm package-lock.json
	fi

	if [ -f "yarn.lock" ]; then
		echo "Removing yarn.lock..."
		rm yarn.lock
	fi

	if [ -d "node_modules" ]; then
		echo "Removing node_modules..."
		rm -rf node_modules
	fi
}

install_dependencies() {
	echo "Installing dependencies using pnpm..."
	pnpm install
}

main
