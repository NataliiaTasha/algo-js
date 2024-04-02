(() => {
    /**
     * Function to generatee a random integer between 1 and 10.
     * @returns {number}
     */
    function rand10() { 
        return Math.floor(Math.random(10) * 10) + 1;
    }
   
    alert(rand10());

})();