'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }; // ? axios 패키지에는 `__esModule` 속성이 없으므로 { "default": "axios" } 반환.
  };
Object.defineProperty(exports, '__esModule', { value: true }); // ? 다른 파일에서 이 파일을 불러오고자 할 때, 이 파일이 `CommonJS` 로 변환된 파일임을 보여줌
const axios_1 = __importDefault(require('axios'));
(async () => {
  try {
    const res = await axios_1.default.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    console.log(res.data.userId);
    const res2 = await axios_1.default.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    );
    console.log(res2.data.id);
  } catch (error) {
    if (axios_1.default.isAxiosError(error)) {
      console.log(error.response?.data.message);
    }
  }
})();
