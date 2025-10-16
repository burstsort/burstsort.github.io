const images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++) {
    if (images[i].onclick)
        images[i].classList.add("hover")
}

function zoom(self) {
    var opacity = 0
    var viewer = document.getElementById("viewer");
    var content = document.getElementById("content");
    var path = typeof self === 'string' ? self : self.src;
    path = path.replace("_thumb", "")

    var image = new Image();
    image.src = path;
    image.onload = function() {
        document.body.style.top = `-${window.scrollY}px`
        document.body.style.position = "fixed"

        viewer.innerHTML  = "<div class=\"image\"><img src=" + path + "></div>";
        viewer.style.opacity = 0;
        viewer.style.display = "block";
        var fadeIn = setInterval(function() {
            if (opacity <= 1.0) {
                viewer.style.opacity = opacity;
                opacity += 0.2;
            }
            else {
                viewer.style.opacity = 1;
                clearInterval(fadeIn);
            }
        }, 10);
    }

    viewer.onclick = function() {
        
        var fadeOut = setInterval(function() {
            if (opacity >= 0.0) {
                viewer.style.opacity = opacity;
                opacity -= 0.2;
            }
            else {
                viewer.style.opacity = 0;
                clearInterval(fadeOut);
                viewer.style.display = "none"
            }
        }, 10);

        const scrollY = document.body.style.top
        document.body.style.position = ""
        document.body.style.top = ""
        window.scrollTo(0, parseInt(scrollY || "0"  ) * -1);
    }
}

function expand(self) {
    var more = self.parentElement.parentElement.querySelector('.more');
    var thumbs = self.parentElement.parentElement.querySelector('.thumbnails');
   more.style.transitionDuration = parseFloat(thumbs.offsetHeight) / 500 + "s";
    if (more.offsetHeight > 0){
        more.style.maxHeight = "0px"
        self.querySelector('.arrow').classList.add("down");
        self.querySelector('.arrow').classList.remove("up");
    } else {
        more.style.maxHeight = parseFloat(thumbs.offsetHeight) + "px";
        self.querySelector('.arrow').classList.add("up");
        self.querySelector('.arrow').classList.remove("down");
    }
}