import MediaPlayer from "./mediaplayer.js"
import AutoPlay from "./autoplay.js"
import AutoPause from "./autopause.js"

const video = document.querySelector("video")
const playButton = document.querySelector("#playButton")
const muteButton = document.querySelector("#muteButton")

const player = new MediaPlayer({el: video, 
    plugins: [new AutoPlay(), new AutoPause()],
})
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()
