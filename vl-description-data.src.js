import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlDescriptionData
 * @class
 * @classdesc 
 * 
 * @extends VlNativeElement
 * 
 * @property 
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-description-data/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-description-data/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-description-data.html|Demo}
 * 
 */
export class VlDescriptionData extends NativeVlElement(HTMLDivElement) {
	constructor() {
		super();
		this.classList.add('vl-description-data');
		this.querySelectorAll("[data-vl-label]").forEach(label => {
			label.classList.add("vl-description-data__label");
		})
		this.querySelectorAll("[data-vl-value]").forEach(label => {
			label.classList.add("vl-description-data__value");
		})
	}	
	
    get _stylePath() {
        return '../style.css';
    }

}

define('vl-description-data', VlDescriptionData, {extends: 'div'});
