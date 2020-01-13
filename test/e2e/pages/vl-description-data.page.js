const VlDescriptionData = require('../components/vl-description-data');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlDescriptionDataPage extends Page {
    
    async getVlDescriptionData() {
    	return new VlDescriptionData(this.driver, "[is='vl-description-data']");
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-description-data.html');
    }
}

module.exports = VlDescriptionDataPage;
