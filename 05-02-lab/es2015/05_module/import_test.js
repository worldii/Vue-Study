// TODO: multi_export.js의 내용을 import 해서 사용하세요.
//  단 local에 변수 addr이 있음을 주의한다.

// END

let addr = "광주광역시";
console.log("import_test.js", name, myaddr, age);
console.log("import_test.js", add(10, 20));

// TODO: default_export.js의 내용을 import 해서 사용하세요.
import greeting from "./default_export.js";

greeting.sayHello.kor("홍길동");

// TODO: name, myaddr, age, greeting을 export 하시오.
export {name, myaddr, age, greeting};
