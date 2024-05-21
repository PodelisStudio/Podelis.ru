let videoList = document.querySelector(".video-grid");

let massListAnime = [
  {
    title: "pedro",
    src: "./assets/video/pedro.mp4",
    description: "Аниме титл",
    poster: "./assets/img/Anime/hunt.jpg",
  },
  {
    title: "Аниме 2",
    src:"./assets/video/hunt1.mp4",
    description: "Аниме титл 2",
    poster: "./assets/img/Anime/2х.png",
  },
  
  {
    title: "Аниме 2",
    src: "./assets/video/runhunt.mp4",
    description: "Аниме титл 2",
    poster: "./assets/img/Anime/2х.png",
  },
  {
    title: "Аниме 2",
    src: "./assets/video/huntedit.mp4",
    description: "Аниме титл 2",
    poster: "./assets/img/Anime/2х.png",
  },


];

for (let i = 0; i < massListAnime.length; i++) {
  let video = document.createElement("video");
  video.poster = massListAnime[i].poster;

  console.log(videoList);
  videoList.insertAdjacentElement("afterbegin", video);
  video.className = "video";
  video.src = massListAnime[i].src;
  video.controls = true
}
console.log(massListAnime);