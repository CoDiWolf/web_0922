var Body = {
    setColor: function (color) {
      document.querySelector('body').style.color = color;
    },

    setBackgroundColor: function (color) {
      document.querySelector('body').style.backgroundColor = color;
    }
  }
  var Links = {
    setColor: function (color) {
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }

  function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day'
      Links.setColor('powderblue');
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night'
      Links.setColor('blue');
    }
  }
  <!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/624f78aec72df874911df0f3/1g036uraa';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->