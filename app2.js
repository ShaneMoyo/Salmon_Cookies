//Global variables 
var hoursOpen = ['6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.','12:00 p.m.', 
    '1:00 p.m.', '2:00 p.m.','3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.' , '8:00 p.m.'];
var salesByHour = [];
var storz = [];
var sumOfAllTotals = 0;


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
};
Store.prototype.pushArr = function(){
    storz.push(this);
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
    newRow.setAttribute('id', this.listID);
    newRow.innerHTML = this.name
    row.appendChild(newRow);

    
    this.calcCookiesByHour();
        for( i = 0; i < 15; i++ ) {
    var list = document.getElementById(this.listID)
    var newList = document.createElement('td');
    newList.innerHTML = (this.cookieSalesArr[i] )
    list.appendChild(newList);
    }
    
    //Adds totals to table
    var total = 0;
    for( i = 0; i < 15; i++ ) {//Summates all cookies sold a day by store
        total = total + this.cookieSalesArr[i];
    }
    var list = document.getElementById(this.listID)
    var newList = document.createElement('td');
    newList.innerHTML = ( total );
    list.appendChild(newList);

    sumOfAllTotals += total;//Calculates sum of all cookies sold for all stores (used in totalTotal func)

    //Creates Staff table
    var row = document.getElementById('stores2');
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.avgCookie);
    newRow.innerHTML = this.name
    row.appendChild(newRow);

    
        for( i = 0; i < 15; i++ ) {//Adds staff required for each hour to staff table
    var list = document.getElementById(this.avgCookie)
    var newList = document.createElement('td');
    newList.innerHTML = (this.staff[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {//Calcultes total number of staff needed for each store per day
        total = total + this.staff[i];
    }
    var list = document.getElementById(this.avgCookie);
    var newList = document.createElement('td');
    newList.innerHTML = ( total );
    list.appendChild(newList);
}

function totalTotal(){ //Creates and populates total row 
        for (var j = 0; j < 15; j++ ){
            var count = 0;
            for(var i = 0; i < storz.length; i++ ){
                count += storz[i].cookieSalesArr[j]; 
                }
            salesByHour.push(count);
        }
         var row = document.getElementById('stores');
         var newRow = document.createElement('tr');
         newRow.setAttribute('id', 'total');
         newRow.innerText = 'Total';
         row.appendChild(newRow);
         
         for( i = 0; i < 15; i++ ) {
         var list = document.getElementById('total')
         var newList = document.createElement('td');
         newList.innerText = (salesByHour[i])
         list.appendChild(newList);
    }
        var list = document.getElementById('total')
         var newList = document.createElement('td');
         newList.innerHTML = (sumOfAllTotals)
         list.appendChild(newList);
        
    }
    

var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, 'pdxcookie');
var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneercookie');
var powells = new Store ('Powells', 11, 38, 3.7, 'powellscookie');
var stJohns = new Store ('St. Johns', 20, 38, 2.3, 'stJohnscookie');
var waterFront = new Store ('Waterfront', 2, 16, 4.6, 'waterfrontcookie');




totalTotal();
console.log(storz);

var submit = document.getElementById('makestore');

submit.addEventListener("submit", function(){
event.preventDefault();
// var name = document.getElementById('name');
// var max = document.getElementById('max');
// var min = document.getElementById('min');
// var avg = document.getElementById('avg');

    var New = new Store (this.name.value, this.min.value, this.max.value, this.avg.value, this.name.value);
    console.log(storz);
    
});
console.log(storz);