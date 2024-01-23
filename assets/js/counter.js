// Counter
$(".counter-value").each(function () {
    var t = $(this),
      n = t.attr("data-count");
    $({ countNum: t.text() }).animate(
      { countNum: n },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          t.text(Math.floor(this.countNum)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        },
        complete: function () {
          t.text(this.countNum);
        }
      }
    );
  });