// destructuring

const { exec } = require('child_process')
exec('ls', (e, stdout) => {
    (e) ?
    console.log(e) :
    console.log(stdout)
})

// spawn

const { spawn } = require('child_process')
const myprocess = spawn('ls')

process.stdout.on("data", data => console.log(data.toString()));
process.on("exit", () => console.log("process end"));
