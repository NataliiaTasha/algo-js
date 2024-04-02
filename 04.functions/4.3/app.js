(() => {
    /**
     * Function creating an array from n random integers between 1 and 10.
     * @param {number} n is a number entered by the user.
     * @returns {Array} arrRand. 
     */
    let arrRand = [];
    let n = parseInt(prompt("Enter a number of random numbers please."));
    
    function multiRand(n) {
        while (n >= 1) {
            function rand10() { 
                return Math.floor(Math.random(10) * 10) + 1;
            }
            arrRand.push(rand10());
            n -= 1;
        }
    }
    multiRand(n);
    alert(arrRand);

})();