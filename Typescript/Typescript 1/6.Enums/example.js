// definition enum enum_name
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log(Direction[direction]);
}
move(Direction.left);
// return the value
console.log(Direction[0]);
console.log(Direction[1]);
console.log(Direction[2]);
console.log(Direction[3]);
// return the index
console.log(Direction.left);
