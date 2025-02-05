export class VideoData {
  constructor(id, title, description, videoUrl, thumbnailUrl, likes, views) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.videoUrl = videoUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.likes = likes;
    this.views = views;
  }

  // Метод для отображения информации о видео
  displayInfo() {
    return `
        Title: ${this.title}
        Description: ${this.description}
        Video URL: ${this.videoUrl}
        Thumbnail URL: ${this.thumbnailUrl}
        Likes: ${this.likes}
        Views: ${this.views}
      `;
  }

  // Метод для отображения видео-карточки на странице
  renderCard() {
    return `
      <article class="search-result-element">
        <a href="${this.videoUrl}" target="_blank">
          <img src="${this.thumbnailUrl}" alt="${this.title}" />
        </a>
        <div class="search-result-below-panel">
          <section class="search-result-statistics">
            <div class="search-result-statistics-likes">
              <span class="likes-title ico-like"></span>
              <span class="likes-number">${this.likes}</span>
            </div>
            <div class="search-result-statistics-views">
              <span class="views-title ico-views"></span>
              <span class="views-number">${this.views}</span>
            </div>
          </section>
          <section class="search-result-statistics-buttons">
            <button type="button" class="ico-download"></button>
            <button type="button" class="ico-copy"></button>
          </section>
        </div>
        <section class="search-result-description">
          <span class="search-result-description-title">${this.title}</span>
        </section>
        <section class="search-result-hover" style="display: none;">
          <button type="button" class="result-download">Скачати</button>
          <button type="button" class="result-copy">Скопіювати</button>
          <button type="button" class="result-info">Деталі</button>
        </section>
      </article>
    `;
  }

  // Метод для обновления количества лайков
  updateLikes(newLikes) {
    this.likes = newLikes;
  }

  // Метод для обновления количества просмотров
  updateViews(newViews) {
    this.views = newViews;
  }
}
