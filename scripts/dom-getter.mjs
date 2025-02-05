const DomGetter = {
  getElementValue: (elementId) => {
    const element = document.getElementById(elementId);
    return element ? element.value : null;
  },

  getSearchNameInputValue: () => DomGetter.getElementValue("name-input"),
  getTagInputValue: () => DomGetter.getElementValue("tag-input"),
  getTagPanel: () => document.getElementById("tag-panel"),
  getContentList: () => document.getElementById("content-list"),
};

export { DomGetter };
