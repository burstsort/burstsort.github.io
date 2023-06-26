function zoom(self) {
    var viewer = document.getElementById("viewer");
    var content = document.getElementById("content");
    var path = typeof self === 'string' ? self : self.src;
    var image = new Image();
    image.src = path;
    image.onload = function() {
        document.body.style.top = `-${window.scrollY}px`
        document.body.style.position = "fixed"

        viewer.innerHTML  = "<div class=\"image\"><img src=" + path + "></div>";
        viewer.style.display = "block";
    }

    viewer.onclick = function() {
        viewer.style.display = "none"

        const scrollY = document.body.style.top
        document.body.style.position = ""
        document.body.style.top = ""
        window.scrollTo(0, parseInt(scrollY || "0"  ) * -1);
    }
}

function expand(self) {
    var more = self.parentElement.parentElement.querySelector('.more');
    if (more.style.display == "block"){
        more.style.display = "none"
        self.querySelector('.arrow').classList.add("down");
        self.querySelector('.arrow').classList.remove("up");
    } else {
        more.style.display = "block"
        self.querySelector('.arrow').classList.add("up");
        self.querySelector('.arrow').classList.remove("down");
    }
    console.log(more.style.display)
}