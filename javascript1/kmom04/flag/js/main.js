(function () {
    "use strict";

    var content = document.getElementById("content");

    var animal = {
        "species": "",
        "sound": "",
        "color": "",
        "init": function(species, sound, color) {
            this.species = species;
            this.sound = sound;
            this.color = color;
        },
        print: function() {
            return "The " + this.color + " " + this.species + " says " + this.sound;
        },
        1: "lala",
    };
    // function superclass(name) {
    //     this.name = name;
    //     this.print = function() {
    //         console.log(this.name);
    //     }
    // }
    // var test = new superclass("kalle");
    // test.print();
    // var Cow = Object.create(animal);
    //
    // Cow.species = "cow";
    // Cow.sound = "moo";
    // Cow.color = "brown";
    //
    // var Mouse = Object.create(animal);
    //
    // Mouse.species = "mouse";
    // Mouse.sound = "piip";
    // Mouse.color = "gray";
    //
    // content.innerHTML = Cow.print();
    // content.innerHTML += "<br>" + Mouse.print();

    // var Cow = Object.create(animal);
    // Cow.init("cow", "moo", "brown");
    // delete Cow.sound;
    //
    //
    // var Mouse = Object.create(animal);
    // Mouse.init("mouse", "piip", "gray");
    //
    // content.innerHTML = Cow.print();
    // content.innerHTML += "<br>" + Mouse.print();

    // var person = {};
    //
    // person["name"] = "Kalle";
    // person.age = 25;
    //
    // console.log(person.name);
    // console.log(person["age"]);
    //
    // person.present = function(){
    //     return this.name + " is " + this.age + " years old.";
    // };
    //
    // console.log(person["present"]());
    // console.log(person.present());

    // var person = {
    //     "name": "",
    //     "age": 0,
    //     "init": function(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     },
    //     "present": function() {
    //         return this.name + " is " + this.age + " years old.";
    //     }
    // };
    //
    // var car = {
    //     "model": "",
    //     "color": "",
    //     "owner": {},
    //     "init": function(model, color, owner) {
    //         this.model = model;
    //         this.color = color;
    //         this.owner = owner;
    //     },
    //     "present": function() {
    //         return "The " + this.color + " " + this.model + " is owned by: " + this.owner.name;
    //     }
    // };
    //
    // var kalle = Object.create(person);
    // kalle.init("Kalle", 25);
    //
    // console.log(kalle.present());
    //
    // var lisa = Object.create(person);
    // lisa.init("Lisa", 28);
    // console.log(lisa.present());
    //
    // var volvo = Object.create(car);
    // volvo.init("Volvo", "blue", kalle);
    //
    // console.log(volvo.present());
    function Bag() {
        var items = [];
        this.addItem = function(item) {
            items.push(item);
        };
        this.look = function() {
            return items.toString();
        }
    }

    function Person(name, age, bag) {
        this.bag = bag;
        this.name = name;
        this.age = age;
        this.present = function() {
            return this.name + " is " + this.age + " years old.";
        };
        this.look = function() {
            return this.bag.look();
        }
    }
    var bag1 = new Bag();
    var bag2 = new Bag();

    console.log(bag.items);

    var kalle = new person("Kalle", 25, bag1);
    var lisa = new person("Lisa", 28, bag2);

    kalle.bag.addItem("Kaffekopp");
    kalle.bag.addItem("Tallrik");
    kalle.bag.addItem("Gaffel");

    lisa.bag.addItem("gris");
    lisa.bag.addItem("katt");
    lisa.bag.addItem("häst");

    console.log(kalle.look());
    console.log(lisa.look());
    console.log();


    // console.log(lisa.present());


    // var flag = {
    //     html: "",
    //     name: "",
    //     init: function (flag) {
    //         this.name = flag;
    //         this.html = "<div class='" + flag + "'><div class='part1'></div><div class='part2'></div></div>";
    //     },
    //     draw: function () {
    //         return this.html;
    //     }
    // };
    //
    // var sweden = Object.create(flag);
    // sweden.init("sweden");
    // var benin = Object.create(flag);
    // benin.init("benin");
    // var colombia = Object.create(flag);
    // colombia.init("colombia");
    // var finland = Object.create(flag);
    // finland.init("finland");
    //
    // var allFlags = [sweden, benin, colombia, finland];
    //
    // for (var i = 0; i < allFlags.length; i++) {
    //     var flagElement = document.createElement("div");
    //     flagElement.className = "flag";
    //     flagElement.innerHTML = allFlags[i].draw();
    //
    //     flagElement.addEventListener("click", function() {
    //         this.style.display = "none";
    //     });
    //
    //     content.appendChild(flagElement);
    // }

    // console.log("Sandbox ready.");
})();
