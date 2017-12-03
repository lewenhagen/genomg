var module = (function() {

    var privateVar = 5;

    return {

        "addNumbers": function(a, b) {
            return a + b;
        },

        "getRandInt": function(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },

        "getRandFloat": function(min, max, dec) {
            return parseFloat(Math.random() * (max - min) + min).toFixed(dec);
        },

        "test": function() {
            privateVar++;
            return privateVar;
        }
    };

    // return module;
})();
