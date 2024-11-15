import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ["**/*.{js,cjs,mjs,ts,cts,mts}"],
		plugins: {
			import: importPlugin,
		},
		settings: {
			"import/resolver": {
				typescript: {
					project: "./tsconfig.json",
				},
			},
		},
		rules: {
			...importPlugin.configs.recommended.rules,
			...importPlugin.configs.typescript.rules,
		},
	},
	{
		files: ["**/*.{js,cjs,mjs,ts,cts,mts}"],
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

			// Package managers
			"**/package-lock.json",
			"**/pnpm-lock.yaml",
			"**/yarn.lock",
		],
	},
);
