import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// web audio api
const audioContext = new AudioContext();

const audio = document.querySelector("audio");
const sound = audioContext.createMediaElementSource(audio);
sound.connect(audioContext.destination);
const playButton = document.getElementById("play");
const restartButton = document.getElementById("restart");
playButton.addEventListener("click", () => {
    if (audioContext.state === "suspended"){
        audioContext.resume();
    }

    if (playButton.dataset.playing === "false"){
        audio.play();
        playButton.dataset.playing = "true";
        playButton.textContent = "Pause";
    } else if (playButton.dataset.playing === "true"){
        audio.pause();
        playButton.dataset.playing = "false";
        playButton.textContent = "Resume";
    }
},
false
);

restartButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
})

audio.addEventListener(
    "ended",
    () => {
      playButton.dataset.playing = "false";
      playButton.textContent = "Play Music";
    },
    false
  );

// gsap
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: ".radio",
        start: "bottom center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true
    }
})
    // .fromTo(".center", {y: innerHeight*1.5}, {y: inner})
    // .fromTo(".bottom", {y: innerHeight*1.5}, {y: innerHeight/2})
    .from(".center", { y: innerHeight * 2 })
    .from(".bottom", { y: innerHeight * 2 })