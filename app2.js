var Store = function(name, min, max, avgCookie, listID,) {
    this.name = name
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.cookieSalesArr = [];
    this.staff = [];
    this.listID = listID;
    this.hours = ['6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.','12:00 p.m.', 
    '1:00 p.m.', '2:00 p.m.','3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.' , '8:00 p.m.'];
}




Store.prototype.customersPerHour = function(){
    var customers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    var staffNeed = Math.ceil(customers / 20)
    if(staffNeed < 2) {staffNeed = staffNeed +1} //every store must have atleast 2 employees per hour as per instructions 
    this.staff.push(staffNeed);
    console.log(this.staff);
    return customers
}

Store.prototype.cookiesPerHour = function(){
    return Math.floor(this.customersPerHour() * this.avgCookie);
}

Store.prototype.calcCookiesByHour = function(){
    for(i = 0; i < 15; i++ ){
            this.cookieSalesArr.push(this.cookiesPerHour());
        }
        return this.cookieSalesArr
}

Store.prototype.addToDom = function(){
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
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total = total + this.cookieSalesArr[i];
    }

     var list = document.getElementById(this.listID)
     var newList = document.createElement('td');
     newList.innerHTML = ( total );
     list.appendChild(newList);

     //staff

     var row = document.getElementById('stores2');
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.avgCookie);
    newRow.innerHTML = this.name
    row.appendChild(newRow);

    
        for( i = 0; i < 15; i++ ) {
    var list = document.getElementById(this.avgCookie)
    var newList = document.createElement('td');
    newList.innerHTML = (this.staff[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total = total + this.staff[i];
    }

     var list = document.getElementById(this.avgCookie);
     var newList = document.createElement('td');
     newList.innerHTML = ( total );
     list.appendChild(newList);
}

    

var pdxAirport = new Store('PDX Airport', 23, 65, 6.3, 'pdxcookie');
var pioneerSquare = new Store('Pioneer Square', 3, 24, 1.2, 'pioneercookie');
var powells = new Store ('Powells', 11, 38, 3.7, 'powellscookie');
var stJohns = new Store ('St. Johns', 20, 38, 2.3, 'stJohnscookie');
var waterFront = new Store ('Waterfront', 2, 16, 4.6, 'waterfrontcookie');   

pdxAirport.addToDom();
pioneerSquare.addToDom();
powells.addToDom();
stJohns.addToDom();
waterFront.addToDom();


