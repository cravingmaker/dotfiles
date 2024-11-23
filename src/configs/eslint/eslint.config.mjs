import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
	// ESLint
	eslint.configs.recommended,
	importPlugin.flatConfigs.recommended,

	// Prettier
	prettierConfig,

	// Custom rules
	{
		files: ["**/*.{js,cjs,mjs}"],
		rules: {},
	},

	// Ignores
	{
		ignores: [
			// Dependencies
			"**/node_modules",

			// Configurations
			"**/*.config.js",
			"**/*.config.cjs",
			"**/*.config.mjs",
			"**/*.config.ts",
			"**/*.config.cts",
			"**/*.config.mts",

			// Package manager
			"**/package-lock.json",
			"**/pnpm-lock.yaml",
			"**/yarn.lock",
		],
	},
];
