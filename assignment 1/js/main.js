 // 1) Create a function that takes an object and console.logs each property in the object.
 function objectList(myObj){
 	objCheck(myObj);
 	var list = "\n"; 

 	for (var i in myObj){
 		console.log( i + "->" + myObj[i]);
 		list += i + "->" + myObj[i] + "\n";
 	}
 	return list;
 }

 // 2) Create a function that takes an object and console.logs that object. Then delete the rollno property of the object and console.log the object again. 
function deleteRollno(myObj){
	objCheck(myObj);
	console.log("Before: " + objectList(myObj));
	delete myObj.rollno;
	console.log("After: " + objectList(myObj));

}

 // 3) Create a function that takes an object and returns the number of properties on that object that start with the letter "a" or "A"
function countA(myObj){
	objCheck(myObj);
	var count = 0;
	var first ='';
	for (var key in myObj){
		first = key.toString().charAt(0);
		if(first == 'A' || first == 'a'){
			count++;
		}
	}
	return count;
}

 // 4) Create a function that takes a cylinder object and returns the volume of that cylinder. The cylinder object will have radius and height properties.
function cyclinderVolume(cylinder){
	objCheck(cylinder);
	if(!(cylinder.hasOwnProperty('r') || cylinder.hasOwnProperty('h'))) {
		throw "Cylinder must have height and radius properties"
	}

	var radius = cylinder.r;
	var height = cylinder.h;

	return Math.PI*(radius*radius)*height;
}
 // 5) Create a function that takes a firstName, lastName and age and returns an object with firstName, lastName and age properties 
 //    as well as a friends property that contains a list of friend names. Add at least 3 friends to the friends list.
function friends(first, last, age){
	// create object
	var myObj = {firstName:first, lastName:last, myAge: age}; 
	// friends list
	var myFriends = ["Alex", "Ryley", "Johnnie",
					 "Wendy","Jessie","Emily", 
					 "Matt","Stephanie", "Jackie",
					 "Morgan","Mary","Jeremy"];
	var len = myFriends.length;
// add 5 random friends
	var friend = [];
	friend.push(myFriends[randomGen(len,0)]);
	friend.push(myFriends[randomGen(len,0)]);
	friend.push(myFriends[randomGen(len,0)]);
	friend.push(myFriends[randomGen(len,0)]);
	friend.push(myFriends[randomGen(len,0)]);

	myObj.friends = friend;
	return myObj;
}

 // 6) Create a function that takes the result of the last problem and a friend name and adds that 
 //    friend to the friends property of the object.
function addFriend(person, newFriend){
	
	return person.friends.push(newFriend); 
}

var gabe = friends("Gabe", "Rubio", 26);
addFriend(gabe, 'Alex');

function objCheck(myObj){
	if(!(myObj instanceof Object)){
 		throw "This function only handles objects, try again."
 	}
}

function randomGen(max, min)
{
	if(typeof min == undefined)
	{
		min = 0;
	}
	return (Math.floor(Math.random() * (max-min)+min));
}