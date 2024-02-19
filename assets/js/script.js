// Cursor Js
function handleScrollActiveClass(event) {
    if (document.getElementById("cursor")) {
        var element = document.querySelector("body");
        var position = element.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight + 280) {
            document.getElementById("cursor").style.visibility = "visible";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    function disableDragButtonMove(e) {
        gsap.to(button, {
            css: {
                left: e.clientX,
                top: e.clientY,
            },
        });
    }
    window.addEventListener("scroll", handleScrollActiveClass);
    window.addEventListener("pointermove", disableDragButtonMove);
    window.addEventListener("mousemove", disableDragButtonMove);

    var button = document.querySelector(".cursor");

    var elements = document.querySelectorAll(".cursor-scale, a, button, .cursor-img");
    elements.forEach(function (el) {
        el.addEventListener("mouseover", function () {
            gsap.to(button, {
                css: {
                    transform: "translate(-50%, -50%) scale(1)",
                    width: "112px",
                    height: "112px",
                    fontSize: "20px",
                    backgroundColor: "#b2806c",
                    borderColor: "#b2806c",
                    "mix-blend-mode": "normal",
                    opacity: 1,
                },
            });
        });
        el.addEventListener("mouseout", function () {
            gsap.to(button, {
                css: {
                    transform: "translate(-50%, -50%) scale(1)",
                    width: "0px",
                    height: "0px",
                    fontSize: "0px",
                    borderColor: "#b2806c",
                    "mix-blend-mode": "normal",
                    opacity: 0,
                },
            });
        });

    });
});

/*Sticky Header*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $(".header").addClass("is-sticky");
    } else {
        $(".header").removeClass("is-sticky");
    }
});
/*Sticky Header*/

// Menu Start //
function menuOpen() {
    $("body").addClass("menu-open");
    $(".hamburger").addClass("active");
    $(".navbar-nav").addClass("menuhide");
}

function menuClose() {
    $("body").removeClass("menu-open");
    $(".hamburger").removeClass("active");
}

/** Menu **/
let t1 = gsap.timeline({
    paused: true,
    onStart: menuOpen,
    onReverseComplete: menuClose,
});

t1.to(".nav-container", {
    duration: 0.6,
    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    right: 0,
    ease: "Power3.InOut",
});

t1.from(
    ".mainnav__loadedbtn",
    {
        stagger: 0.1,
        opacity: 0,
        y: 20,
        ease: "Power3.InOut",
    },
    "-=0"
);
t1.from(
    ".main-nav .mainnav__inner",
    {
        stagger: 0.1,
        opacity: 0,
        y: 20,
        ease: "Power3.InOut",
    },
    "-=0"
);
t1.from(
    ".main-nav .btn-custom",
    {
        stagger: 0.1,
        opacity: 0,
        y: 20,
        ease: "Power3.InOut",
    },
    "-=0"
);

t1.reverse();

$(".menu-icon").on("click", function () {
    t1.reversed(!t1.reversed());
});
// Menu End //  

// GSAP Animation 
$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    const anim_fade = gsap.utils.toArray('.anim_fade');
    anim_fade.forEach((box, i) => {
        const anim = gsap.fromTo(box.children, { autoAlpha: 0 }, { delay: 0.2, duration: 1, autoAlpha: 1, stagger: 0.25 });
        ScrollTrigger.create({
            trigger: box,
            ease: "power2.inOut",
            animation: anim,
            toggleActions: 'play none none none',
            once: false,
        });
    });

    const anim_fadeinup = gsap.utils.toArray('.anim_fadeinup');
    anim_fadeinup.forEach((box, i) => {
        const anim = gsap.fromTo(box.children, { autoAlpha: 0, y: 50 }, { delay: 0.2, duration: 1, autoAlpha: 1, y: 0, stagger: 0.25 });
        ScrollTrigger.create({
            trigger: box,
            ease: "power2.inOut",
            animation: anim,
            toggleActions: 'play none none none',
            once: false,
        });
    });

    const anim_fadeleft = gsap.utils.toArray('.anim_fadeleft');
    anim_fadeleft.forEach((box, i) => {
        const anim = gsap.fromTo(box, { autoAlpha: 0, x: -50 }, { delay: 0.4, duration: 1, autoAlpha: 1, x: 0, stagger: 0.35 });
        ScrollTrigger.create({
            trigger: box,
            ease: "power2.inOut",
            animation: anim,
            toggleActions: 'play none none none',
            once: false,
        });
    });

    const anim_faderight = gsap.utils.toArray('.anim_faderight');
    anim_faderight.forEach((box, i) => {
        const anim = gsap.fromTo(box, { autoAlpha: 0, x: 50 }, { delay: 0.2, duration: 1, autoAlpha: 1, x: 0, stagger: 0.35 });
        ScrollTrigger.create({
            trigger: box,
            ease: "power2.inOut",
            animation: anim,
            toggleActions: 'play none none none',
            once: false,
        });
    });

    const logotext = gsap.utils.toArray('.animText');
    logotext.forEach((leng, i) => {
        const anim = gsap.fromTo(leng.children, { autoAlpha: 0, y: 50 }, { y: 0, duration: 0.55, autoAlpha: 1, stagger: 0.5, delay: 0.5 });
        ScrollTrigger.create({
            trigger: leng,
            ease: "power2.in",
            animation: anim,
            toggleActions: 'play none none none',
        });
    });
});

// Video progressbar
// window.onload = function () {
//     document.getElementById('custom-seekbar').className = 'custom-seekbarfull';
// };

// Destinations Thumbslider
if ($(".destinations-thumbslider-wrapper").length) {
    var slider = new Swiper(".destinationsthumbslider__sliderloop", {
        slidesPerView: 1.27,
        spaceBetween: 36,
        centeredSlides: true,
        loop: true,
        speed: 1500,
        grabCursor: true,
        loopedSlides: 9,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 1.27,
                spaceBetween: 36,
            },
        },
    });

    var thumbs = new Swiper(".destinationsthumbslider__thumbs", {
        slidesPerView: "9",
        // spaceBetween: 32,
        centeredSlides: false,
        loop: true,
        speed: 1500,
        slideToClickedSlide: true,
        grabCursor: true,
        breakpoints: {
            100: {
                slidesPerView: 2,
                centeredSlides: true,
                loop: true,
            },
            640: {
                slidesPerView: 4,
                centeredSlides: true,
                loop: true,
            },
            768: {
                slidesPerView: 6,
                centeredSlides: true,
                loop: true,
            },
            1024: {
                slidesPerView: 6,
                loop: true,
            },
            1366: {
                slidesPerView: 9,
                loop: true,
            },
        },
    });

    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
}

// Journey Slider
if ($(".journeyslider-wrapper").length) {
    var journeyslider = new Swiper(".journeyslider__loop", {
        loop: false,
        speed: 2000,
        slidesPerView: 3.3,
        grabCursor: true,
        spaceBetween: 36,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            375: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.8,
                spaceBetween: 36,
            },
            1366: {
                slidesPerView: 2.3,
                spaceBetween: 36,
            },
            1600: {
                slidesPerView: 3.3,
                spaceBetween: 36,
            },
        },
    });
}

// People Slider 
if ($(".peopleslider-wrapper").length) {
    var peopleslider = new Swiper(".peopleslider__loop", {
        loop: true,
        speed: 2000,
        slidesPerView: 4.4,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 40,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            375: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.8,
                spaceBetween: 30,
            },
            1366: {
                slidesPerView: 3.6,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 4.4,
                spaceBetween: 40,
            },
        },
    });
}

// Review Slider
if ($(".reviewslider-wrapper").length) {
    var peopleslider = new Swiper(".reviewslider__loop", {
        loop: true,
        speed: 2000,
        slidesPerView: 2.2,
        grabCursor: true,
        centeredSlides: true,
        autoHeight: true,
        autoplay: {
            delay: 1200,
        },
        spaceBetween: 40,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 1.9,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            },
        },
    });
}

// Instagram Slider
if ($(".instaslider-wrapper").length) {
    var swiper = new Swiper(".instagram-slider", {
        slidesPerView: 4.1,
        loop: true,
        speed: 1000,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 24,
        breakpoints: {
            100: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3.2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4.1,
                spaceBetween: 24,
            },
            1600: {
                slidesPerView: 6.1,
                spaceBetween: 24,
            },
        },
    });
}

// Match Heigh Js
$(function () {
    $(".reviewslider__item").matchHeight();
});

// Tabs
$(document).ready(function () {
    $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
    });
});

/** Image animation **/
$(".revealedBox").each(function (i) {
    var childrenSpan = $(this).children("span").length;
    $(this).addClass("childrenSpan-" + childrenSpan);
});

$(window).scroll(function () {
    $(".revealedBox").each(function (i) {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
            $(this).addClass("revealedBox-in");
            if ($(this).parent().hasClass("border-animate-start")) {
            } else {
                $(this).parent().addClass("border-animate-start");
            }
        }
    });
});

// Journey List Load More
if ($(".journeylist-wrapper").length) {
    $(document).ready(function () {
        $(".journeylist__itemsloadmore").slice(0, 4).show();
        $("#journeylist__loadmore").on("click", function (e) {
            e.preventDefault();
            $(".journeylist__itemsloadmore:hidden").slice(0, 4).slideDown();
            if ($(".journeylist__itemsloadmore:hidden").length == 0) {
                // $("#loadMore").text("No Content").addClass("noContent");
                $('.journeylist__loadmorebtn').css('display', 'none');
            }
        });
    })
}

// Modal Slider
if ($(".custom-popup-slider").length) {
    var popupslider = new Swiper(".custom-popup-sliderlopp", {
        loop: true,
        speed: 1200,
        slidesPerView: 1,
        effect: 'fade',
        autoHeight: true,
        autoplay: {
            delay: 1200,
        },
        navigation: {
            nextEl: '.popupswiper-button-next',
            prevEl: '.popupswiper-button-prev',
        },
    });
}

// Halfslider with Popup
if ($(".halfslider-popup__slidermain").length) {
    var halfslider = new Swiper(".halfslider-popup__loop", {
        slidesPerView: 3.3,
        // loop: true,
        speed: 1500,
        grabCursor: true,
        spaceBetween: 32,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 2.4,
                spaceBetween: 32,
            },
            1600: {
                slidesPerView: 3.3,
                spaceBetween: 32,
            },
        },
    });
}

// Popular Destinations Slider
if ($(".populerdestinations-slider-wrapper").length) {
    var peopleslider = new Swiper(".populerdestinationsslider__sliderloop", {
        loop: true,
        speed: 2000,
        slidesPerView: 2.2,
        grabCursor: true,
        centeredSlides: true,
        autoHeight: true,
        autoplay: {
            delay: 1200,
        },
        spaceBetween: 35,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 1.9,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 2.2,
                spaceBetween: 35,
            },
        },
    });
}

// Sliderzigzag Slider
if ($(".sliderzigzag-wrapper").length) {
    var zigzagslider = new Swiper(".sliderzigzag__loop", {
        loop: true,
        speed: 2000,
        slidesPerView: 2.9,
        grabCursor: true,
        spaceBetween: 40,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            375: {
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
            },
            1366: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 2.9,
                spaceBetween: 40,
            },
        },
    });
}

// Project Slider 
if ($(".slider-popup-wrapper").length) {
    var projectslider = new Swiper(".projectslider__loop", {
        loop: true,
        speed: 2000,
        slidesPerView: 4.4,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 40,
        breakpoints: {
            100: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            375: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.8,
                spaceBetween: 30,
            },
            1366: {
                slidesPerView: 3.6,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 4.4,
                spaceBetween: 40,
            },
        },
    });
}

// Modal Slider
if ($(".custom-popup-slider").length) {
    var projectpopupslider = new Swiper(".projectpopupslider__loop", {
        loop: true,
        speed: 1200,
        slidesPerView: 1,
        effect: 'fade',
        autoHeight: true,
        autoplay: {
            delay: 1200,
        },
        navigation: {
            nextEl: '.popupswiper-button-next',
            prevEl: '.popupswiper-button-prev',
        },
    });
}

// Journy Single Slider
if ($(".journey-singlezigzag-wrapper").length) {
    var journeysingleslider = new Swiper(".journey__zigzaggallery", {
        loop: true,
        speed: 1200,
        slidesPerView: 1,
        effect: 'fade',
        autoHeight: true,
        autoplay: {
            delay: 1200,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}

// Listing Grid Load More
if ($(".listing-grid-wrapper").length) {
    $(document).ready(function () {
        $(".listinggrid__itemloadmore").slice(0, 9).show();
        $("#listinggrid__loadmore").on("click", function (e) {
            e.preventDefault();
            $(".listinggrid__itemloadmore:hidden").slice(0, 3).slideDown();
            if ($(".listinggrid__itemloadmore:hidden").length == 0) {
                // $("#loadMore").text("No Content").addClass("noContent");
                $('.listinggrid__loadmorebtn').css('display', 'none');
            }
        });
    })
}

// Accordion Js
if ($('.accordion-wrapper').length) {
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.accordion-title');
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            var $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');
            $this.parent().parent().parent().toggleClass('showtimeline');
            $(".journey-overview__zigzagmapitem").removeClass("showtimeline");
            $(".journey-overview__zigzagmapitem[data-img=" + $this.parent().parent().parent().data('img') + "]").addClass("showtimeline");

            if (!e.data.multiple) {
                $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
                $el.find('.accordion-content').not($next).slideUp().parent().parent().parent().removeClass('showtimeline');
            };
        }
        var accordion = new Accordion($('.accordion-container'), false);
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#accordion').length) {
            $this.parent().toggleClass('open');
        }
    });
}

// On Scroll Timeline  
$(document).ready(function () {
    // Timeline Scroll Section
    // --------------------------------------------------------------
    var items = $(".timeline"),
        // timelineHeight = $(".timeline ul").height(),
        greyLine = $('.default-line'),
        lineToDraw = $('.draw-line');

    // sets the height that the greyLine (.default-line) should be according to `.timeline ul` height

    // run this function only if draw line exists on the page
    if (lineToDraw.length) {
        if (!($('.accordion-wrapper').length)) {
            $(window).on('scroll', function () {

                // Need to constantly get '.draw-line' height to compare against '.default-line'
                var redLineHeight = lineToDraw.height(),
                    greyLineHeight = greyLine.height(),
                    windowDistance = $(window).scrollTop(),
                    windowHeight = $(window).height() / 2,
                    timelineDistance = $(".timeline").offset().top;

                if (windowDistance >= timelineDistance - windowHeight) {
                    line = windowDistance - timelineDistance + windowHeight;

                    if (line <= greyLineHeight) {
                        lineToDraw.css({
                            'height': line + 20 + 'px'
                        });
                    }
                }

                // This takes care of adding the class in-view to the li:before items
                var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
                items.each(function (index) {
                    var circlePosition = $(this).offset();

                    if (bottom > circlePosition.top) {
                        $(this).addClass('in-view');
                    } else {
                        $(this).removeClass('in-view');
                    }
                });
            });
        }
    }
});

// Journey Single Tabs
if ($('.journey-singlezigzagtab').length) {
    $(document).ready(function () {
        $("ul.journeytabs li").click(function () {
            var tab_id = $(this).attr("data-tab");

            $("ul.journeytabs li").removeClass("current");
            $(".journeytab-content").removeClass("current");

            $(this).addClass("current");
            $("#" + tab_id).addClass("current");
        });
    });
}

// Scrollabel Content
$('.journeysinglezigzag__details').scroll(function () {
    var sections = document.getElementsByClassName('journeysinglezigzagsection');

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();
        var sectionHeight = $('.journeysinglezigzagsection').height();

        console.log(sectionHeight);
        if (rect.top >= 0 && rect.top <= sectionHeight) {
            $(section).addClass('active');
        } else {
            $(section).removeClass('active');
        }
    }
});

//Map swiper
if ($('.location-map-wrapper').length) {
    var swiper = new Swiper(".location-map__loop", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 30,  
        navigation: {
            nextEl: ".location-next",
            prevEl: ".location-prev",
        },
    });
};

