var view =new Vue({
  el: '#app',
  data: {
    RegexStr: '[\\s\\S]+',
    ReplaceStr: '122',
    TextValue:  '1'
  },
  methods:{
      Run: function () {
          console.log(this.RegexStr);
          console.log(this.ReplaceStr);
          console.log(this.TextValue);
      }
  }
})