
const { assert, driver } = require('vl-ui-core').Test;
const VlDescriptionDataPage = require('./pages/vl-description-data.page');

describe('vl-description-data', async () => {
    const vlDescriptionDataPage = new VlDescriptionDataPage(driver);

    before(() => {
        return vlDescriptionDataPage.load();
    });

});
