const axios = require("axios");

export const searchPhotos = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: "food", per_page: 1 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    return response.data.results[0].urls.full;
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
  }
};
