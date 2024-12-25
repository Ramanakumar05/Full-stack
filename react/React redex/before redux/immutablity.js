const person={
    name:"ramana",
    age:18,
    address:{
        city:"DPI",
        street:"TRS"
    }
}

// mutable
// change the person

person.name="ramana kumar"

// duplicate or copy

const person2={
    ...person,
    // deep copy
    address:{...person.address},
    name:"kumar the king ",
    age:50
}
// form the person
console.log(person)
// form the person 2
console.log(person2)

// afte the address
person2.address.city="chennai"

// form the person
console.log(person)
// form the person 2
console.log(person2)
