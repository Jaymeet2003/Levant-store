(function ($) {
  "use strict";
  /*=================================
        JS Index Here
    ==================================*/
  /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image Color & Mask
    07. Global Slider
    08. Ajax Contact Form
    09. Search Box Popup
    10. Popup Sidemenu
    11. Magnific Popup
    12. Section Position
    13. Filter
    14. Counter Up
    15. Shape Mockup
    16. Progress Bar Animation
    17. Countdown
    18. Image to SVG Code
    00. Woocommerce Toggle
    00. Right Click Disable
    */
  /*=================================
        JS Index End
    ==================================*/
  /*

  /*---------- 01. On Load Function ----------*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });

  /*---------- 02. Preloader ----------*/
  if ($(".preloader").length > 0) {
    $(".preloaderCls").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".preloader").css("display", "none");
      });
    });
  }

  /*---------- 03. Mobile Menu ----------*/
  $.fn.thmobilemenu = function (options) {
    var opt = $.extend(
      {
        menuToggleBtn: ".th-menu-toggle",
        bodyToggleClass: "th-body-visible",
        subMenuClass: "th-submenu",
        subMenuParent: "th-item-has-children",
        subMenuParentToggle: "th-active",
        meanExpandClass: "th-mean-expand",
        appendElement: '<span class="th-mean-expand"></span>',
        subMenuToggleClass: "th-open",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = "." + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css("display", "none");
            $(this).parent().removeClass(opt.subMenuParentToggle);
          }
        });
      }

      // Class Set Up for every submenu
      menu.find("li").each(function () {
        var submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev("a").append(opt.appendElement);
        submenu.next("a").append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next("ul").slideToggle(opt.toggleSpeed);
          $($element).next("ul").toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev("ul").slideToggle(opt.toggleSpeed);
          $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
        }
      }

      // Submenu toggle Button
      var expandToggler = "." + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on("click", function () {
          menuToggle();
        });
      });

      // Hide Menu On out side click
      menu.on("click", function (e) {
        e.stopPropagation();
        menuToggle();
      });

      // Stop Hide full menu on menu click
      menu.find("div").on("click", function (e) {
        e.stopPropagation();
      });
    });
  };

  $(".th-menu-wrapper").thmobilemenu();

  /*---------- 04. Sticky fix ----------*/
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 500) {
      $(".sticky-wrapper").addClass("sticky");
      $(".category-menu").addClass("close-category");
    } else {
      $(".sticky-wrapper").removeClass("sticky");
      $(".category-menu").removeClass("close-category");
    }
  });

  $(".menu-expand").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".category-menu").toggleClass("open-category");
    });
  });

  /*---------- 05. Scroll To Top ----------*/
  if ($(".scroll-top").length > 0) {
    var scrollTopbtn = document.querySelector(".scroll-top");
    var progressPath = document.querySelector(".scroll-top path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 750;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(scrollTopbtn).addClass("show");
      } else {
        jQuery(scrollTopbtn).removeClass("show");
      }
    });
    jQuery(scrollTopbtn).on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  }

  const callButton = document.getElementById("call-button");
  const callPopover = document.getElementById("call-popover");

  callButton.innerHTML = `<svg class="call-button" fill="#000" height="25" width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.806 473.806" xml:space="preserve">
      <g>
        <g>
          <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
			c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
			c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
			c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
			c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
			c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
			c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
			C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
			c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
			c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
			c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
			c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
			c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
			l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
			C420.456,377.706,420.456,388.206,410.256,398.806z" />
          <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
			c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
			S248.656,111.506,256.056,112.706z" />
          <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
			c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
			c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z" />
        </g>
      </g>
    </svg>`

  callButton.addEventListener("click", () => {
    callPopover.style.display = callPopover.style.display === "block" ? "none" : "block";
  });

  // Optional: click outside to close popover
  window.addEventListener("click", function (e) {
    if (!callButton.contains(e.target) && !callPopover.contains(e.target)) {
      callPopover.style.display = "none";
    }
  });

  /*---------- 06. Set Background Image Color & Mask ----------*/
  if ($("[data-bg-src]").length > 0) {
    $("[data-bg-src]").each(function () {
      var src = $(this).attr("data-bg-src");
      $(this).css("background-image", "url(" + src + ")");
      $(this).removeAttr("data-bg-src").addClass("background-image");
    });
  }

  if ($("[data-bg-color]").length > 0) {
    $("[data-bg-color]").each(function () {
      var color = $(this).attr("data-bg-color");
      $(this).css("background-color", color);
      $(this).removeAttr("data-bg-color");
    });
  }

  $("[data-border]").each(function () {
    var borderColor = $(this).data("border");
    $(this).css("--th-border-color", borderColor);
  });

  if ($("[data-mask-src]").length > 0) {
    $("[data-mask-src]").each(function () {
      var mask = $(this).attr("data-mask-src");
      $(this).css({
        "mask-image": "url(" + mask + ")",
        "-webkit-mask-image": "url(" + mask + ")",
      });
      $(this).addClass("bg-mask");
      $(this).removeAttr("data-mask-src");
    });
  }

  /*----------- 07. Global Slider ----------*/

  $(".th-slider").each(function () {
    var thSlider = $(this);
    var settings = $(this).data("slider-options");

    // Fallback in case jQuery fails to parse data-slider-options properly (common on Apache/Linux)
    // if (!settings || typeof settings === "string") {
    //   try {
    //     settings = JSON.parse($(this).attr("data-slider-options"));
    //   } catch (e) {
    //     console.warn("Failed to parse data-slider-options:", e);
    //     settings = {};
    //   }
    // }
    if (thSlider.attr("id") === "heroSlide1") {
      if (thSlider.find(".slider-prev.swiper-button-prev").length === 0) {

        // thSlider.append('<div class="slider-prev swiper-button-prev"></div>');
      }
      if (thSlider.find(".slider-next.swiper-button-next").length === 0) {
        // thSlider.append('<div class="slider-next swiper-button-next"></div>');
      }
      if (thSlider.find(".slider-pagination.swiper-pagination").length === 0) {
        thSlider.append('<div class="slider-pagination swiper-pagination"></div>');
      }
    }
    // Always ensure navigation and pagination elements exist
    // if (thSlider.find(".slider-prev").length === 0) {
    //   thSlider.append('<div class="slider-prev swiper-button-prev"></div>');
    // }
    // if (thSlider.find(".slider-next").length === 0) {
    //   thSlider.append('<div class="slider-next swiper-button-next"></div>');
    // }
    // if (thSlider.find(".slider-pagination").length === 0) {
    //   thSlider.append('<div class="slider-pagination swiper-pagination"></div>');
    // }

    // After parsing settings, inject navigation/pagination fallback if not present
    // if (!settings.navigation) {
    //   settings.navigation = {
    //     nextEl: thSlider.find(".slider-next").get(0),
    //     prevEl: thSlider.find(".slider-prev").get(0),
    //   };
    // }
    // if (!settings.pagination) {
    //   settings.pagination = {
    //     el: thSlider.find(".slider-pagination").get(0),
    //     type: "bullets",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return (
    //         '<span class="' +
    //         className +
    //         '" aria-label="Go to Slide ' +
    //         (index + 1) +
    //         '"></span>'
    //       );
    //     },
    //   };
    // }

    // Store references to the navigation Slider
    var prevArrow = thSlider.find(".slider-prev");
    var nextArrow = thSlider.find(".slider-next");
    var paginationEl = thSlider.find(".slider-pagination");

    var paginationType = settings["paginationType"]
      ? settings["paginationType"]
      : "bullets";

    var autoplayconditon = settings["autoplay"];

    var sliderDefault = {
      slidesPerView: 1,
      spaceBetween: settings["spaceBetween"] ? settings["spaceBetween"] : 24,
      loop: settings["loop"] == false ? false : true,
      speed: settings["speed"] ? settings["speed"] : 1000,
      autoplay: autoplayconditon
        ? autoplayconditon
        : { delay: 6000, disableOnInteraction: false },
      navigation: {
        nextEl: nextArrow.get(0),
        prevEl: prevArrow.get(0),
      },
      pagination: {
        el: paginationEl.get(0),
        type: paginationType,
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '" aria-label="Go to Slide ' +
            (index + 1) +
            '"></span>'
          );
        },
        formatFractionCurrent: function (number) {
          return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " / " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      on: {
        slideChange: function () {
          setTimeout(function () {
            swiper.params.mousewheel.releaseOnEdges = false;
          }, 500);
        },
        reachEnd: function () {
          setTimeout(function () {
            swiper.params.mousewheel.releaseOnEdges = true;
          }, 750);
        },
      },
    };

    var options = $.extend({}, sliderDefault, settings);
    var swiper = new Swiper(thSlider.get(0), options); // Assign the swiper variable c
    // thSlider.get(0).swiper = swiper;

    if ($(".slider-area").length > 0) {
      $(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }
  });

  // Function to add animation classes
  function animationProperties() {
    $("[data-ani]").each(function () {
      var animationName = $(this).data("ani");
      $(this).addClass(animationName);
    });

    $("[data-ani-delay]").each(function () {
      var delayTime = $(this).data("ani-delay");
      $(this).css("animation-delay", delayTime);
    });
  }
  animationProperties();

  // Add click event handlers for external slider arrows based on data attributes
  $("[data-slider-prev], [data-slider-next]").on("click", function () {
    var sliderSelector =
      $(this).data("slider-prev") || $(this).data("slider-next");
    var targetSlider = $(sliderSelector);

    if (targetSlider.length) {
      var swiper = targetSlider[0].swiper;

      if (swiper) {
        if ($(this).data("slider-prev")) {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      }
    }
  });

  /*----------- 08. Ajax Contact Form ----------*/
  var form = ".ajax-contact";
  var invalidCls = "is-invalid";
  var $email = '[name="email"]';
  var $validation =
    '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
  var formMessages = $(".form-messages");

  function sendContact() {
    $("#loading").show();
    var formData = $(form).serialize();
    var valid;
    valid = validateContact();
    if (valid) {
      jQuery
        .ajax({
          url: $(form).attr("action"),
          data: formData,
          type: "POST",
        })
        .done(function (response) {
          $("#loading").hide();
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass("error");
          formMessages.addClass("success");
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(form + ' input:not([type="submit"]),' + form + " textarea").val("");
        })
        .fail(function (data) {
          $("#loading").hide();
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass("success");
          formMessages.addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            formMessages.html(data.responseText);
          } else {
            formMessages.html(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    }
  }

  function validateContact() {
    var valid = true;
    var formInput;

    function unvalid($validation) {
      $validation = $validation.split(",");
      for (var i = 0; i < $validation.length; i++) {
        formInput = form + " " + $validation[i];
        if (!$(formInput).val()) {
          $(formInput).addClass(invalidCls);
          valid = false;
        } else {
          $(formInput).removeClass(invalidCls);
          valid = true;
        }
      }
    }
    unvalid($validation);

    if (
      !$($email).val() ||
      !$($email)
        .val()
        .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $($email).addClass(invalidCls);
      valid = false;
    } else {
      $($email).removeClass(invalidCls);
      valid = true;
    }
    return valid;
  }

  $(form).on("submit", function (element) {
    element.preventDefault();
    sendContact();
  });

  /*---------- 09. Search Box Popup ----------*/
  function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
    $($searchOpen).on("click", function (e) {
      e.preventDefault();
      $($searchBox).addClass($toggleCls);
    });
    $($searchBox).on("click", function (e) {
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
    $($searchBox)
      .find("form")
      .on("click", function (e) {
        e.stopPropagation();
        $($searchBox).addClass($toggleCls);
      });
    $($searchCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
  }
  popupSarchBox(
    ".popup-search-box",
    ".searchBoxToggler",
    ".searchClose",
    "show"
  );

  /*---------- 10. Popup Sidemenu ----------*/
  function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
    // Sidebar Popup
    $($sideMunuOpen).on("click", function (e) {
      e.preventDefault();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenu).on("click", function (e) {
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
    var sideMenuChild = $sideMenu + " > div";
    $(sideMenuChild).on("click", function (e) {
      e.stopPropagation();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenuCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
  }
  popupSideMenu(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show");
  popupSideMenu(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show");

  /*----------- 11. Magnific Popup ----------*/
  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    mainClass: "mfp-zoom-in",
    removalDelay: 260,
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /* magnificPopup video view */
  $(".popup-content").magnificPopup({
    type: "inline",
    midClick: true,
  });

  /*---------- 12. Section Position ----------*/
  // Interger Converter
  function convertInteger(str) {
    return parseInt(str, 10);
  }

  $.fn.sectionPosition = function (mainAttr, posAttr) {
    $(this).each(function () {
      var section = $(this);

      function setPosition() {
        var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
          posData = section.attr(mainAttr), // where to position
          posFor = section.attr(posAttr), // On Which section is for positioning
          topMark = "top-half", // Pos top
          bottomMark = "bottom-half", // Pos Bottom
          parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
          parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

        if (posData === topMark) {
          $(posFor).css("padding-bottom", parentPB + sectionHeight + "px");
          section.css("margin-top", "-" + sectionHeight + "px");
        } else if (posData === bottomMark) {
          $(posFor).css("padding-top", parentPT + sectionHeight + "px");
          section.css("margin-bottom", "-" + sectionHeight + "px");
        }
      }
      setPosition(); // Set Padding On Load
    });
  };

  var postionHandler = "[data-sec-pos]";
  if ($(postionHandler).length) {
    $(postionHandler).imagesLoaded(function () {
      $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
    });
  }

  /*----------- 14. Filter ----------*/
  $(".filter-active").imagesLoaded(function () {
    var $filter = ".filter-active",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: "*",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          // columnWidth: 1,
        },
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // Menu Active Class
      $($filterMenu).on("click", "button", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
      });
    }
  });

  $(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
    function () {
      var $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
        $filterItem = ".filter-item, .woocommerce-Reviews .comment-list li";

      if ($($filter).length > 0) {
        $($filter).isotope({
          itemSelector: $filterItem,
          filter: "*",
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
          },
        });
      }
      $('[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        $($filter).isotope({
          filter: "*",
        });
      });
    }
  );

  /*----------- 14. Counter Up ----------*/
  $(".counter-number").counterUp({
    delay: 10,
    time: 1000,
  });

  /*----------- 15. Shape Mockup ----------*/
  $.fn.shapeMockup = function () {
    var $shape = $(this);
    $shape.each(function () {
      var $currentShape = $(this),
        shapeTop = $currentShape.data("top"),
        shapeRight = $currentShape.data("right"),
        shapeBottom = $currentShape.data("bottom"),
        shapeLeft = $currentShape.data("left");
      $currentShape
        .css({
          top: shapeTop,
          right: shapeRight,
          bottom: shapeBottom,
          left: shapeLeft,
        })
        .removeAttr("data-top")
        .removeAttr("data-right")
        .removeAttr("data-bottom")
        .removeAttr("data-left")
        .parent()
        .addClass("shape-mockup-wrap");
    });
  };

  if ($(".shape-mockup")) {
    $(".shape-mockup").shapeMockup();
  }

  /*----------- 16. Progress Bar Animation ----------*/
  $(".progress-bar").waypoint(
    function () {
      $(".progress-bar").css({
        animation: "animate-positive 1.8s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  /*----------- 17. Countdown ----------*/

  $.fn.countdown = function () {
    $(this).each(function () {
      var $counter = $(this),
        countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
        exprireCls = "expired";

      // Finding Function
      function s$(element) {
        return $counter.find(element);
      }

      // Update the count down every 1 second
      var counter = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Check If value is lower than ten, so add zero before number
        days < 10 ? (days = "0" + days) : null;
        hours < 10 ? (hours = "0" + hours) : null;
        minutes < 10 ? (minutes = "0" + minutes) : null;
        seconds < 10 ? (seconds = "0" + seconds) : null;

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(counter);
          $counter.addClass(exprireCls);
          $counter.find(".message").css("display", "block");
        } else {
          // Output the result in elements
          s$(".day").html(days);
          s$(".hour").html(hours);
          s$(".minute").html(minutes);
          s$(".seconds").html(seconds);
        }
      }, 1000);
    });
  };

  if ($(".counter-list").length) {
    $(".counter-list").countdown();
  }

  /*---------- 18. Image to SVG Code ----------*/
  const cache = {};

  $.fn.inlineSvg = function fnInlineSvg() {
    this.each(imgToSvg);

    return this;
  };

  function imgToSvg() {
    const $img = $(this);
    const src = $img.attr("src");

    // fill cache by src with promise
    if (!cache[src]) {
      const d = $.Deferred();
      $.get(src, (data) => {
        d.resolve($(data).find("svg"));
      });
      cache[src] = d.promise();
    }

    // replace img with svg when cached promise resolves
    cache[src].then((svg) => {
      const $svg = $(svg).clone();

      if ($img.attr("id")) $svg.attr("id", $img.attr("id"));
      if ($img.attr("class")) $svg.attr("class", $img.attr("class"));
      if ($img.attr("style")) $svg.attr("style", $img.attr("style"));

      if ($img.attr("width")) {
        $svg.attr("width", $img.attr("width"));
        if (!$img.attr("height")) $svg.removeAttr("height");
      }
      if ($img.attr("height")) {
        $svg.attr("height", $img.attr("height"));
        if (!$img.attr("width")) $svg.removeAttr("width");
      }

      $svg.insertAfter($img);
      $img.trigger("svgInlined", $svg[0]);
      $img.remove();
    });
  }

  $(".svg-img").inlineSvg();

  function scrollToSection(id) {
    const navbarHeight = document.querySelector(".menu-area").offsetHeight; // Get navbar height
    const section = document.getElementById(id); // Get section element by ID
    const sectionTop = section.offsetTop; // Get top position of the section
    window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" }); // Scroll to section with padding
  }

  document.querySelectorAll('.main-menu a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1); // Get ID of section from href attribute
      scrollToSection(sectionId); // Scroll to section with padding
    });
  });

  document.querySelectorAll("#smooth-scroller").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1); // Get ID of section from href attribute
      scrollToSection(sectionId);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const secId = window.location.hash.replace("#", "");
    if (secId) {
      const navbarHeight =
        document.querySelector(".menu-area").offsetHeight + 80;
      const section = document.getElementById(secId);
      console.log(section, "asdasd");
      console.log(navbarHeight, "navbarHeight");
      console.log(secId, "asdasd");
      if (section) {
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
        window.location.hash = "";
      }
    }
  });

  var currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  /*----------- 00. Woocommerce Toggle ----------*/
  // Ship To Different Address
  $("#ship-to-different-address-checkbox").on("change", function () {
    if ($(this).is(":checked")) {
      $("#ship-to-different-address").next(".shipping_address").slideDown();
    } else {
      $("#ship-to-different-address").next(".shipping_address").slideUp();
    }
  });

  // Login Toggle
  $(".woocommerce-form-login-toggle a").on("click", function (e) {
    e.preventDefault();
    $(".woocommerce-form-login").slideToggle();
  });

  // Coupon Toggle
  $(".woocommerce-form-coupon-toggle a").on("click", function (e) {
    e.preventDefault();
    $(".woocommerce-form-coupon").slideToggle();
  });

  // Woocommerce Shipping Method
  $(".shipping-calculator-button").on("click", function (e) {
    e.preventDefault();
    $(this).next(".shipping-calculator-form").slideToggle();
  });

  // Woocommerce Payment Toggle
  $('.wc_payment_methods input[type="radio"]:checked')
    .siblings(".payment_box")
    .show();
  $('.wc_payment_methods input[type="radio"]').each(function () {
    $(this).on("change", function () {
      $(".payment_box").slideUp();
      $(this).siblings(".payment_box").slideDown();
    });
  });

  // Woocommerce Rating Toggle
  $(".rating-select .stars a").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).siblings().removeClass("active");
      $(this).parent().parent().addClass("selected");
      $(this).addClass("active");
    });
  });

  // Quantity Plus Minus ---------------------------

  $(".quantity-plus").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var $qty = $(this).siblings(".qty-input");
      var currentVal = parseInt($qty.val(), 10);
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
  });

  $(".quantity-minus").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var $qty = $(this).siblings(".qty-input");
      var currentVal = parseInt($qty.val(), 10);
      if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
      }
    });
  });

  // /*----------- 00. Right Click Disable ----------*/
  //   window.addEventListener('contextmenu', function (e) {
  //     // do something here...
  //     e.preventDefault();
  //   }, false);

  // /*----------- 00. Inspect Element Disable ----------*/
  //   document.onkeydown = function (e) {
  //     if (event.keyCode == 123) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //       return false;
  //     }
  //   }
})(jQuery);

function validateDate() {
  console.log("called");
  var inputDate = new Date(document.getElementById("contact-us-date").value);
  var currentDate = new Date();
  var maxDate = new Date();
  maxDate.setFullYear(currentDate.getFullYear() + 10); // Set max date to 10 years from now

  if (inputDate <= currentDate) {
    alert("Please select a date in the future.");
    document.getElementById("contact-us-date").value = ""; // Clear the input field
    return false;
  } else if (inputDate > maxDate) {
    alert("Please select a date within the next 10 years.");
    document.getElementById("contact-us-date").value = ""; // Clear the input field
    return false;
  }
  return true;
}



