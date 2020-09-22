const userInput = process.argv.slice(2);    // getting userinput 
userInput.sort(function(a,b)        // sorting the time we got from userinput
{
    return a - b;
});

if(userInput.length !== 0)
{
for(let time of userInput) {

    let isNumber = isNaN(time);         // checking userinput is number
    if(time >= 0 && isNumber === false)               // time should be positive number
    {
        let delay = 1000;
        delay = delay * time;       // multiply usertime with 1000
        setTimeout(() => {
            process.stdout.write('\x07');
        },delay);
    }
}
}