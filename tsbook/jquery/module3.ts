/**
 * - module, module2 동일한 interface 이지만 모듈 파일이므로 서로 합쳐지지 않음
 * - `as ${NAMESPACE}` 할 수 있으므로 모듈 파일에서는 보통 네임스페이스를 사용하지 않음
 */
import * as module from './module';
import * as module2 from './module2';

const ex: module.Test = {
  name: 'hi',
  name2: 'error',
};

const ex2: module2.Test = {
  name: 'error',
  name2: 'hi',
};

module.default();
