---
layout: null
sitemap:
  exclude: 'yes'
---


$(document).ready(function () {
  // $('a.blog-button').click(function (e) {
  //   if ($('.panel-cover').hasClass('panel-cover--collapsed')){
  //     return
  //   }
  //   currentWidth = $('.panel-cover').width()
  //   if (currentWidth < 960) {
  //     $('.panel-cover').addClass('panel-cover--collapsed')
  //     // $('.content-wrapper').addClass('animated slideInRight')
  //   } else {
  //     $('.panel-cover').css('max-width', currentWidth)
  //     $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
  //   }
  // })

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    let pathparts = window.location.pathname.split('/');
    if(pathparts[1] === "search")
      if (pathparts[2] == null || pathparts[2] == ''){
        if (window.localStorage.getItem("searchQuery") !== null){
          let element = document.getElementById('search-input')
          element.value = window.localStorage.getItem("searchQuery");
          setTimeout(function(){
            element.dispatchEvent(new Event("input"))
          }, 1000);
          window.localStorage.removeItem("searchQuery");
        }
      }else{
          window.location.href = "/404"
    }else{
      if ((pathparts.length == 4 && pathparts[3] == '') || pathparts.length == 3){
        activateButton(pathparts[1]);
      }else{
        if (window.location.pathname.replaceAll('/','') != "404"){
          window.location.href = "/404"
        }
      }
    }
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('hidden')
    $('.btn-mobile-close__icon').toggleClass('hidden')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('hidden')
    $('.btn-mobile-close__icon').toggleClass('hidden')
  })

})

function searchTheArchives() {
  if (window.location.pathname.replaceAll('/','') !== 'search'){
    window.localStorage.setItem("searchQuery", document.getElementById('search-input').value);
    window.location.href = '{{ site.baseurl }}/search';
    return false;
  }else{
    // console.log("nothing!!");
    return false;
  }
}

function collapse() {
  currentWidth = $('.panel-cover').width()
  if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    // $('.content-wrapper').addClass('animated slideInRight')
  } else {
    $('.panel-cover').css('max-width', currentWidth)
    $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
  }
}

// const maxwidth = 2000;
// function expand() {
  //   $('.panel-cover').css('max-width', maxwidth)
  //   $('.panel-cover').animate({ 'max-width': maxwidth, 'width': '100%' }, 400, swing = 'swing', function () { })
  //   $('.panel-cover').removeClass('panel-cover--collapsed')
  // }
  
// only zero or one button should be active
window.activeButton = "";
function activateButton(id) {
  const elem = $('#'+id);
  // deactivate
  if (window.activeButton == id) {
    // elem.removeClass('clicked');
    // expand();
  }
  // activate
  else {
    if (window.activeButton != "") {
      $('#'+window.activeButton).removeClass("clicked");
    }
    window.activeButton = id;
    elem.addClass('clicked');
    collapse();
  }
}
