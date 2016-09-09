//number variable
var one=12
console.log(one)
//this is for the boolean
var two=true
var falsevar=false
console.log(two, falsevar)
//this is the string
var three="this is the example of the string"
console.log(three)
//this is th euse of the array
var numArray=[4, 405,456,1000, 2,1]
console.log(numArray)
document.write(3)
var stringArray=["hellow", "goodbuy" ,"how are you"]
console.log(stringArray[0])
// this is the mixed array
var mixedArray=[21,"hellow",45,23.9,"goodbuy"]
console.log(mixedArray)
document.write(2)
//  string concatnation
var stringvalue1="hellow"
var stringvalue2="world!"
var combinevariables=stringvalue1+stringvalue2
console.log(combinevariables)
// number concatnation
var x=12
var y=2
var z=x+y
console.log(z)
// this is for the concatnation-mixed
var stringvariables3="number"
var combinevariables3="our" + stringvariables3 +"is"+stringvalue1 +"!"
console.log(combinevariables3)

// this is the use of the loop
if(2<1){
	console.log('1 is greater than 2')
}
else {
		console.log('2 is smaller than 1')
	}

// this is the use of the loop
if(5<3){
	console.log('5 is greater than 3')
}
else {
		console.log('3 is smaller than 5')
	}

	// this is the use of the if only
if(5>3){
		console.log("5 is greater than 3")
	}
	// this is for the comparision 
	var num1=6
	var num2="6"
	var num3=10
	if(num1<num3 && num3>num2){
		console.log("both conditions are true")
	}
	if(num1 == 6||num==100){
		console.log("al least one condition is true")
	}
	if (!(num3 == 2)){
		console.log("the above condition was not true")
	}


	if(num1==num2){
		console.log("they are equla in value")
	}

if(num1 != num2){
		console.log("they are  not equla in value")
	}
	else{
		console.log("ther are equal")
		}

// this is the use of the ===
if(num1 === num2){
	console.log("they are equal in value and type")

}
else{
	console.log("they are not equal in value and type")
}

var numbervalue3=12
var numbervalue4=Number(prompt("choose a number between 1-100"))
if(numbervalue3 > numbervalue4){
	console.log(numbervalue3 +"is greater than"+ numbervalue4)

}
else if(numbervalue3 < numbervalue4){
	console.log(numbervalue4 +"is greater than"+ numbervalue3)

}
else{
	console.log("the numbers are equal")

}

// this is the use of the for loop
for(var i=0; i<=20;i=i+1){
	console.log(i)
}
for(var i=0; i<numArray.length;i=i+1){
	console.log(i,numArray[i])
}
// this is the use of the while loop
//var username2=prompt("what's your name?")
//while(username2 != "pritam"){
	//username3= prompt("what's your name")
//}
var num4=10
var num5=15

function addNumbers(){
	document.write(num4+num5)
}
addNumbers()

 function addNumbers2(a,b){
 	document.write(a+b)
 }
 addNumbers2(num4,num5)
 addNumbers2(25,11)
 var num6=multiplyNumbers(4,3)
 function multiplyNumbers(a,b){
 	return (a*b)
 }
 console.log(num6)