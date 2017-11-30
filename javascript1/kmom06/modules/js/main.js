(function () {
    "use strict";

    var myModule = window.module;

    console.log( myModule.addNumbers(4, 5) );
    // console.log( myModule.privateVar );


    console.log( myModule.getRandInt(5, 20) );
    console.log( myModule.getRandFloat(5, 20, 4) );

})();
