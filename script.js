const images = document.querySelectorAll('.slide-in');

function checkSlide() {
    images.forEach(image => {
        const slideInAt = window.scrollY + window.innerHeight - image.clientHeight / 2;
        const imageBottom = image.offsetTop + image.clientHeight;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        
        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

// Call checkSlide on page load to ensure images are visible initially
checkSlide();

window.addEventListener('scroll', checkSlide);