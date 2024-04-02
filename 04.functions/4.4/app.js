(() => {
    /**
     * Function to generate a random list of learners.
     * @param {Array} inputAr is aa array of all learners.
     * @param {number} n is a random integer that is greater than 0 and less than the length of inputAr.
     * @returns {Array} randLearn. 
    */

    let inputAr = ["adca09", "Adrien", "Angel", "Arnaud", "Arnaud VA", "ASonia", "Caroline", "Corentin", "David", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Ilies", "Isabelle", "Jessica", "Julie", "Justine F", "Justine L", "Jordan", "Laura", "Louis de Viron", "Ludovic", "Lyne", "Manu", "Maryam", "Mohamed", "Nataliia", "Nathanael", "Stacy", "Steph", "Tom", "Youris", "Zahra"];
    n = Math.floor(Math.random() * inputAr.length);
    let randLearn = [];
    
    function pickLearner(inputAr, n) {
        while (n >= 1) {
            randLearn.push(inputAr[n]);
            n --;
        }
    }
    pickLearner(inputAr, n);
    alert(randLearn);

})();