/**
 * A class that represents a circle.
 * Creates new circle
 * @param {number} xPos - position of the circle center along the X-axis.
 * @param {number} yPos - position of the circle center along the y-axis.
 * @param {number} radius - radius of the circle.
 */

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    /**
     * move the circle along the X- and Y-axis.
     * @param {number} xOffset - number of units to move along the X-axis.
     * @param {number} yOffset - number of units to move along the Y-axis.
     */
    move(xOffset, yOffset) {
         this.xPos += xOffset;
         this.yPos += yOffset;
    }
    /**
     * Calculate the surface og the circle.
     * @returns {number} - the surface of the circle.
     */
    get surface() {
        return Math.PI * this.radius ** 2;
    }
}

let myCircle = new Circle(2, 1, 45);
console.log(myCircle.surface);
myCircle.move(3, 4);
console.log(myCircle.xPos, myCircle.yPos);