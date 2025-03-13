import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

class VideoPlayer {
    constructor() {
        this.init();
    }

    init() {
        const videoPlayers = $('.video-player');

        videoPlayers.each((_, element) => {
            // Initialize the Plyr player
            const player = new Plyr(element, {
                autoplay: true,
                controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'pip', 'fullscreen']
            });

            // Add touch event for play/pause on mobile
            $(element)
                .parent()
                .on('click', function (event) {
                    event.preventDefault(); // Prevent unwanted side effects
                    if (player.playing) {
                        player.pause();
                    } else {
                        player.play();
                    }
                });
        });
    }
}

export default VideoPlayer;
