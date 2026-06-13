const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

fetch("data/movies.json")
  .then(res => res.json())
  .then(data => {

    const movie = data.find(m => m.id === movieId);

    if (!movie) return;

    document.getElementById("title").innerText = movie.title;
    document.getElementById("description").innerText = movie.desc;
    document.getElementById("video-source").src = movie.video;

    document.getElementById("player").load();
  });
