(function ($) {
    'use strict'

    AOS.init({
        duration: 1200,
    });

    //SmartMenus
    $(function () {
        $(".main-menu").smartmenus({
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -8,
        });
    });

    // SmartMenus mobile menu toggle button
    $(function () {
        var $mainMenuState = $("#main-menu-state");
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.on('change', function (e) {
                var $menu = $("#main-menu");
                if (this.checked) {
                    $menu.hide().slideDown(250, function () {
                        $menu.css("display", "");
                    });
                } else {
                    $menu.show().slideUp(250, function () {
                        $menu.css("display", "");
                    });
                }
            });
            // hide mobile menu beforeunload
            $(window).on('bind', "beforeunload unload", function () {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });


    //responsive-navbar
    $(".main-menu-btn").on('click', function () {
        //nav-white style
        if ($(".main-menu-btn").hasClass('white')) {
            $(".nav-white").toggleClass("open-white");
        } else {
            //transparant navbar style
            $(".main-nav").slideDown(200).toggleClass("open")
            $(".swiper-button-next").toggleClass("hide");
            $(".swiper-button-prev").toggleClass("hide");
        }
    });

    //header-swiper
    var swiper = new Swiper(".swiper-container", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //gallery
    $("#lightGallery").lightGallery();

    //testimoni-carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        // autoplay: true,
        // autoPlaySpeed: 3000,
        // autoPlayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            990: {
                items: 1,
            },
            1200: {
                items: 2,
            },
        },
    });

    //masonry grid layout for services & blog
    $(window).on('load', function () {
        //services page
        var service_loop_wrapper = $('.service-loop-wrap').imagesLoaded(function () {
            service_loop_wrapper.masonry({
                itemSelector: '.service-card-tablet',
                columnWidth: '.service-card-tablet',
                transitionDuration: '0.65s',
                initLayout: true,
                originTop: true,
                horizontalOrder: true,
            })
        });
        $(window).on('resize', function () {
            service_loop_wrapper.masonry('bindResize')
        })

        //blog pages
        var blog_loop_wrapper = $('.blog-loop-wrapper').imagesLoaded(function () {
            blog_loop_wrapper.masonry({
                itemSelector: '.card-blog-loop',
                columnWidth: '.card-blog-loop',
                transitionDuration: '0.65s',
                initLayout: true,
                originTop: true,
                horizontalOrder: true,
            })
        });
        $(window).on('resize', function () {
            blog_loop_wrapper.masonry('bindResize')
        })
    })

    //single service
    var Answer = $('.service-answer')
    var hideAnswer = $('.service-answer.hide')
    !Answer.hasClass('hide') ? Answer.show() : hideAnswer.hide()

    $(".service-quetion").on('click', function () {
        var target = $('#target' + $(this).attr('target'))
        var isVisible = !target.hasClass('hide') ? true : false
        isVisible = !isVisible

        if (isVisible === true) {
            target.hasClass('hide') ? target.slideDown(350).removeClass('hide') : target.slideDown(350)
        } else {
            target.slideUp(350).toggleClass('hide')
        }
    })

    //sticky kit for blog & singlepost sidebar
    var widthScreen = $(window).width();
    if (widthScreen > 768) {
        $(".blogPost-side-menu").stick_in_parent({ spacer: false })
            .on("sticky_kit:bottom", function (e) {
                $(".is_stuck").css("right", "auto");
            })
    }

    //get current year for copyright
    document.getElementById('year').innerHTML = new Date().getFullYear()
})(jQuery);