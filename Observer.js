// document.addEventListener("DOMContentLoaded", function() {
//     var videoSection = document.querySelector('.video-container');
//     var video = document.querySelector('.video');

//     var observer = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 video.requestFullscreen(); // Request fullscreen playback when in view
//             }
//         });
//     }, { threshold: 0.5 }); // Trigger when 50% of the video is visible

//     observer.observe(videoSection);
// });

document.addEventListener("DOMContentLoaded", function() {
    var videoSection = document.querySelector('.video-container');
    var video = document.querySelector('.video');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Enlarge the video
                video.classList.add('full-screen-video');
            } else {
                // Shrink the video
                video.classList.remove('full-screen-video');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is visible

    observer.observe(videoSection);
});
