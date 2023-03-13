// Just get the stream
const video = document.querySelector('video');
const vx = 0.5;
const vy = 0.5;
const scale = 2;
const setScale = (scale) => {
    video.style.width = `${scale * 100}vw`;
    video.style.height = `${scale * 100}vh`;
    video.style.position = 'absolute';
    video.style.left = `${(0.5 - vx * scale) * 100}vw`;
    video.style.top = `${(0.5 - vy * scale) * 100}vh`;
};
setScale(2);

navigator.mediaDevices
    .getUserMedia({ video: { facingMode: 'user' } })
    .then((mediaStream) => {
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        };
    })
    .catch((err) => {
        // always check for errors at the end.
        console.error(`${err.name}: ${err.message}`);
    });
