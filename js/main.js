document.addEventListener('DOMContentLoaded', function() {
    // first slider
    $('.first-slider-container').slick({
        arrows: true,
        prevArrow: '.first-slider-prev-arrow',
        nextArrow: '.first-slider-next-arrow',
    });

    // first slider counter
    const firstSliderCurrentSlideHtml = document.querySelector('.first-slider-counter__current-slide');
    const firstSliderNoOfSlidesHtml = document.querySelector('.first-slider-counter__no-of-slides');
    const firstSlidePreviousSlideHtml = document.querySelector('.first-slider-counter__previous-slide');
    var firstSliderNoOfSlides =  $(".first-slider-container").slick("getSlick").slideCount;
    if (parseInt(firstSliderNoOfSlides) < 10) {
        firstSliderNoOfSlides = '0' + firstSliderNoOfSlides;
    };
    firstSliderNoOfSlidesHtml.innerHTML = firstSliderNoOfSlides;

    var firstSliderCurrentSlide = '01';
    firstSliderCurrentSlideHtml.innerHTML = firstSliderCurrentSlide;

    var firstSlidePreviousSlide = firstSliderNoOfSlides;
    firstSlidePreviousSlideHtml.innerHTML = firstSlidePreviousSlide;
    $('.first-slider-container').on('afterChange', function() {
        firstSlidePreviousSlide = firstSliderCurrentSlide;
        firstSliderCurrentSlide = $(".first-slider-container").slick("getSlick").currentSlide + 1;
        if (firstSliderCurrentSlide < 10) {
            firstSliderCurrentSlide = '0' + firstSliderCurrentSlide;
        };
        var temp = firstSliderCurrentSlide;
        firstSlidePreviousSlideHtml.innerHTML = temp
        firstSliderCurrentSlideHtml.innerHTML = firstSliderCurrentSlide;
        setTimeout(function() {
            firstSlidePreviousSlideHtml.innerHTML = firstSlidePreviousSlide;
        }, 500);
        firstSliderCurrentSlideHtml.style.animation = 'currentSlide 0.5s forwards';
        setTimeout(function() {
            firstSliderCurrentSlideHtml.style.animation = 'none';
        }, 500);
        firstSlidePreviousSlideHtml.style.animation = 'prevSlide 0.3s forwards';
        setTimeout(function() {
            firstSlidePreviousSlideHtml.style.animation = 'none';
        }, 500);
    });
    $('.first-slider-container').on('beforeChange', function() {
        console.log('pre');
    });

    // second slider 
    $('.second-slider-container').slick({
        arrows: true,
        prevArrow: '.second-slider-prev-arrow',
        nextArrow: '.second-slider-next-arrow'
    })
    
    // third slider 
    $('.third-slider-container').slick({
        arrows: true,
        prevArrow: '.third-slider-prev-arrow',
        nextArrow: '.third-slider-next-arrow'
    })

    window.onscroll = function() {
        if (window.innerWidth > 750) {
            // display header on top after 250px scroll
            var headerSetWidth;
            if (window.innerWidth > 1330) {
                headerSetWidth = 'calc(100% - 414px)';
            }
            else {
                headerSetWidth = '100%';
            }
            const header = document.querySelector('.header');
            if (document.documentElement.scrollTop > 250) {
                header.style.width = '100%';
                header.style.position = 'fixed';
                header.style.backgroundColor = '#fff';
                header.style.padding = '10px 30px';
                header.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                header.style.maxHeight = '0';
                header.style.animation = 'header 0.2s ease-out forwards';
            }
            if (document.documentElement.scrollTop < 250) {
                header.style.width = headerSetWidth;
                header.style.position = 'absolute';
                header.style.backgroundColor = 'transparent';
                header.style.padding = '95px 50px 20px 90px';
                header.style.boxShadow = 'none';
                header.style.maxHeight = '200px';
                header.style.animation = 'none';
            }
        }
    }

    // mobile nav 
    const mobileNavBtn = document.querySelector('.header__nav-btn');
    const nav = document.querySelector('.header__nav');
    const overlay = document.querySelector('.overlay');
    mobileNavBtn.onclick = () => {
        if (mobileNavBtn.classList.contains('open')) {
            mobileNavBtn.classList.remove('open');
            nav.classList.remove('open');
            overlay.classList.remove('open');
        }
        else {
            mobileNavBtn.classList.add('open');
            nav.classList.add('open');
            overlay.classList.add('open');
        }
    };
    overlay.onclick = () => {
        mobileNavBtn.classList.remove('open');
        nav.classList.remove('open');
        overlay.classList.remove('open');
    }
})