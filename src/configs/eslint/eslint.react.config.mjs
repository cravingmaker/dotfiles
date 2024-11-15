import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
	eslint.configs.recommended,
	importPlugin.flatConfigs.recommended,
	{
		files: ["**/*.{js,cjs,mjs,jsx}"],
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
		files: ["**/*.{js,cjs,mjs,jsx}"],
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
		files: ["**/*.{js,cjs,mjs,jsx}"],
		plugins: {
			"react-hooks": reactHooksPlugin,
		},
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		files: ["**/*.{js,cjs,mjs,jsx}"],
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
