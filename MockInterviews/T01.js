// What will be the output of following

var length = 10;

function fn() {
  // this is window object first time
  // but method object 2nd time
  // so first time this.length is 10
  //   and second time the length is 3 as it is number of arguments
  console.log(this);
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1, 3);

// Note: Test this in browser console
