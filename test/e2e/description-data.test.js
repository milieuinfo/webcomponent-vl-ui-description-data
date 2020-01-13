
const { assert, driver } = require('vl-ui-core').Test;
const VlDescriptionDataPage = require('./pages/vl-description-data.page');

describe('vl-description-data', async () => {
    const vlDescriptionDataPage = new VlDescriptionDataPage(driver);

    before(() => {
        return vlDescriptionDataPage.load();
    });
    

    it('de value en label van elke description data block worden correct getoond', async () => {
    	const vlDescriptionData = await vlDescriptionDataPage.getVlDescriptionData();
    	
    	const aantalVlDescriptionDataBlocks = await vlDescriptionData.getAantalVlDescriptionDataBlocks();
    	assert.equal(aantalVlDescriptionDataBlocks, 4);
    	
    	const firstBlock = await vlDescriptionData.getVlDescriptionDataBlock(0);
        assertDescriptionDataBlock(firstBlock, "Uitgever", "Kind en Gezin");

        const secondBlock = await vlDescriptionData.getVlDescriptionDataBlock(1);
        assertDescriptionDataBlock(firstBlock, "Publicatiedatum", "Augustus 2018");
    });

    async function assertDescriptionDataBlock(descriptionDataBlock, expectedLabel, expectedValue) {
    	const label = await descriptionDataBlock.getLabel();
    	assert.isTrue(await label.getText() == expectedLabel);
    	const value = await descriptionDataBlock.getValue();
    	assert.isTrue(await value.getText() == expectedValue);
    }
});
