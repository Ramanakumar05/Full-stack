// definition enum enum_name

enum Direction{
    up,
    down,
    left,
    right
}

function move(direction)
{
    console.log(Direction[direction])
}

move(Direction.left)


// return the value

console.log(Direction[0])
console.log(Direction[1])
console.log(Direction[2])
console.log(Direction[3])

// return the index
console.log(Direction.left)