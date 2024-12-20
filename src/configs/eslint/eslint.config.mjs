import commentsPlugin from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	/* Base ECMAScript configs */
	eslint.configs.recommended,
	commentsPlugin.recommended,
	importPlugin.flatConfigs.recommended,

	/* If uses React */
	{
		files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"jsx-a11y": jsxA11yPlugin,
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
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
			...jsxA11yPlugin.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
		},
	},

	/* If uses TypeScript */
	tseslint.config(
		{
			files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
			plugins: {
				import: importPlugin,
			},
			settings: {
				"import/resolver": {
					typescript: true,
					node: true,
				},
			},
			rules: {
				...importPlugin.configs.typescript.rules,
			},
		},
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
	),

	// Prettier
	prettierConfig, // Turns off all rules that are unnecessary or might conflict with Prettier

	// Custom rules
	{
		files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
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

			// Package managers
			"**/package-lock.json",
			"**/pnpm-lock.yaml",
			"**/yarn.lock",
		],
	},
];
