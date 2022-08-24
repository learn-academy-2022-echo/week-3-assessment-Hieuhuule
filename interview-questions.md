# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the coding language used by React. It's very similar to Javascript syntax with a few exceptions such as reserved class names. 

Researched answer: JSX stands for Javascript XML. It allows you to write HTML in Javascript by converting HTML tags into React elements declaratively instead of imperatively, without the need for methods like createElement(). An example of how JSX is written declaratively vs imperatively is as follows:

DECLARATIVE JSX: const myElement = <h1>This is JSX!</h1>
IMPERATIVE: ReactDOM.render(myElement, document.getElementByID('root'))

ref: https://medium.com/@sjarancio/what-is-jsx-e3dda0af3490

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: yarn stands for "yet another resource navigator", it's a package manager that is used to install packages and libraries on your local machine, as well as executing scripts to run code.

Researched answer: yarn is a package manager for code, allowing you to share code with other developers quickly, securely, and reliably. Code is shared through something called a module or package. It was developed in 2016 by Facebook for the Node.js JavaScript runtime environment to solve consistency, security, and performance problems with large codebases.

ref: https://classic.yarnpkg.com/lang/en/docs/getting-started/
        https://en.wikipedia.org/wiki/Yarn_(package_manager) 

Note to Charlean: it's not plagiarism if you include references :) 

3. What is an anonymous function in JavaScript?

Your answer: I actually don't know much about this, I know it's an unnamed arrow function that you can pass as an argument when doing a component call.

Researched answer: Anonymous functions are functions that are not named and executed once the interpreter reads it. Thusly, it can't be called again by other parts of the script unless it's assigned it a variable.


ref: JavaScript & JQuery interacive front-end web development by Jon Duckett

4. What is the difference between a class and an object?

Your answer: A class is a blueprint for an object, it has parameters that can be filled into easily create and replicate other instances of said object. An Object is a data structure that holds key value pairs in no specific order or arrangement, whereas an array stores data at indexes.

Researched answer: A class is a template that defines object properties and behavior. An object is a member or "instance of a class", containing a state which has values you define or that are defined by default

ref: https://www.ncl.ucar.edu/Document/HLUs/User_Guide/classes/classoview.shtml#:~:text=A%20class%20defines%20object%20properties,are%20defined%20by%20default%20settings.

5. What is the difference between state and props in React?

Your answer: state exists in the file that it is created and it's data cannot explicitly move between files, however, props can move data between parent and child components. Props is an object with no explicit values unless assigned them.

Researched answer: props can pass data between components whereas state cannot be passed between components.

ref: https://www.javatpoint.com/react-state-vs-props

6. STRETCH: Which is the difference between a div and a span?

Your answer: I don't know, I haven't used span very much at all.

Researched answer: divs are containers that can exist on multiple lines whereas spans are containers that exist in-line.

DIV: <div id=“paragraphs”>
    <p>This is my first paragraph.</p>
    <p>This is my second paragraph.</p>
    <p>This is my final paragraph.</p>    
    </div>

SPAN: <p>This is a paragraph with <span id=“special-text”>a little something extra</span> inside it.</p>

ref: https://blog.hubspot.com/website/span-vs-div#:~:text=div%20in%20HTML,for%20inline%20organization%20and%20styling.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming (OOP) is a type of programming based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). OOP is all about being able to structure code so that its functionality can be shared throughout the application. This is opposed to procedural programming (PP), in which you build programs in sequential order and call methods when you want shared behavior between pages in the application. 

ref: Flatiron School, Introduction to Object Orientation in Ruby

2. Ruby: Ruby is a powerful object-oriented language used by popular applications. Ruby was built to be easy for you to read and understand. Ruby was built to help you tell stories that computers and human beings can both enjoy, and so instead of weird symbols or words like "static" and "void", you programs that look almost like English, with words like "unless", "rescue", "self", and even "begin" and "end"

ref: Ruby Wizardry from No Starch Press

3. Implicit return: Every method in Ruby returns a value by default. This returned value will be the value of the last statement.

ref: Flatiron School

4. Ruby blocks: A block is a bit of code enclosed in do/end keywords or curly brackets ({}). We call a method with a block by simply appending the block at the end of the method call.

ref: Flatiron School, Yield and Blocks

5. Ruby hashes: A data structure that holds key/value pairs

