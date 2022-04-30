// ScrollFade 0.1

var fadeElements = document.getElementsByClassName('fade');

function scrollFade() {
    var viewportBottom = window.scrollY + window.innerHeight;

    for (var index = 0; index < fadeElements.length; index++) {
        var element = fadeElements[index];
        var rect = element.getBoundingClientRect();

        var elementFourth = rect.height / 4;
        var fadeInPoint = window.innerHeight - elementFourth;
        var fadeOutPoint = -(rect.height / 2);

        if (rect.top <= fadeInPoint) {
            element.classList.add('fade--visible');
            element.classList.add('fade--animate');
            element.classList.remove('fade--hidden');
        } else {
            element.classList.remove('fade--visible');
            element.classList.add('fade--hidden');
        }

        if (rect.top <= fadeOutPoint) {
            element.classList.remove('fade--visible');
            element.classList.add('fade--hidden');
        }
    }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});