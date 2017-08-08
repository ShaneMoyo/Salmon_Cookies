var pdxAirport = {
    min: 23,
    max: 65,
    avgCookie: 6.3,

    custPerHour: function(){
      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
       
    },
    };


var pioneerSquare = {
    minCutomers: 3,
    maxCustomers: 24,
    avgCookie: 1.2,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
    };

var powells = {
    minCutomers: 11,
    maxCustomers: 38,
    avgCookie: 3.7,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
    };

var stJohns = {
    minCutomers: 20,
    maxCustomers: 38,
    avgCookie: 2.3,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
    };

var waterfront = {
    minCutomers: 2,
    maxCustomers: 16,
    avgCookie: 4.6,

    custPerHour: function(){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    },
    };

    console.log(pdxAirport.custPerHour());