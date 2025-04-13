interface Array<T> {
  myForEach(
    callback: (value: T, index: number, origin: T[]) => void,
    thisArg?: any
  ): void;
}

const arr = [1, 2, 3, 4, 5];

try {
  console.log('before assign myForEach');
  arr.myForEach((v, i) => {
    console.log('myForEach', v, i);
  });
} catch (error) {
  // ? 프로토타입에 주입 전이랑 에러
  console.log('Error: ', error);
}

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((v, i) => {
  console.log('myForEach', v, i);
});
