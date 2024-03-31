(() => {
    // YOUR CODE HERE
  let num = prompt("Enter a number between 1 and 7");
    switch (num) {
        case '1':
            console.log("Monday");
            break;
        case '2': 
            console.log("Tuesday");
            break;
        case '3': 
            console.log("Wednesday");
            break;
        case '4':
            console.log("Thursday");
            break;
        case '5':
            console.log("Friday");
            break;
        case '6':
            console.log("Saturday");
            break;
        case '7':
            console.log("Sunday");
            break;
        default:
            prompt("Wrong number, please, enter a number between 1 and 7");
            break;      
            
                
  }
})();