const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");


const displayMediaOptions = {
    video: {
        cursor: "always"
    },
    audio: true
}

startElem.addEventListener('click', (e) => {
    startCapture();
}, false)
stopElem.addEventListener('click', (e) => {
    startCapture()
}, false)

async function startCapture(displayMediaOptions) {
    // let captureStream = null 
    logElem.innerHTML = "";
    try {
        // captureStream = await 
        videoElem.srcObject = await
        navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
        dumpOptionsInfo();
    } catch (error) {
        console.error(`Error: ${error}`)
    }
    return captureStream
}

function stopCapture(e) {
    let tracks = videoElem.srcObject.getTracks();

    tracks.forEach((track) => track.stop());

    videoElem.srcObject = null
}
function dumpOptionsInfo() {
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];
  
    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
  }