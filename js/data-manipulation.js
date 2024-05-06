//array functions
//object functions

//loops in JS
const myFriends=['Sonu','Monu','Tonu','Ponu'];

for(let i=0 ;i<myFriends.length;i++){
    console.log(myFriends[i]);
}

//akin to forEach loop in java
for(let friend of myFriends){
    console.log(friend);
}

for(let friend in myFriends){
    console.log(friend);
}

myFriends.forEach((friend)=>{console.log(friend) });
myFriends.forEach(friend=> console.log(friend));

myFriends.forEach(arg => {return arg +2});
myFriends.forEach(arg => arg +2);

//determines whether an array includes a certain element, returning true or false as appropriate
console.log(myFriends.includes('Sonu'));

const friends=myFriends.map(friend => friend.toUpperCase());
friends.forEach(f => console.log(f));

//or
myFriends.map(friend => friend.toUpperCase()).forEach(f => console.log(f));
myFriends.map(friend => friend.toUpperCase()).filter(frnd=>frnd.length< 3).forEach(f=>console.log(f));

//object maniupulation

const empData = {
    empid: 101,
    fName: "sonu",
    sal: 10.5,
    isIndian: true,
    phones:[321314,12313214],
    address:{city:'pune',pin:22222},
    printData:function(){
        console.log(this);
    }
}
//Object.entries : converts the empData object into an array of its own enumerable string-keyed property 
// {name: "John", age: 30, department: "HR"}, Object.entries(empData) would produce [["name", "John"], ["age", 30], ["department", "HR"]].
Object.entries(empData).forEach(e=>console.log(e));

