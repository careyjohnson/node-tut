const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `${i} Hello world \n`, { flag: "a" });
}
