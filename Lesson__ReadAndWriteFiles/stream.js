const fs = require("fs")

const rs = fs.createReadStream("./starter.txt", {encoding: "utf8"})

const ws = fs.createWriteStream("./new-lorem.txt")

rs.pipe(ws)