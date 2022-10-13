const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f02cb535c0e59c5987d7c49644b9a744",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
