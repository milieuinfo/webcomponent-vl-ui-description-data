const VlDescriptionData = require('../components/vl-description-data');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlDescriptionDataPage extends Page {
    async _getDescriptionData(selector) {
        return new VlDescriptionData(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-description-data.html');
    }
}

module.exports = VlDescriptionData;
