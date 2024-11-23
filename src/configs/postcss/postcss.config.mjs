import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssModules from "postcss-modules";

export default {
	plugins: [autoprefixer(), cssnano(), postcssModules()],
};
