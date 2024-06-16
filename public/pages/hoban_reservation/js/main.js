$(function () {
  let $header = $("header");
  let $gnb = $("#gnb");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $header.addClass("sticky");
      $gnb;
    } else {
      $header.removeClass("sticky");
    }
  });

  $tab_button = $(".tab button");
  $pannel = $(".pannel");
  $tab_button.on("click", function () {
    let i = $(this).index();
    $tab_button.removeClass("tabOn");
    $pannel.hide();

    $tab_button.eq(i).addClass("tabOn");
    $pannel.eq(i).show();
  });

  $tab_button.eq(0).trigger("click");

  var win_w = $(window).width();

  $(window).resize(function () {
    win_w = $(this).width();
    $(".datePicker").removeClass("datepickerOn");
    $(".checkBottom").css("height", "0");
  });

  $(".checkLeft").on("click", function () {
    let i = $(".checkBottom_i").index();
    console.log(i);
    $(".checkSelect").removeClass("checkselectOn");
    if (win_w > 480) {
      //pc
      if ($(".datePicker").hasClass("datepickerOn") === true) {
        $(".datePicker").removeClass("datepickerOn");
        $(".checkBottom").css("height", "0");
      } else {
        $(".datePicker").addClass("datepickerOn");
      }
    } else {
      $(".datePicker").removeClass("datepickerOn");
      if ($(".datePicker2").hasClass("dateOn") === true) {
        $(".datePicker2").removeClass("dateOn");
        $(".container").show();
        $(".checkBottom").hide();
      } else {
        $(".datePicker2").addClass("dateOn");
        $(".container").hide();
        $("footer").hide();

        var midHeight = parseInt($(".dateTop").css("height")) + 75;
        $(".datemonth_wrap").css(
          "height",
          "calc( 100vh - " + midHeight + "px)"
        );
      }
    }
  });

  let back = $(".headerLeft");
  back.on("click", function (e) {
    e.preventDefault();

    $(".backModal").show();
    $(".datePicker2").removeClass("dateOn");
    $(".container").show();
  });

  let dateBtn = $(".dateMonth table tr td button");

  dateBtn.on("click", function () {
    dateBtn.removeClass("dateOn");
    $(this).addClass("dateOn");
    if ($(this).parents(".dateMonth").is("focus") === false) {
      $(".dateMonth").removeAttr("id", "focus");
      $(this).parents(".dateMonth").attr("id", "focus");
    }
  });

  $("#all_check").click(function () {
    var checked = $("#all_check").is(":checked");

    if (checked) {
      $("input:checkbox").prop("checked", true);
      $(".grayBtn").css({
        "background-color": "#000",
        color: "#fff",
      });
      $(".grayBtn").removeClass("prevent");
    } else {
      $("input:checkbox").prop("checked", false);
      $(".grayBtn").css({
        "background-color": "#f4f4f4",
        color: "#d6d6d6",
      });
      $(".grayBtn").addClass("prevent");
    }
  });

  $(".checkLi .right").on("click", function (e) {
    e.preventDefault();

    let right_parent = $(this).parents(".checkLi");
    right_parent.next(".rule").toggleClass("ruleOn");

    $(".tableAllChk").on("click", function () {
      if ($(".tableAllChk").is(":checked")) {
        console.log("ok");
        $('input[name="exhiId"]').prop("checked", true);
      } else {
        $('input[name="exhiId"]').prop("checked", false);
      }
    });
  });
});
