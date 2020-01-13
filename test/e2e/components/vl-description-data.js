const { VlElement } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlDescriptionDataBlock extends VlElement {
	
	async getLabel() {
		return this.findElement(By.css(".vl-description-data__label"));
	}
	
	async getValue() {
		return this.findElement(By.css(".vl-description-data__value"));
	}
	
}

class VlDescriptionData extends VlElement {  
 
	async getVlDescriptionDataBlock(index) {
		const vlDescriptionDataBlocks = await this.findElements(By.css(".vl-description-data-block"));
		return new VlDescriptionDataBlock(this.driver, vlDescriptionDataBlocks[index]);
	} 
	
	async getAantalVlDescriptionDataBlocks() {
		const vlDescriptionDataBlocks = await this.findElements(By.css(".vl-description-data-block"));
		return vlDescriptionDataBlocks.length;
	}
	
}

module.exports = VlDescriptionData;
