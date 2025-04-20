interface Array<T> {
  myReduce(
    callback: (acc: T, cur: T, index: number, origin: T[]) => T,
    initVaue?: T,
    thisArg?: any
  ): T;
  myReduce<R>(
    callback: (acc: R, cur: T, index: number, origin: T[]) => R,
    initVaue: R,
    thisArg?: any
  ): R;
}

const reduce1 = [1, 2, 3, 4, 5].myReduce((acc, cur) => acc + cur);
type Reduce1 = typeof reduce1;
//			^?

const reduce2 = [1, 2, 3, 4, 5].myReduce((acc, cur) => acc + cur, 100);
type Reduce2 = typeof reduce2;
//			^?

const reduce3 = [1, 2, 3, 4, 5].myReduce(
  (acc, cur, index) => ({ ...acc, ['key' + index]: cur }),
  {}
);
type Reduce3 = typeof reduce3;
//			^?

const reduce4 = [1, 2, 3, 4, 5].myReduce((acc, cur) => acc + cur, '');
type Reduce4 = typeof reduce4;
//			^?

const reduceOrigin = [1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur, '');
type ReduceOrigin = typeof reduceOrigin;
//			^?
