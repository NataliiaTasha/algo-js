(() => {
    /**
     * Function that calculates the distance between two points A and B in a 2D space.
     * @param {number} xA is an X coordinate of the point A.
     * @param {number} yA is an Y coordinate of the point A.
     * @param {number} xB is an X coordinate of the point B.
     * @param {number} yB is an Y coordinate of the point B.
     * returns {number} the distance between two points A and B.
     */
    let xA = parseInt(prompt("Enter X coordinate of the point A"));
    let yA = parseInt(prompt("Enter Y coordinate of the point A"));
    let xB = parseInt(prompt("Enter X coordinate of the point B"));
    let yB = parseInt(prompt("Enter Y coordinate of the point B"));


    function calcDistance(xA, yA, xB, yB) {
        let x = xB - xA;
        let y = yB - yA;        
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
    let dist = calcDistance(xA, yA, xB, yB);
    alert(`The distance between points A an B is ${dist}`);
})();