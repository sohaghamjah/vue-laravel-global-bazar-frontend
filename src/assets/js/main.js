$(window).on("scroll", function () {
  $(this).scrollTop() > 130
    ? $(".header-part").addClass("active")
    : $(".header-part").removeClass("active");
}),
  $(window).on("scroll", function () {
    $(this).scrollTop() > 700 ? $(".backtop").show() : $(".backtop").hide();
  }),
  $(function () {
    $(".dropdown-link").click(function () {
      $(this).next().toggle(),
        $(this).toggleClass("active"),
        $(".dropdown-list:visible").length > 1 &&
          ($(".dropdown-list:visible").hide(),
          $(this).next().show(),
          $(".dropdown-link").removeClass("active"),
          $(this).addClass("active"));
    });
  }),
  $(".nav-link").on("click", function () {
    $(".nav-list li a").removeClass("active"), $(this).addClass("active");
  }),
  $(".header-cate, .cate-btn").on("click", function () {
    $("body").css("overflow", "hidden"),
      $(".category-sidebar").addClass("active"),
      $(".category-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".category-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
  }),
  $(".header-user").on("click", function () {
    $("body").css("overflow", "hidden"),
      $(".nav-sidebar").addClass("active"),
      $(".nav-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".nav-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
  }),
  $(".header-cart, .cart-btn").on("click", function () {
    $("body").css("overflow", "hidden"),
      $(".cart-sidebar").addClass("active"),
      $(".cart-close").on("click", function () {
        $("body").css("overflow", "inherit"),
          $(".cart-sidebar").removeClass("active"),
          $(".backdrop").fadeOut();
      });
  }),
  $(".header-user, .header-cart, .header-cate, .cart-btn, .cate-btn").on(
    "click",
    function () {
      $(".backdrop").fadeIn(),
        $(".backdrop").on("click", function () {
          $(this).fadeOut(),
            $("body").css("overflow", "inherit"),
            $(".nav-sidebar").removeClass("active"),
            $(".cart-sidebar").removeClass("active"),
            $(".category-sidebar").removeClass("active");
        });
    }
  ),
  $(".coupon-btn").on("click", function () {
    $(this).hide(), $(".coupon-form").css("display", "flex");
  }),
  $(".header-src").on("click", function () {
    $(".header-form").toggleClass("active"),
      $(this).children(".fa-search").toggleClass("fa-times");
  }),
  $(".wish").on("click", function () {
    $(this).toggleClass("active");
  }),
  // $(".product-add").on("click", function () {
  //   var e = $(this).next(".product-action");
  //   $(this).hide(), e.css("display", "flex");
  // }),
  $(".action-plus").on("click", function () {
    var e = $(this).closest(".product-action").children(".action-input").get(0)
        .value++,
      c = $(this).closest(".product-action").children(".action-minus");
    e > 0 && c.removeAttr("disabled");
  }),
  $(".action-minus").on("click", function () {
    2 ==
      $(this).closest(".product-action").children(".action-input").get(0)
        .value-- && $(this).attr("disabled", "disabled");
  }),
  $(".review-widget-btn").on("click", function () {
    $(this).next(".review-widget-list").toggle();
  }),
  $(".offer-select").on("click", function () {
    $(this).text("Copied!");
  }),
  $(".modal").on("shown.bs.modal", function (e) {
    $(".preview-slider, .thumb-slider").slick("setPosition", 0);
  }),
  $(".profile-card.schedule").on("click", function () {
    $(".profile-card.schedule").removeClass("active"),
      $(this).addClass("active");
  }),
  $(".profile-card.contact").on("click", function () {
    $(".profile-card.contact").removeClass("active"),
      $(this).addClass("active");
  }),
  $(".profile-card.address").on("click", function () {
    $(".profile-card.address").removeClass("active"),
      $(this).addClass("active");
  }),
  $(".payment-card.payment").on("click", function () {
    $(".payment-card.payment").removeClass("active"),
      $(this).addClass("active");
  });
