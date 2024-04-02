(() => {
    /**
     * Function that calculates surface of a rectangle.
     * @param {number} length is the length of the rectangle.
     * @param {number} width is the width of the rectangle.
     * returns {number} the surface of the rectangle.
     */
    let calcSurface = (length, width) => {
        return  s = length * width;
    }
    let length = parseInt(prompt("Enter a length of your rectangle, please."));
    let width = parseInt(prompt("Now, enter a width of your rectangle."));
    calcSurface(length, width);


    alert(`The surface of your rectangle is ${s}`);

})();