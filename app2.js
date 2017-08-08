var Store = function(min, max, avgCookie, listID) {
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.cookieSalesArr = [];
    this.listID = listID;
    this.hours = ['6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.','12:00 p.m.', 
    '1:00 p.m.', '2:00 p.m.','3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.' , '8:00 p.m.'];

}

Store.prototype.customersPerHour = function(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
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
    this.calcCookiesByHour();
        for( i = 0; i < 15; i++ ) {
    var list = document.getElementById(this.listID)
    var newList = document.createElement('li');
    newList.innerHTML = (this.hours[i] + ': ' + this.cookieSalesArr[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total = total + this.cookieSalesArr[i];
    }

    var list = document.getElementById(this.listID)
    var newList = document.createElement('li');
    newList.innerHTML = ('Total: ' + total )
    list.appendChild(newList);
}

    

var pdxAirport = new Store(23, 65, 6.3, 'pdxcookie');
var pioneerSquare = new Store(3, 24, 1.2, 'pioneercookie');
var powells = new Store (11, 38, 3.7, 'powellscookie');
var stJohns = new Store (20, 38, 2.3, 'stJohnscookie');
var waterFront = new Store (2, 16, 4.6, 'waterfrontcookie');   

pdxAirport.addToDom();
   