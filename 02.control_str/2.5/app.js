(() => {
    // YOUR CODE HERE
    let num = prompt("What is your favorite number?");
    while (num != 42) {
        num = prompt("Are you sure?");
    }
})();