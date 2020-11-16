var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* Type guards */
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("fly");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("swim");
    };
    return Fish;
}());
// Use type guard to choose the correct pet's method: pet.(swim | fly)
function action(pet) {
    if (pet instanceof Bird) {
        return pet.fly();
    }
    else if (pet instanceof Fish) {
        return pet.swim();
    }
}
// Create a CompanyEmployee class that implements ReadonlyEmployee interface
var CompanyEmployee = /** @class */ (function () {
    function CompanyEmployee(name, level, age, skills) {
        this.name = name;
        this.level = level;
        this.age = age;
        this.skills = skills;
    }
    return CompanyEmployee;
}());
var oldEmployee = new CompanyEmployee('Ivan', 'Junior', 33, 'skate');
// Update this employee and make his level "Senior".
// Get a `newEmployee` object with all fields from `oldEmployee`, but with `.level` set to 'Senior'?
var newEmployee = __assign({}, oldEmployee);
newEmployee.level = 'Senior';
console.log(oldEmployee);
console.log(newEmployee);
