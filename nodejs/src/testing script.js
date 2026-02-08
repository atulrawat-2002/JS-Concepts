import path from 'path';
import { fileURLToPath } from 'url'

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
__dirname = path.join(__dirname, "../../");

console.log("import.meta.url", import.meta.url)
console.log("filename", __filename)
console.log("dirname", __dirname)