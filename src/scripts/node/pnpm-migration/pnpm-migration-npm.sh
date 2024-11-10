#!/bin/bash

# Script to migrate a project from npm or Yarn to pnpm using npm.
# This script checks for npm and pnpm installations, installs pnpm if needed,
# removes existing npm/Yarn lock files and node_modules, and reinstalls dependencies using pnpm.

# Exit immediately if a command exits with a non-zero status.
set -e

main() {
	echo "Starting project migration to pnpm..."
	check_npm_installation
	install_pnpm
	cleanup_project
	install_dependencies
	echo "Migration to pnpm completed successfully!"
}

check_npm_installation() {
	echo "Checking for npm installation..."
	if ! command -v npm &> /dev/null; then
		echo "Error: npm is not installed. Please install Node.js (which includes npm) to proceed."
		exit 1
	fi
}

install_pnpm() {
	if ! command -v pnpm &> /dev/null; then
		echo "pnpm is not installed. Installing pnpm globally using npm..."
		npm install -g pnpm
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
