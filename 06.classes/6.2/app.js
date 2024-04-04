/**
 * A class that represents a rectangle
 * Creates new rectangle
 * @param {number} topLeftXPos - position of the top left angle along the X-axis.
 * @param {number} topLeftYPos - position of the top left angle along the y-axis.
 * @param {number} width - width of the rectanle.
 * @param {number} length - length of the rectanle.
 */
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
       
    collides(otherRectangle) {
        if (this.topLeftXPos >= otherRectangle.topLeftXPos + otherRectangle.length || otherRectangle.topLeftXPos >= this.topLeftXPos + this.length) {
            return false; //there is no intersection at X coordinate
        } else if (this.topLeftYPos >= otherRectangle.topLeftYPos + otherRectangle.width || otherRectangle.topLeftYPos >= this.topLeftYPos + this.width) {
            return false; //there is no intersection at Y coordinate
        } else {
            return true;
        }
    }
}

let rectangle = new Rectangle(1, 5, 4, 7);
let otherRectangle = new Rectangle(6, 7, 5, 3);

console.log(rectangle.collides(otherRectangle));