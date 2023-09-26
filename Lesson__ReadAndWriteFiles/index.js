const fsPromises = require("fs").promises
const path = require("path")


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "starter.txt"), "utf8")
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data)
        await fsPromises.appendFile(path.join(__dirname, "promiseWrite.txt"), "\n\nNice to meet you")
        await fsPromises.rename(path.join(__dirname, "promiseWrite.txt"), "promiseNewName.txt")
        const newData = await fsPromises.readFile(path.join(__dirname, "promiseNewName.txt"), "utf8")
        console.log("\n\n", newData);
    } catch (err) {
        console.log(err);
    }
}

fileOps()

// fs.writeFile(path.join(__dirname, "newFile.txt"), "Tipa un text cu morala ar trebui sa fie aici", (err)=> {
//     if (err) throw err
//     console.log("Operation complete");

//     fs.rename(path.join(__dirname, "newFile.txt"), "NewNameFile.txt", (err)=> {
//         if (err) throw err
//         console.log("Operation complete");
//     })
// })




// process.on("uncaughtException", (err) => {
//     console.error(`There was an uncaught: ${err}`)
//     process.exit(1)
// })