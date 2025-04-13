/**
 * 02.15.01 컨디셔널 타입 분배 법칙
 * */

type StrAndNum = string | number;

type ResultNever = StrAndNum extends string ? string[] : never;
//			^?

type GetResultByGeneric<T> = T extends string ? string[] : never;

/**
 * ? 검사하려는 타입이 제네릭이면서 유니언이면 분배법칙이 실행됨
 * ```ts
 * GetResultByGeneric<string | number>
 * => GetResultByGeneric<string> | GetResultByGeneric<number>
 * => string[] | never
 * => string[]
 * ```
 */
type ResultStrArr = GetResultByGeneric<StrAndNum>;
//			^?

type IsStringBoolean<T> = T extends string ? true : false;

type ResultTrue1 = IsStringBoolean<'문자열'>;
//			^?

/**
 * ? 검사하려는 타입이 제네릭이면서 유니언이면 분배법칙이 실행됨
 * ```ts
 * IsStringBoolean<'문자열' | 10>
 * => GetResultByGeneric<'문자열'> | GetResultByGeneric<10>
 * => true | false
 * => boolean
 * ```
 */
type ResultBoolean = IsStringBoolean<'문자열' | 10>;
//			^?

type IsStringTrueFasle<T> = [T] extends [string] ? true : false;

type ResultTrue2 = IsStringTrueFasle<'문자열'>;
//			^?

/**
 * ? 배열로 제네릭을 감싸면 분배법칙이 일어나지 않음
 * ```ts
 * IsStringBoolean<'문자열' | 10>
 * => ['문자열' | 10] extends [string]
 * => false
 * ```
 */
type ResultFalse = IsStringTrueFasle<'문자열' | 10>;
//			^?
