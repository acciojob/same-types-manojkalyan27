function isSameType(value1, value2) {
  //your js code here
	if((typeof value1) === (typeof value2)){
		console.log(true);
	}else{
		console.log(false);
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
isSameType(value1, value2);
