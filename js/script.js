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
  $("#play_button").attr("src", "img/Bouton_Logo2Play2Logo.gif");

  $("#play_button").hover(function(){
    $(this).attr("src", "img/Bouton_Logo2Play.gif");
  },function() {
    $(this).attr("src", "img/Bouton_Play2Logo.gif");
  });
});
