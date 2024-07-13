const title = document.querySelector(".title");
const audio = document.querySelector(".audio")
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".play-pause");
const next = document.querySelector(".next");
const skip = document.querySelector(".skip");
const volume = document.querySelector(".volume");
const playlist = document.querySelector(".playlist");
let index = 0;

const list = Array.from(document.querySelectorAll(".track")).map(song => ({
    title: song.textContent,
    src: song.getAttribute('data-src')
}))

function loadTrack(index) {
    audio.src = list[index].src;
    title.textContent = list[index].title;
}

playPause.addEventListener("click", () => {
    if(audio.paused){
        audio.play();
        playPause.textContent = "Pause";
    }
    else{
        audio.pause();
        playPause.textContent = "Play";
    }
})

prev.addEventListener("click", () => {
    index = (index-1 + list.length) % list.length;
    loadTrack(index);
    audio.play();
    playPause.textContent = "Pause";
})

next.addEventListener("click", () => {
    index = (index + 1) % list.length;
    loadTrack(index);
    audio.play();
    playPause.textContent = "Pause";
})

skip.addEventListener("click", () =>{
    index = (index + 2) % list.length;
    loadTrack(index);
    audio.play();
    playPause.textContent = "Pause";
})

volume.addEventListener("input", () => {
    audio.volume = volume.value;
})

playlist.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        index = Array.from(playlist.children).indexOf(event.target);
        loadTrack(index);
        audio.play();
        playPause.textContent = "Pause";
    }
})

loadTrack(index);