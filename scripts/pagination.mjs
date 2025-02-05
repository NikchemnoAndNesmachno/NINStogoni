// pagination.js

export class Pagination {
  constructor(containerId, totalPages, fetchFunction) {
    this.container = document.getElementById(containerId);
    this.totalPages = totalPages;
    this.fetchFunction = fetchFunction;
    this.currentPage = this.getCurrentPageFromURL();
    this.render();
  }

  getCurrentPageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("page")) || 0;
  }

  updateURL(page) {
    window.history.pushState({}, "", `?page=${page}`);
  }

  changePage(page) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateURL(page);
    this.render();
    this.fetchFunction(page);
  }

  render() {
    this.container.innerHTML = "";

    const createButton = (label, onClick, hidden = false, isActive = false) => {
      const button = document.createElement("span");
      button.innerHTML = ` ${label} `;
      button.style.cursor = "pointer";
      button.style.color = isActive ? "green" : "blue";
      button.onclick = onClick;
      if (hidden) button.style.visibility = "hidden";
      this.container.appendChild(button);
    };

    // Кнопка "Назад"
    createButton(
      "«",
      () => this.changePage(this.currentPage - 1),
      this.currentPage === 1
    );

    // Определение диапазона отображаемых страниц
    const pagesToShow = 5;
    const halfRange = Math.floor(pagesToShow / 2);
    let startPage = Math.max(1, this.currentPage - halfRange);
    let endPage = Math.min(this.totalPages, this.currentPage + halfRange);

    if (this.currentPage <= halfRange) {
      endPage = Math.min(this.totalPages, pagesToShow);
    } else if (this.currentPage + halfRange > this.totalPages) {
      startPage = Math.max(1, this.totalPages - pagesToShow + 1);
    }

    // Кнопки с номерами страниц
    for (let i = startPage; i <= endPage; i++) {
      createButton(i, () => this.changePage(i), false, i === this.currentPage);
    }

    // Кнопка "Вперёд"
    createButton(
      "»",
      () => this.changePage(this.currentPage + 1),
      this.currentPage === this.totalPages
    );
  }
}
