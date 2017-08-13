//Global variables `
var salesByHour = [];
var stores = [];
var sumOfAllTotals = 0;
var staffIndex = 0;
var cookieIndex = -1;
//Constructor function
var Store = function(name, min, max, avgCookie, listID,) {
    this.name = name
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.cookieSalesArr = [];
    this.staff = [];
    this.listID = listID;
    this.addToDom();
    this.pushArr();
    cookieIndex += -1;
};
Store.prototype.pushArr = function(){
    stores.push(this);
}
Store.prototype.customersPerHour = function(){//Calculates random number of customers between min and max
    var customers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    var staffNeed = Math.ceil(customers / 20)
    if(staffNeed < 2) {staffNeed = staffNeed +1}//every store must have atleast 2 employees per hour as per instructions 
    this.staff.push(staffNeed);
    return customers
}

Store.prototype.cookiesPerHour = function(){//Calculates cookies sold per hour 
    return Math.floor(this.customersPerHour() * this.avgCookie);
}

Store.prototype.calcCookiesByHour = function(){//Calculates cookiesPerHour function 15 times and adds reslut to array
    for(i = 0; i < 15; i++ ){
            this.cookieSalesArr.push(this.cookiesPerHour());
        }
        return this.cookieSalesArr
}

Store.prototype.addToDom = function(){//Creates cookie data table
    var row = document.getElementById('stores');
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', cookieIndex);
    newRow.innerHTML = this.name
    row.appendChild(newRow);

    
    this.calcCookiesByHour();
        for( i = 0; i < 15; i++ ) {
    var list = document.getElementById(cookieIndex)
    var newList = document.createElement('td');
    newList.innerHTML = (this.cookieSalesArr[i] )
    list.appendChild(newList);
    }
    
    //Adds totals to table
    var total = 0;
    for( i = 0; i < 15; i++ ) {//Summates all cookies sold a day by store
        total = total + this.cookieSalesArr[i];
    }
    var list = document.getElementById(cookieIndex)
    var newList = document.createElement('td');
    newList.innerHTML = ( total );
    list.appendChild(newList);

    sumOfAllTotals += total;//Calculates sum of all cookies sold for all stores (used in totalTotal func)

    //Creates Staff table
    var row = document.getElementById('stores2');
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', staffIndex);
    newRow.innerHTML = this.name
    row.appendChild(newRow);

    
        for( i = 0; i < 15; i++ ) {//Adds staff required for each hour to staff table
    var list = document.getElementById(staffIndex)
    var newList = document.createElement('td');
    newList.innerHTML = (this.staff[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {//Calcultes total number of staff needed for each store per day
        total = total + this.staff[i];
    }
    var list = document.getElementById(staffIndex);
    var newList = document.createElement('td');
    newList.innerHTML = ( total );
    list.appendChild(newList);
    staffIndex += 1;
}

function totalTotal(){ //Creates and populates total row 
    for (var j = 0; j < 15; j++ ){//Iterates through each saved "hour" in cookieSalesArr.
      var count = 0;
        for(var i = 0; i < stores.length; i++ ){//Goes through each store in stores array and summates cookiesSalesArr.[j]. 
          count += stores[i].cookieSalesArr[j]; 
        }
        salesByHour.push(count);//Saves the value of count to an array before resting it with next iterations.
        }
  
  //Creates total row as a child of <tbody id="stores">. 
  var row = document.getElementById('stores');
  var newRow = document.createElement('tr');
  newRow.setAttribute('id', 'total');
  newRow.innerText = 'Total';
  row.appendChild(newRow);
  
  for( i = 0; i < 15; i++ ) {//Populates newly created total row by adding table data for each element of salesByHour. 
         var list = document.getElementById('total')
         var newList = document.createElement('td');
         newList.innerText = (salesByHour[i])
         list.appendChild(newList);
    }
        //Adds final cell with the sum of all cookies sold for all stores.
        var list = document.getElementById('total')
        var newList = document.createElement('td');
        newList.innerHTML = (sumOfAllTotals)
        list.appendChild(newList);
        
    }
    
//Creates our five original stores and creates total row.
var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, 'pdxcookie');
var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneercookie');
var powells = new Store ('Powells', 11, 38, 3.7, 'powellscookie');
var stJohns = new Store ('St. Johns', 20, 38, 2.3, 'stJohnscookie');
var waterFront = new Store ('Waterfront', 2, 16, 4.6, 'waterfrontcookie');
totalTotal();



//Adds new store via user input and resets total row.
var submit = document.getElementById('makestore');
submit.addEventListener("submit", function(){//Creates new store object instance and adds it to stores array.
event.preventDefault();
var parent = document.getElementById('stores');
var child = document.getElementById('total');
parent.removeChild(child);
var New = new Store (this.name.value,
         parseInt(this.min.value),
         parseInt(this.max.value),
         parseInt(this.avg.value), 
         this.name.value);
totalTotal();
submit.reset();

var changeStore = document.getElementById("change-stores");
var newchangeStore = document.createElement('option');
newchangeStore.setAttribute('value', this.name.value )
changeStore.appendChild(newchangeStore);
newchangeStore.innerText = New.name
console.log(New.name)

});

// var change = document.getElementById('ch.Store');
// change.addEventListener("submit", function(){
// event.preventDefault();
// var changeStore = document.getElementById("change-stores");
// var newchangeStore = document.createElement('option');
// newchangeStore.setAttribute('value', New.name.value )
// changeStore.appendChild(newchangeStore);
// change.reset();
// });
