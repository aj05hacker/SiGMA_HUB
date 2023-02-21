//HOVER EFFECT FOR VEDIO (START)-----------------------------

var videos = document.getElementsByClassName('hover-video');

        for (var i = 0; i < videos.length; i++) {
            videos[i].addEventListener('mouseover', function() {
                this.play();
            });
        
            videos[i].addEventListener('mouseout', function() {
                this.pause();
                this.currentTime = 0;
            });
        }
//HOVER EFFECT FOR VEDIO (END)-------------------------------
