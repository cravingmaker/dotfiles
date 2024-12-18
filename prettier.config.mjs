export default {
	useTabs: true,
	printWidth: 120,
	plugins: ["prettier-plugin-packagejson", "prettier-plugin-sh", "@ianvs/prettier-plugin-sort-imports"],
	importOrder: [
		"<TYPES>",
		"<TYPES>^[.]",
		"",
		"<BUILTIN_MODULES>",
		"",
		"^react$",
		"^react-dom$",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^(?!.*[.]css$)[./].*$",
		".css$",
	],
};
