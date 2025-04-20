interface Array<T> {
  // ? map 과 다르게 반환값은 기존 배열 요소에서 벗어날 수 없다.
  myFilter<R extends T>(
    callback: (value: T, index: number, origin: T[]) => value is R,
    thisArg?: any
  ): R[];
  myFilter(
    callback: (value: T, index: number, origin: T[]) => unknown,
    thisArg?: any
  ): T[];
}

const filter1 = [1, 2, 3, 4, 5].myFilter(() => {});
type Filter1 = typeof filter1;
//			^?

const filter2 = [1, 2, 3, 4, 5].myFilter((value) => value < 3);
type Filter2 = typeof filter2;
//			^?

const filter3 = ['1', 2, '3', 4, '5'].myFilter(
  (value) => typeof value === 'string'
);
type Filter3 = typeof filter3;
//			^?

const filter4 = [1, 2, 3, 4, 5].myFilter((value) => value % 2);
type Filter4 = typeof filter4;
//			^?

const filterOrigin = [1, 2, 3, 4, 5].filter(() => {});
type FilterOrigin = typeof filterOrigin;
//			^?
