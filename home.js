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
      {message: 'Github', url: 'https://github.com/cod1r'},
      {message: 'LinkedIn', url: 'https://www.linkedin.com/in/jason-ho-uh/'},
      {message: 'Contact'}
    ]
  }
})