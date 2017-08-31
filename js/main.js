$(document).ready(function(){
  $('.sidebarBtn').on("click", function () {
    $('.sidebar').toggleClass('jQuery');
    $('.sidebarBtn').toggleClass('toggle');
  })
})

$(".sidebarBtn").on("click" , function(){
  $(".logo").toggle(400);
});
