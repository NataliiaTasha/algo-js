(() => {
    // YOUR CODE HERE
    let min = 120;
    let max = 124;
    let current = 55;

    if ((current > min) && (current < max)) {
        console.log("The current number is between the min and max numbers.");
    } else if (min > max) {
        console.log("Oups, en error: the min can\'t be greater than max. You probably preferred sports at school.");
    } else {
        console.log("The current number is not between the min and max numbers.");
    }
 
})();