interface Array<T> {
  // ? 반환값을 알지 못할 때에는 제네릭으로 ..
  myMap<R>(
    callback: (value: T, index: number, origin: T[]) => R,
    thisArg?: any
  ): R[];
}

const sample1 = [1, 2, 3, 4, 5].myMap(() => {});
type Sample1 = typeof sample1;
//			^?

const sample2 = [1, 2, 3, 4, 5].myMap((value) => value);
type Sample2 = typeof sample2;
//			^?

const sample3 = [1, 2, 3, 4, 5].myMap((value) => value.toString());
type Sample3 = typeof sample3;
//			^?

const sample4 = [1, 2, 3, 4, 5].myMap((value) => ({ value }));
type Sample4 = typeof sample4;
//			^?
