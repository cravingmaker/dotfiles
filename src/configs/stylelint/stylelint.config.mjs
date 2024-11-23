import stylelintConfigStandard from "stylelint-config-standard";
import stylelintConfigRecessOrder from "stylelint-config-recess-order";

export default {
	extends: [stylelintConfigStandard, stylelintConfigRecessOrder],
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
};
