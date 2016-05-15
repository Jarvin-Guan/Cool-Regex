var view =new Vue({
  el: '#app',
  data: {
    RegexStr: '',
    ReplaceStr: '',
    TextValue:  '',
    IsReplace: false
  },
  methods:{
      Run: function () {
        let match ;
        let Regex = new RegExp(this.RegexStr,'g');
        while(match = Regex.exec(this.TextValue)){
          alert(match[1]);
        }
      },
      ReplaceMode: function() {
        this.IsReplace = !this.IsReplace;
        console.log(this.IsReplace);
      }
  }
})