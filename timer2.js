// importing readline
const readline = require('readline');
// create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
 
});


// The 'line' event is emitted whenever the input stream receives an end-of-line input (\n, \r, or \r\n)
// using line function to get the input
rl.on('line', (line) => {
    if(line === 'b') {
        process.stdout.write('\x07');
    }
    else if(line >= 1 && line <=9) {
        console.log(`setting timer for ${line} seconds...`)
        setTimeout(() => {
            process.stdout.write('\x07');
        },line * 1000);
    }
    

}).on('close', () => {                             // close event, when user press ctrl+c it will print the message and exit
  console.log('Thanks for using me, ciao!');
  process.exit(0);
});