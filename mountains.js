const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    
    if (navigationSwitcher.innerHTML == '☰') {
        navigationSwitcher.innerHTML = '🗙';
    } else {
        navigationSwitcher.innerHTML = '☰';
    }        
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

class Slider {
    constructor(images) {
        this.images= images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.currentSlide = 0;

        this.UiSelectors = {
            slide: '[data-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]'
        }
    }

    initializeSlider() {
        this.slide = document.querySelector(this.UiSelectors.slide);
        this.prevBtn = document.querySelector(this.UiSelectors.buttonPrev);
        this.nextBtn = document.querySelector(this.UiSelectors.buttonNext);

        this.image = document.createElement('img');
        this.image.classList.add('slide__image');

        this.setSlideAttributes(0);

        this.slide.appendChild(this.image);

        this.addListeners();
    }

    addListeners() {
        this.prevBtn.addEventListener('click', () => this.changeSlide(this.currentSlide - 1));
        this.nextBtn.addEventListener('click', () => this.changeSlide(this.currentSlide + 1));
    }

    changeSlide(index) {
        if (index === -1) {
            index = 2;
        }

        if (index === 3) {
            index = 0;
        }
        

        this.currentSlide = index;

        this.setSlideAttributes(index);
    }

    setSlideAttributes(index) {
        this.image.setAttribute('src', Array.isArray(this.images) && this.images.length && this.images[index]);
        this.image.setAttribute('alt', `Slide ${index + 1}`);
    }
}