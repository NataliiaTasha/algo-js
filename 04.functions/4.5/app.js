(() => {
    /**
    * Function that calculates the distance between two points A and B in a 2D space.
    * @param {number} xA is an X coordinate of the point A.
    * @param {number} yA is an Y coordinate of the point A.
    * @param {number} xB is an X coordinate of the point B.
    * @param {number} yB is an Y coordinate of the point B.
    * @returns {number} the distance between two points A and B.
    */
    let xA = 1;
    let yA = 1;
    let xB = 2;
    let yB = 2;

    xA = 4;
    xB = 1;
    yB = 1;

    function calcDistance(xA, yA, xB, yB) {
        let x = xB - xA;
        let y = yB - yA;        
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
    let distance = calcDistance(xA, yA, xB, yB);
    alert(distance);

})();