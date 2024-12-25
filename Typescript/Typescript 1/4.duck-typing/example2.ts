// in ts we change the property of the object 

// example
 var complex_data_type={name:"ramana",id:10}


//  try to change the property 
// error

// complex_data_type={id:4}

// we can change the order bu we can't change the property


// no error

complex_data_type={id:5,name:"kumar"}

console.log(complex_data_type)


// to overcome this error we can use any

// refer
// Anytype\example.ts