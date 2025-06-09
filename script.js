document.addEventListener("keydown", function(k) {
    if(k.key === "ArrowLeft"){
        const a = document.querySelector('[slot = "prevButton"]');
        if (a) a.click();
    }


    if (k.key === "ArrowRight") {
        const b = document.querySelector('[slot = "nextButton"]');
        if(b) b.click();
    }
}
)