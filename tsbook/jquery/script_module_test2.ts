/**
 * ! error
 * - 최상위 스코프에 import or export 예약어가 없으면 `스크립트 파일`로 인식
 * - 다른 파일에서 사용가능 > 충돌 !
 * ```
 * 블록 범위 변수 'test'을(를) 다시 선언할 수 없습니다.ts(2451)
 * script_module_test.ts(2, 9): 여기서도 'test'이(가) 선언되었습니다.
 * ```
 */
declare namespace Example {
  const test: string;
}
