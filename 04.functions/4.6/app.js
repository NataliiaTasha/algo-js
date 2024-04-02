(() => {
    /**
     * Function to calculate the factorial of a number.
     * @param {number} a 
     * @returns {number} factorial of the number a.
     */
    function factorial(a) {
        if (a === 0) {
            return 1;
        } else {
            return a * factorial(a - 1);
        } 
    }
    console.log(factorial(4));
})()