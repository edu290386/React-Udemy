export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=tD5ETZAxIU61RoM0XqW7DV3IVN0zOzB3&q=${category}&limit=12`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs
};