# Hey! 
Let me introduce test assignment done by myself for Provectus company. 
This README file include all theory and all practice tasks you can find above. I hope you`ll like it! 
Best regards :blush:

## Theory task for test assignment

### Block 1.Common

#### 1. What are primitives? How can developers use them?
Primitives are types of data in JavaScript, which has no methods and not being objects. There are 7 types: `string`, `number`, `undefined`, `null`, `boolean`, `bigint`, `symbol`.

The important thing is that primitives are immutable, unlike objects, arrays or functions. Since JavaScript is a weakly dynamically typed language, it allows variables to change types in any time.

Primitives are not being objects - but they have their own wrapper middleware that allow them to have unique properties.

This feature allows developers to perform various kinds of manipulations with data. By calling primitives property, creates special object that returns a new instance of the primitive. The newly created instance exists only at the moment it is called. Examples of such interactions can be case changes, rounding of numeric values, checking for consistency (`.isInteger()`), etc.

#### 2. What does keyword `this` mean?
Keyword `this` is used in `OOP`. It means determined by the context of the called function.  The context is checking every time the function is called, and it can change accordingly. In the global scope keyword `this` belongs to the global object.

#### 3. What are callbacks?
`Callback` is a function that passed as a parameter to a call another function.
When using callbacks, it is implied that a function can be called by another function in its body. Often this is accompanied by the passing of the result of the first function to the argument of the next one.

#### 4. What is a function declaration and how are its types different?
Functions in JavaScript have two syntaxes for writing a function: `Function Expression` and `Function Declaration`. Speaking about the difference and the choice between them, the first thing to understand is that the JavaScript engine goes through all the code, finds the Function Declarations and creates them. And only after that it starts reading the script. This allows them to be called before they are actually created in code. Function Expression, on the other hand, creates a function only after JavaScript goes through the declaration of the variable to which the function is assigned. Therefore, the call is possible only after its declaration. 

The main feature that requires the use of a `Function Expression` is that `Function Declarations` can only be called in its own or lower levels of `scope`. `Function Expression` by assigning a function to a variable in the parent scope can solve this problem. 

From the above, we can conclude that it is more rational to use Function Declaration to interact directly with functions - however, due to the syntactic features of Function Expression it turns out to be indispensable in some places.

#### 5. Compare spread and rest operators.
`Rest` and `spread` operators have the same syntax - but, they perform exactly the opposite way. 
<br/>The rest operator is used in function arguments when several are selected from the total number - and the rest are written into one extra argument. The spread operator works on the principle of expanding the list of parameters calling a function. When passing an array to a function parameter, the spread operator uses an iterator, iterates over all the elements of the array, and writes each of them to a separate argument.

And, perhaps, this is the main illustration of the features of the functioning of operators, which we need to know. The mechanism of operators is unchanged in the methods of destructuring objects and arrays, shallow copying, changing the immutable properties.


### Block 2: Async
 
#### 1. JavaScript, is it synchronous or not?
JavaScript is a `synchronou` and `single-threaded` language. "Asynchronous moments" can occur only when using side effects (server request, timer, etc.).
<br/>In this case, JS appeals to the event loop and task queue mechanism, through which asynchronous operations are performed on the side (!) of the browser.

#### 2. What is the key principle of Call Stack?
The main principle sounds like `last in - first out`. It can be easily explained from the understanding of JavaScript `single-threading`: the call queue is layered on top of each other like a “layer cake” and executed in turn, from top to bottom.
<br/>`Callback` queues are usually a good example: functions that call each other in turn and pass their return values. The last function in the queue for execution will be the function that is called the very first.

#### 3. What does AJAX mean?
The acronym stands for `Asynchronous JavaScript and XML`. This is what was discussed in the first question of this block. AJAX requests are executed on the browser side, in an asynchronous format. This allows JS not to suffer from waiting for a response from a third-party API and safely run its code.

#### 4. Promise hell. How would you solve it?
There can be several solutions to this problem. It is recommended `to avoid code duplication` and perform various kinds of `refactoring`. Also widespread use of `modularity`. `Large nesting` is avoided.  

ES6 syntax has the ability to use `async / await`, which does an excellent job of solve promise hell problem. 

The `async` assignment makes the function asynchronous and automatically returns a promise. `Await` indicates to wait for the specified operation to complete before proceeding to the next. The `async/await` notation is more concise and easier to read, that allows to solve this problem completely.

#### 5. How would you handle exceptions in JS? List two options.
The first and most common way, due to its simplicity, is the `try/catch` construct. The executable code is wrapped in a try block, and when an error occurs, it is passed to the argument of the following `catch` block, where it is processed according to the function.

Promises for error handling provide a `catch` block that catches all errors that occurred in the promises before it. As in case with `try/catch`, error handling will proceed according to the passed function.

The `Error` object has 3 main properties that handle errors:  `name` - the name of the error, `message` - the text of the issued error and `stack` - the stack of the list that resulted in the error. Handler function mostly interacts with these properties.

#### 6. Which framework would you choose for a new project? Explain why.
I chose the `React` library to study and now I’ll explain why…
* The first is the `component approach`. It is very easy to use and allows you to split the project into small component parts, which affects the ease of interaction during development.
* Secondly is `state management`. Until recently, it was done using third party libraries such as MobX or Redux. However, the React developers introduced `Hooks` technology, which allows managing the state without any side libraries.
* The most famous benefit of using React is of course the `Virtual DOM`. The point is that DOM interaction operations are the most expensive in terms of performance. React solved this problem by introducing the principle of updating a component (rerendering) only when it changes directly. This is exactly what the Virtual DOM has done.
* It is also worth emphasizing that React is not a framework, but a `library`, which provides the developer with more opportunities to interact with other technologies. Importantly, Typescript interacts well with React and almost being a must-have for learning the library.

### Block 3: TypeScript

#### 1. Is it possible to check types in runtime? If so, how?
By itself, Typescript does not have runtime type checking. This operation is possible when using third-party libraries that will act as validators. The most common are: `io-ts`, `class-validator`, `joi`.

#### 2. What is the difference between private and protected fields?
The `private` accessor indicates that a method or property is accessible only within the parent class.

The `protected` accessor is very similar to the private accessor - however, the difference is that inherited classes have access to properties or methods, but (!) instances of these classes - don’t.

#### 3. How do interfaces help in development?
The interfaces have some distinctive features, which helps to develop.

* Availability of `optional fields` in inherited objects.
* It is possible to specify access modifiers (`accessors`): `public` *default*, `private`, `protected`, `readonly`.
* When objects inherit an interface, automatically launched a check for an `unnecessary property` that is not specified in it.
* If within of the task we do not have knowledge about possible additional properties or methods of the object, then we can use the addition of a `string index`.
* When applying an interface to classes, its role is to specify the minimum (!) of required elements. In this case, if there are unaccounted fields, no exception will be thrown and the class will remain valid.
* Several interfaces can be applied to a class at once.
* The most significant feature of using interfaces is the ability `to extend them with other interfaces`.

#### 4. How would you pass arguments into a Class?
Arguments are passed in the same way as in native JavaScript, via the `constructor`. Features can arise when elements have accessors, when the use of class methods may be required for interaction.
