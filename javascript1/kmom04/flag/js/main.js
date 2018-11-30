(function () {
    "use strict";

    var arr1 = ["Kenneth", "Andreas", "Emil"];
    // arr1.unshift("Mikael");

    // arr1.forEach(function(value) {
    //     console.log(value);
    // });

    //
    // var myObj = {
    //     x: 42,
    //     getX: function() {
    //         console.log(this.x);
    //     }
    // }
    //
    // var test = myObj.getX.bind(myObj);
    //
    // test();

    function Person(name, friends) {
        this.name = name;
        this.friends = friends;
    }

    Person.prototype.friendsList = function() {

        var message = this.friends.map(function(value) {
            return this.name + " is friends with " + value;
        }.bind(this));
        return message;
    }

    var me = new Person("Kenneth", ["Emil", "Andreas", "Mikael"]);

    console.log(me.friendsList());

    // console.log(arr1[1]);
    // console.log(arr1.length);
    // console.log(arr1[arr1.length - 1]);
    //
    //
    //
    // var arr2 = arr1.slice();
    //
    // arr1[0] = "Mikael";
    //
    // console.log(arr1);
    // console.log(arr2);

    // var arr3 = new Array(3);
    // arr3[100] = "test";
    // console.log(arr3);

    // var arr1 = [1, 5, 6, 7];
    // var result = arr1.reduce(function(total, val) {
    //     total += val;
    //     return total;
    // });
    //
    // console.log(result);



})();
