import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
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
		files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
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
		files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
		plugins: {
			"jsx-a11y": jsxA11yPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
		plugins: {
			react: reactPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
	},
	{
		plugins: {
			"react-hooks": reactHooksPlugin,
		},
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
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
);
