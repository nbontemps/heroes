var video_land = document.getElementById('video_land')


$(document).ready(function(){

  // $("#videoModal").on('show.bs.modal', function () {
  //   if ($(window).width() >= $(window).height()) {
  //
  //     $("#video_land").css("height",$(".modal-content").height());
  //   }else {
  //
  //     $("#video_land").css("width",$(window).width());
  //   }
  // });
  $("#play_button").hover(function(){
    $(this).attr("src", "img/Bouton_Play2Logo.gif");
  },function() {
    $(this).attr("src", "img/Bouton_Logo2Play.gif");
  });

  $("#videoModal").on('shown.bs.modal', function () {
    video_land.load();
  });

  $("#videoModal").on('shown.bs.modal', function () {
    video_land.play();
  });

  $("#videoModal").on('hide.bs.modal', function () {
    video_land.pause();
  });

  $("#videoModal").click(function () {
    if (video_land.muted === true) {
      video_land.muted = false;
    } else {
      video_land.muted = true;
    }
  });
});
