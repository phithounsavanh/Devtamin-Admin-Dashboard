$(document).ready(function () {
  $(".sideMenuToggler").on("click", function () {
    $(".sidebar").toggleClass("active");
    $(".content").toggleClass("active");
  });

  var adjustSidebar = function () {
    $(".sidemenu").slimScroll({
      height:
        document.documentElement.clientHeight - $(".navbar").outerHeight(),
    });
  };

  adjustSidebar();

  $(window).resize(function () {
    adjustSidebar();
  });

  $('[data-toggle="tooltip"]').tooltip();
});
