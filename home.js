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
      {message: 'Contact', url: 'javascript:var set = setInterval(Contact, 10)'},
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
      {item: 'Instagram', url: 'https://www.instagram.com/theuhcod1r/'}
    ]
  }
})
var t = 1
var obj = document.getElementsByClassName("about")[0].style.opacity = 1;
function Contact(){
  t -= .015
  obj = t
  if (obj < 0){
    clearInterval(set);
  }
}