import { DomGetter } from "./dom-getter.mjs";
import { fetchVideosList, fetchVideoByTitleAndTags } from "./video-api.mjs";
import { VideoData } from "./video-data.mjs";
import { TagList } from "./tag-list.mjs";
import { Pagination } from "./pagination.mjs";

const API_GET_ALL_VIDEOS = "http://localhost/api/videos";

const tagList = new TagList();
const addButton = document.getElementById("add-tag-button");
addButton.addEventListener("click", () => {
  tagList.addTagFromInputBox();
});

const urlParams = new URLSearchParams(window.location.search);
const page = parseInt(urlParams.get("page")) || 0;

const fetchVideos = async (page) => {
  console.log(`Fetching videos for page ${page}`);

  try {
    const response = await fetchVideosList(API_GET_ALL_VIDEOS, page);

    console.log("Response from API:", response); // Проверка структуры данных

    // Преобразование данных в массив объектов VideoResponseDTO
    const videoList = response.map(
      (videoData) =>
        new VideoData(
          videoData.id,
          videoData.title,
          videoData.description,
          videoData.videoUrl,
          videoData.thumbnailUrl || "./imgs/default-thumbnail.png",
          videoData.likes || 100,
          videoData.views || 5000
        )
    );

    // Очистка контейнера перед добавлением новых видео
    const contentList = DomGetter.getContentList();

    console.log("Content List:", contentList); // Должен вернуть DOM-элемент

    if (!contentList) {
      console.error('Контейнер с id="content-list" не найден!');
    }

    contentList.innerHTML = "";

    // Отображение каждой карточки на странице
    videoList.forEach((video) => {
      console.log("Rendering video:", video);
      contentList.innerHTML += video.renderCard();
    });
  } catch (error) {
    console.error("Error while downloading video data:", error);
    throw error;
  }
};

fetchVideos(page);

const totalPages = 10;
new Pagination("pagination-panel", totalPages, fetchVideos);
