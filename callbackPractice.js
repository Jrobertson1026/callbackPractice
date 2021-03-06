/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHI function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



var first = function(names, cb) {
    cb(names[0]);

}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName) {
    console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var last = function(names, cb) {
    cb(names[names.length - 1])
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName) {
    console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var multiply = function(x, y, cb) {
    cb(x * y);
}

multiply(4, 3, function(answer) {
    console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var contains = function(names, string, cb) {
    for (var i = 0; i < names.length; i++) {
        if (names[i] === string) {
            cb(true);
        }
    }
    return cb(false);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result) {
    if (result === true) {
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the array');
    }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */









/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var each = function(names, callback) {
    for (var i = 0; i < names.length; i++) {
        var item1 = names[i];
        var indice2 = i;
        callback(item1, indice2);

    }
    return false;
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice) {
    console.log('The item in the ' + indice + ' position is ' + item);
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





var getUserById = function(users, title, callback) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === title) {
            callback(users[i]);
        }
    }
    return false;
};

var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
}, {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
}, {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
}, ];

getUserById(users, '16t', function(user) {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
