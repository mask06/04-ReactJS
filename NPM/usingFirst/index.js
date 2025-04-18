const bilgeAdam = require("slugify");

let courseName = "bilgeAdam Ank-18 boost frontend";

console.log(courseName);
console.log(bilgeAdam(courseName));
console.log(bilgeAdam(courseName,"$$$"));
console.log(bilgeAdam(courseName,"*"));
console.log(bilgeAdam(courseName,"/"));

