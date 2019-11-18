var app = new Vue({
    el: '#app',
    data: {
      message: 'Jason Ho'
    }
  })
var list = new Vue({
  el: '#list',
  data: {
    items: [
      {message: 'Contact', url: 'javascript:var set = setInterval(Contact, 5)'},
      {message: 'Github', url: 'https://github.com/cod1r'},
      {message: 'LinkedIn', url: 'https://www.linkedin.com/in/jason-ho-uh/'},
      {message: 'Resume', url: 'Jason Ho RESUME.pdf'}
    ]
  }
})
Vue.component('social-media',{
  data: {
    items: [
      {item: 'Twitter', url: 'https://twitter.com/cod1r'},
      {item: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100041088257875'},
      {item: 'Instagram', url: 'https://www.instagram.com/thejasonho123/'}
    ]
  }
})
document.getElementsByClassName("says")[0].style.opacity = 1;
function Contact(){
  document.getElementsByClassName("says")[0].style.opacity -= ".035";
  if (document.getElementsByClassName("says")[0].style.opacity < "0"){
    document.getElementsByClassName("says")[0].style.visibility = "hidden";
    document.getElementsByClassName("says")[0].style.display = "none";
    document.getElementsByClassName("email")[0].style.display = "inline-block";
    document.getElementsByClassName("email")[0].style.visibility = "visible";
    document.getElementsByClassName("email")[0].style.opacity = "0";
    var x = email();
    clearInterval(set);
  }
}

function email() {
  var elem = document.getElementsByClassName("email")[0]; 
  var op = 0
  var id = setInterval(frame, 10);
  function frame() {
    if (elem.style.opacity >= "1") {
      clearInterval(id);
    } else {
      op += .025;
      elem.style.opacity = op;
    }
  }
} 
