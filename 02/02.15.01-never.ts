type Return<T> = T extends string ? true : false;

type ResultNever1 = Return<never>;
//			^?

type IsNever<T> = [T] extends [never] ? true : false;

type True = IsNever<never>;
//			^?
type False = IsNever<string>;
//			^?
