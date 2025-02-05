const fetchData = async (endpoint, params) => {
  try {
    const response = await axios.get(endpoint, { params }); // Axios сам добавит параметры в URL
    return response.data;
  } catch (error) {
    console.error("Error while downloading video data:", error);
    throw error;
  }
};

export const fetchVideosList = async (
  getVideoListEndPoint,
  page = 0,
  size = 20
) => {
  return await fetchData(getVideoListEndPoint, { page, size }); // Убраны параметры из строки URL
};

export const fetchVideoByTitleAndTags = async (
  getVideoByTitleEndPoint,
  title = "",
  tags = [],
  page = 0,
  size = 20
) => {
  const params = {
    title,
    tags, // Если нужно, можно использовать tags.join(",") для конкатенации тегов в строку
    page,
    size,
  };
  return await fetchData(getVideoByTitleEndPoint, params);
};
