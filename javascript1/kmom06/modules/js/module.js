window.module = (function() {

    var privateVar = 5;

    var module = {

        "addNumbers": function(a, b) {
            return a + b;
        },

        "getRandInt": function(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },

        "getRandFloat": function(min, max, dec) {
            return parseFloat(Math.random() * (max - min) + min).toFixed(dec);
        }
    };

    return module;
})();
