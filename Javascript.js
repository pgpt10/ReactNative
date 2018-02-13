console.log("Hello") //returns undefined

//Comments

1 + 2

var suit //type of suit - undefined
suit = "hearts" //type of suit - string

"Hello" + "World" //string concatenation

"Hello" + 8


var addThree = function (a, b, c){
	return a + b + c 
}


//Primitive types - number, string, boolean 
"hello" + 5 + 10
5 + 10 + "hello"


//typeof - returns a string of the type i.e. "number" / "boolean" / "string"
typeof addThree(5, 10, 20)
"number"
typeof addThree("5", "10", "20")
"string"
typeof addThree
"function"
typeof true
"boolean"


Math.pow(a, b)
Math.round(a)
Math.floor(a)
Math.ceil(a)
Math.min(a, b, c, ...)
Math.max(a, b, c, ...)
Math.random() //random number between 0 and 1


//String methods
length
toUpperCase()
toLowerCase()
indexOf(string)
charAt(index)
slice(index, length) //substring


//Comparison
5 === 7 //use ===
5 !== 7
"zebra" > "ape" => true //based on dictionary
"A" < "a" true
"Z" < "z" true
"Zebra" > "ape" => false
"aa" < "a" false //based on dictionary
 
//5, 9