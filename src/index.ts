import { add } from "./utils/index.js"; // 使用js后缀，为了编译后文件浏览器识别

const a = add(1, 3);
const app = document.getElementById("app")!;

app.innerHTML = `Hello Typescript ${a}`;
app.style.cssText = `border:1px solid #ddd;padding:10px`;
