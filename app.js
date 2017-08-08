var hours = ['6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.','12:00 p.m.', 
    '1:00 p.m.', '2:00 p.m.','3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.' , '8:00 p.m.']

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
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total += this.cookiesPerHourArray[i];

    }
    var list = document.getElementById('pdxcookie')
    var newList = document.createElement('li');
    newList.innerHTML = ('Total: ' + total )
    list.appendChild(newList);
    },

    };

    var pioneerSquare = {
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
    var list = document.getElementById('pioneercookie')
    var newList = document.createElement('li');
    newList.innerHTML = (hours[i] + ': ' + this.cookiesPerHourArray[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total += this.cookiesPerHourArray[i];

    }
    var list = document.getElementById('pioneercookie')
    var newList = document.createElement('li');
    newList.innerHTML = ('Total: ' + total )
    list.appendChild(newList);
    },

    };
var powells = {
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
    var list = document.getElementById('powellscookie')
    var newList = document.createElement('li');
    newList.innerHTML = (hours[i] + ': ' + this.cookiesPerHourArray[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total += this.cookiesPerHourArray[i];

    }
    var list = document.getElementById('powellscookie')
    var newList = document.createElement('li');
    newList.innerHTML = ('Total: ' + total )
    list.appendChild(newList);
    },

    };
var stJohns = {
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
    var list = document.getElementById('stJohnscookie')
    var newList = document.createElement('li');
    newList.innerHTML = (hours[i] + ': ' + this.cookiesPerHourArray[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total += this.cookiesPerHourArray[i];

    }
    var list = document.getElementById('stJohnscookie')
    var newList = document.createElement('li');
    newList.innerHTML = ('Total: ' + total )
    list.appendChild(newList);
    },

    };
    
var waterFront = {
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
    var list = document.getElementById('waterfrontcookie')
    var newList = document.createElement('li');
    newList.innerHTML = (hours[i] + ': ' + this.cookiesPerHourArray[i] )
    list.appendChild(newList);
    }
    var total = 0;
    for( i = 0; i < 15; i++ ) {
        total += this.cookiesPerHourArray[i];

    }
    var list = document.getElementById('waterfrontcookie')
    var newList = document.createElement('li');
    newList.innerHTML = ('Total: ' + total )
    list.appendChild(newList);
    },

    };
    
    pdxAirport.addToDom();
    pioneerSquare.addToDom();
    powells.addToDom();
    stJohns.addToDom();
    waterFront.addToDom();
    