class DomGetter {

    /**
     * @param {string} elementId
     */
    static getElementValue(elementId){
        return document.getElementById(elementId).value;
    }

    static getSearchNameInputValue(){
        return this.getElementValue("name-input")
    }
    static getTagInputValue(){
        return this.getElementValue("tag-input");
    }

    static getTagPanel(){
        return document.getElementById("tag-panel");
    }
}

export {DomGetter};