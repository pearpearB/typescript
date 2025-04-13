var arr = [1, 2, 3, 4, 5];
arr.forEach(function () { });
// ? 프로토타입에 주입 전이랑 에러
// arr.myForEach((v, i) => {
//   console.log('myForEach', v, i);
// });
try {
    console.log('before assign myForEach');
    arr.myForEach(function (v, i) {
        console.log('myForEach', v, i);
    });
}
catch (error) {
    console.log('Error: ', error);
}
Array.prototype.myForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
arr.myForEach(function (v, i) {
    console.log('myForEach', v, i);
});
