'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



let Seattle = {

locationname: 'Seattle',
mincust : 23,
maxcust:65,
avgsales:6.3,
customerperhour:[],
CookiePerHour:[],
calcCustomerEachHour : function(){

    for (let i = 0; i < hours.length; i++) {
randomnum(this.mincust,this.maxcust)
        this.customerperhour.push(randomnum(this.mincust,this.maxcust));
    }
},
Calccookiperhour: function(){

    for (let i = 0; i < hours.length; i++) {
      this.CookiePerHour.push(math.floor(this.avgsales*this.customerperhour))
        }}
 
        
}
 

for (let i = 0; i < hours.length; i++) {

    let parent = document.getElementById('parent');
let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = Seattle.Calccookiperhour[i];
}
