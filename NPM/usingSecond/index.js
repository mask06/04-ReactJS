//Es-6 import kullanımı için package.json
// içerisine "type":"module" yapısı eklenmelidir.

import slugify from "slugify";
import randomColorRGB from "random-color-rgb";
console.log("mustafa Aygar");
console.log(slugify("Mustafa Aygar"));
console.log(slugify("Mustafa Aygar","//"));
console.log(slugify("Mustafa Aygar","***"));

console.log(randomColorRGB());
console.log(randomColorRGB());
console.log(randomColorRGB());
console.log(randomColorRGB());
console.log(randomColorRGB());