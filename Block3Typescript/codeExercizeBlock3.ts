/* Type guards */
class Bird {
    fly() {
      console.log("fly");
    }
  }
  
  class Fish {
    swim() {
      console.log("swim");
    }
  }
  
  type Pet = Bird | Fish;
  
  // Use type guard to choose the correct pet's method: pet.(swim | fly)
  function action(pet: Pet): void {
    if (pet instanceof Bird) {
      return pet.fly();
    } else if (pet instanceof Fish) {
      return pet.swim();
    }
  }
  
  /* Interface */
  // Fill in the types for Employee interface
  // * `level` field must have one the following values: 'Junior' || 'Middle' || 'Senior';
  type Level = "Junior" | "Middle" | "Senior";
  interface Employee {
    name: string;
    level: Level;
    age: number;
    skills: string;
  }
  // Create a type with fields from above being all read-only
  type ReadonlyEmployee = Readonly<Employee>;
  // Create a CompanyEmployee class that implements ReadonlyEmployee interface
  class CompanyEmployee implements ReadonlyEmployee {
    constructor(
      readonly name: string,
      readonly level: Level,
      readonly age: number,
      readonly skills: string) {}
  }
  const oldEmployee = new CompanyEmployee('Ivan', 'Junior', 33, 'skate');
  
  // Update this employee and make his level "Senior".
  // Get a `newEmployee` object with all fields from `oldEmployee`, but with `.level` set to 'Senior'?
  const newEmployee = {...oldEmployee};
  newEmployee.level = 'Senior'  