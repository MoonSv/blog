// 冒泡
var a = [3,1,2,5,4];
var n = a.length;
while (n > 1){
  for (var i = 0; i < n; i++){
    if (a[i] > a[i+1]){
      var tmp = a[i];
      a[i] = a[i+1];
      a[i+1] = tmp
    }
  }
  n -= 1;
}
console.log(a)
// 选择
var a = [3,1,2,5,4];
var n = 0;
while (n < a.length-1){
    n += 1;
}
