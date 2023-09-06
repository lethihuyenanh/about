function triangle($width, $height, $direction) {
  let $halfWidth = $width / 2;
  let $halfHeight = $height / 2;

  let str = '';

  str += 'font-size: 0;\n';
  str += 'line-height: 0;\n';

  str += 'width: 0;\n';
  str += 'height: 0;\n';
  str += 'border-style: solid;\n';

  if ($direction == 'top' ) {
    str += 'border-width: 0 ' + $halfWidth +'px' + ' ' + $height +'px' + ' ' + $halfWidth +'px' + '' + ';\n';
    str += 'border-color: transparent transparent #084298 transparent;';

  } else if ($direction == 'right' ) {
    str += 'border-width: ' + $halfHeight +'px' + ' 0 ' + $halfHeight +'px' + ' ' + $width +'px' + '' + ';\n';
    str += 'border-color: transparent transparent transparent #084298;';

  } else if ($direction == 'bottom' ) {
    str += 'border-width: ' + $height +'px' + ' ' + $halfWidth +'px' + ' 0 ' + $halfWidth +'px' + '' + ';\n';
    str += 'border-color: #084298 transparent transparent transparent;';

  } else if ($direction == 'left' ) {
    str += 'border-width: ' + $halfHeight +'px' + ' ' + $width +'px' + ' ' + $halfHeight +'px' + ' 0' + ';\n';
    str += 'border-color: transparent #084298 transparent transparent;';

  } else if ($direction == 'top-left' ) {
    str += 'border-width: ' + $height +'px' + ' ' + $width +'px' + ' 0 0' + ';\n';
    str += 'border-color: #084298 transparent transparent transparent;';

  } else if ($direction == 'top-right' ) {
    str += 'border-width: 0 ' + $width +'px' + ' ' + $height +'px' + ' 0' + ';\n';
    str += 'border-color: transparent #084298 transparent transparent;';

  } else if ($direction == 'bottom-left' ) {
    str += 'border-width: ' + $height +'px' + ' 0 0 ' + $width +'px' + '' + ';\n';
    str += 'border-color: transparent transparent transparent #084298;';

  } else if ($direction == 'bottom-right' ) {
    str += 'border-width: 0 0 ' + $height +'px' + ' ' + $width +'px' + '' + ';\n';
    str += 'border-color: transparent transparent #084298 transparent;';

  } else {
    str = 'Invalid!'
  }
  return str;
}

const app_triangle = Vue.createApp({
  data() {
    return {
      widthSize: "10",
      heightSize: "10",
      angleTypeSelected: '',
      message: '',
      isTooltip: false
    };
  },
  watch: {
    // widthSize(value) {
    //  console.log(this.widthSize)
    // },
    // heightSize(value) {
    //  console.log(this.heightSize)
    // }
  },
  methods: {
    changeWidth() {
      this.widthSize = this.$refs.userWidth.value;
      if (!!this.angleTypeSelected) {
        this.message = triangle(this.widthSize, this.heightSize, this.angleTypeSelected);
      }
    },
    changeHeight() {
      this.heightSize = this.$refs.userHeight.value;
      if (!!this.angleTypeSelected) {
        this.message = triangle(this.widthSize, this.heightSize, this.angleTypeSelected);
      }
    },
    angleSelected($direction) {
      this.angleTypeSelected = $direction;
      this.message = triangle(this.widthSize, this.heightSize, $direction);
    },
    copyValue() {
      let element = document.getElementById('cssSource');
      let $copyTooltip = document.getElementById('copyTooltip');

      //copy
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy');

      //show tooltip
      //-------------------
      // tooltip.fadeIn(500,function(){
      //   setTimeout(function(){
      //     $copyTooltip.stop().fadeOut(500);
      //   }, 1000);
      // });
      this.isTooltip = true;
      setTimeout(() => {
        this.isTooltip = false;
      }, 1000);
    }
  }
});

app_triangle.mount('#app_triangle');
