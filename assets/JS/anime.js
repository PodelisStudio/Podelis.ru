let videoList = document.querySelector(".video-grid");

let massListAnime = [
  {
    title: "Аниме 1",
    src: "",
    description: "Аниме титл",
    poster: "./assets/img/Anime/hunt.jpg",
  },
  {
    title: "Аниме 2",
    src: "",
    description: "Аниме титл 2",
    poster: "./assets/img/Anime/2х.png",
  },
];

for (let i = 0; i < 2; i++) {
  let video = document.createElement("video");
  video.poster = massListAnime[i].poster;

  console.log(videoList);
  videoList.insertAdjacentElement("afterbegin", video);
  video.className = "video";
}
