var hours = ['8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.','12:00 p.m.', 
    '1:00 p.m.', '2:00 p.m.','3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.']

var pdxAirport = {
    min: 23,
    max: 65,
    avgCookie: 6.3,
    cookiesPerHourArray: [],

    custPerHour: function(){
      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },

    cookiesPerHour: function(){
       return Math.floor(this.custPerHour() * this.avgCookie);
    },
    
    calcCookiesPerHour: function(){
        for(i = 0; i < 15; i++ ){
            this.cookiesPerHourArray.push(this.cookiesPerHour());
        }
        return this.cookiesPerHourArray
    },
    
    addToDom: function(){
        this.calcCookiesPerHour()
        for( i = 0; i < 15; i++ ) {
    var list = document.getElementById('pdxcookie')
    var newList = document.createElement('li');
    newList.innerHTML = (hours[i] + ': ' + this.cookiesPerHourArray[i] )
    list.appendChild(newList);
    }
    },

    };


var pioneerSquare = {
    minCutomers: 3,
    maxCustomers: 24,
    avgCookie: 1.2,
    cookiesByHour: [],

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },

    cookiesPerHour: function(){
       return Math.floor(this.custPerHour() * this.avgCookie);
    },
    

    };

var powells = {
    minCutomers: 11,
    maxCustomers: 38,
    avgCookie: 3.7,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },

    cookiesPerHour: function(){
       return Math.floor(this.custPerHour() * this.avgCookie);
    },
    };

var stJohns = {
    minCutomers: 20,
    maxCustomers: 38,
    avgCookie: 2.3,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },

    cookiesPerHour: function(){
       return Math.floor(this.custPerHour() * this.avgCookie);
    },
    };

var waterfront = {
    minCutomers: 2,
    maxCustomers: 16,
    avgCookie: 4.6,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },

    cookiesPerHour: function(){
       return Math.floor(this.custPerHour() * this.avgCookie);
    },
    
    };

    
    function addToDom(){
        this.calcCookiesPerHour()
        for( i = 0; i < 15; i++ ) {
    var list = document.getElementById('pdxcookie')
    var newList = document.createElement('li');
    newList.innerHTML = (hours[i] + ': ' + this.cookiesPerHourArray[i] )
    list.appendChild(newList);
    }
    }

    pdxAirport.addToDom();
    console.log(pdxAirport.calcCookiesPerHour());