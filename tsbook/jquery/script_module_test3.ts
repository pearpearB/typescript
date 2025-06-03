/**
 * ? safe
 * - 최상위 스코프에 import or export 예약어가 있으면 모듈 파일로 인식
 * - 다른 파일에서 사용불가 > 충돌 안 남 ~_~
 */
declare namespace Example {
  const test: string;
}

export {};
