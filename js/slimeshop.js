$(function () {
    'use strict'
  
    $('[data-toggle="slimejump"]').on('click', function () {
      $('.slimecollapse').toggleClass('open')
    })
})
window.onscroll = function() {myFunction()};

function myFunction() {
    if(document.body.ScrollTop>0|| document.documentElement.scrollTop > 0){
    document.getElementById("navbot").className = "navbar slimecollapse";
    }
}