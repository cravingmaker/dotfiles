import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
	eslint.configs.recommended,
	importPlugin.flatConfigs.recommended,
	{
		files: ["**/*.{js,cjs,mjs}"],
		rules: {},
	},
	prettierConfig,
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
