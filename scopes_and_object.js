// TODO: Create a global variable called globalCount
let globalCount = 0;
console.log("Initial globalCount:", globalCount); 

// TODO: Create a function that demonstrates local scope
function localScopeExample() {
    // This variable is only accessible within this function
    let localCount = 0; 
    localCount++;
    console.log("Inside localScopeExample - localCount:", localCount); 
}

// Call the function to see the local scope in action
localScopeExample();

// Trying to access localCount here would result a ReferenceError
// console.log(localCount); // Error localCount is undefined

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
    globalCount++;
    
    // We cannot modify the 'localCount' variable from localScopeExample 
    // because it is out of scope. 
    // However, we can create a NEW variable with the same name, which "shadows" it.
    let localCount = 100; 
    
    console.log("Inside modifyVariables - globalCount:", globalCount);
    console.log("Inside modifyVariables - localCount:", localCount);
}

modifyVariables();

// TODO: Create a Student constructor function
function Student(name, studentId, gradeLevel) {
    this.name = name;
    this.studentId = studentId;
    this.gradeLevel = gradeLevel;
    
    // Method to introduce the student
    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, ID: ${this.studentId}, in grade ${this.gradeLevel}.`);
    };
}

// TODO: Create several student instances
const student1 = new Student("Liyema", 101, "10th");
const student2 = new Student("Avela", 102, "11th");
const student3 = new Student("Ongeziwe", 103, "12th");

student1.introduce();
student2.introduce();
student3.introduce();

// TODO: Create an object  literal with nested properties
const schoolInfo = {
    schoolName: "ID Mkhize BCM High School",
    address: {
        street: "Ny 50 Gugulethu Street",
        city: "Cape town",
        zipCode: "7750"
    },
    departments: {
        "Economics and Management science": {
            head: "Miss. Kewana",
            room: 28
        },
        languages: {
            head: "Mr. S Dyasi",
            room: 34
        }
    }
};

console.log("School Object:", schoolInfo);