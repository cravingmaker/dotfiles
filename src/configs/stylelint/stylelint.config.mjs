import stylelintConfigRecessOrder from "stylelint-config-recess-order";
import stylelintConfigStandard from "stylelint-config-standard";

export default {
	extends: [stylelintConfigStandard, stylelintConfigRecessOrder],
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
};
