/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: "@snowpack/app-scripts-svelte",
	mount: {
		public: "/",
		src: "/_dist_",
	},
	plugins: [
		[
			"@snowpack/plugin-build-script",
			{ cmd: "postcss", input: [".css"], output: [".css"] },
		],
		"@snowpack/plugin-svelte",
		"@snowpack/plugin-dotenv",
		"@snowpack/plugin-typescript",
	],
	packageOptions: {
		// installTypes: true,
		types: true,
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},

	alias: {
		/* ... */
	},
};
