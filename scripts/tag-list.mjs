import { DomGetter } from "./dom-getter.mjs";

export class TagList {
  constructor() {
    this._tagPanel = null;
    this.tags = new Set();
    console.log("Initialized tag list");
  }

  tagPanel() {
    if (this._tagPanel == null) {
      this._tagPanel = DomGetter.getTagPanel();
    }
    return this._tagPanel;
  }
  addTagFromInputBox() {
    const value = DomGetter.getTagInputValue();
    console.log("got value ", value);
    if (value && value.trim()) {
      this.addTag(value);
    }
  }
  addTag(tagName) {
    if (this.tags.has(tagName)) {
      return;
    }
    this.tags.add(tagName);
    this.addHtmlButton(tagName);
  }
  addHtmlButton(tagName) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("tag-item");
    button.addEventListener("click", () => {
      this.removeHtmlButton(button, tagName);
    });
    button.innerText = tagName;
    this.tagPanel().appendChild(button);
  }

  removeHtmlButton(button, tagName) {
    this.tags.delete(tagName);
    button.remove();
  }
}
