const testData = [
  {
    examname: "Developer Test",
    section: [
      {
        sectionname: "ReactJS",
        id: 0,
        sectionquestion: [
          {
            quesnum: "1",
            id: 1,
            question: "What is React?",
            options: [
              "A programming language",
              "A front-end JavaScript library",
              "A back-end framework",
              "A database management system",
            ],
          },
          {
            quesnum: "2",
            id: 2,
            question: "Which company developed React?",
            options: ["Facebook", "Google", "Microsoft", "Apple"],
          },
          {
            quesnum: "3",
            id: 3,
            question: "What is JSX in React?",
            options: [
              "A data fetching library",
              "A styling framework",
              "A syntax extension for JavaScript",
              "A state management tool",
            ],
          },
          {
            quesnum: "4",
            id: 4,
            question: "What is the virtual DOM in React?",
            options: [
              "A tool for handling HTTP requests",
              "A technique for optimizing database queries",
              "A lightweight version of the Document Object Model",
              "A components internal state",
            ],
          },
          {
            quesnum: "5",
            id: 5,
            question: 'What is the purpose of the "render" method in React?',
            options: [
              "To update the components state",
              "To handle user interactions and events",
              "To render JSX and HTML markup to the DOM",
              "To define the components lifecycle methods",
            ],
          },
          {
            quesnum: "6",
            id: 6,
            question: "What is React Router used for?",
            options: [
              "Managing state in React applications",
              "Styling React components",
              "Handling routing and navigation in React applications",
              "Unit testing React components",
            ],
          },
          {
            quesnum: "7",
            id: 7,
            question: "How does React handle component communication?",
            options: [
              "By using callbacks",
              "By passing props from parent to child components",
              "By using Redux for state management",
              "By directly modifying the components state",
            ],
          },
          {
            quesnum: "8",
            id: 8,
            question: "What is the significance of keys in React lists?",
            options: [
              "They uniquely identify elements in an array",
              "They determine the order of elements in a list",
              "They control the visibility of list items",
              "They enable the use of CSS transitions",
            ],
          },
          {
            quesnum: "9",
            id: 9,
            question: 'What is the purpose of the "useState" hook in React?',
            options: [
              "To handle asynchronous operations",
              "To manage component lifecycle methods",
              "To manage and update component state",
              "To create reusable custom hooks",
            ],
          },
          {
            quesnum: "10",
            id: 10,
            question: 'What is the purpose of the "useEffect" hook in React?',
            options: [
              "To handle user input and form submission",
              "To fetch data from an API",
              "To create reusable UI components",
              "To perform side effects and manage component lifecycle",
            ],
          },
        ],
      },
      {
        sectionname: "JavaScript",
        id: 1,
        sectionquestion: [
          {
            quesnum: "11",
            id: 11,
            question:
              "What is the correct way to include an external JavaScript file in an HTML document?",
            options: [
              "<script src=''script.js''></script>",
              "<javascript src=''script.js''></javascript>",
              "<script href=''script.js''></script>",
              "<link href=''script.js'' rel=''stylesheet>''",
            ],
          },
          {
            quesnum: "12",
            id: 12,
            question:
              "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "int", "string", "declare"],
          },
          {
            quesnum: "13",
            id: 13,
            question:
              "What will the following code output? console.log(2 + '2');",
            options: ["22", "4", "''22''", "NaN"],
          },
          {
            quesnum: "14",
            id: 14,
            question:
              "Which function is used to remove the last element from an array in JavaScript?",
            options: ["pop()", "push()", "shift()", "unshift()"],
          },
          {
            quesnum: "15",
            id: 15,
            question: "What is the correct syntax for a JavaScript for loop?",
            options: [
              "for (var i = 0; i < 5; i++)",
              "for (i = 0; i < 5; i++)",
              "for (var i = 0; i < 5)",
              "for (var i < 5; i++)",
            ],
          },

          {
            quesnum: "16",
            id: 16,
            question:
              "What is the output of the following code? console.log(typeof null);",
            options: ['"null"', '"undefined"', '"object"', '"string"'],
          },
          {
            quesnum: "17",
            id: 17,
            question:
              "Which function is used to convert a string to an integer in JavaScript?",
            options: [
              "parseInt()",
              "parseFloat()",
              "toString()",
              "toInteger()",
            ],
          },
          {
            quesnum: "18",
            id: 18,
            question: "How can you add a comment in JavaScript?",
            options: [
              "<!--This is a comment-->",
              "/* This is a comment */",
              "// This is a comment",
              "This is a comment",
            ],
          },
          {
            quesnum: "19",
            id: 19,
            question: "What does the isNaN() function do?",
            options: [
              "Checks if a value is not a number",
              "Converts a value to a number",
              "Checks if a value is null",
              "Checks if a value is undefined",
            ],
          },
          {
            quesnum: "20",
            id: 20,
            question:
              "What does the length property return for a string in JavaScript?",
            options: [
              "The number of characters in the string",
              "The first character of the string",
              "The last character of the string",
              "The index of the last character in the string",
            ],
          },
        ],
      },
      {
        sectionname: "NodeJS",
        id: 2,
        sectionquestion: [
          {
            quesnum: "21",
            id: 21,
            question: "What is Node.js?",
            options: [
              "A web browser",
              "A JavaScript framework",
              "A runtime environment for executing JavaScript on the server-side",
              "A database management system",
            ],
          },
          {
            quesnum: "22",
            id: 22,
            question: "Which programming language is Node.js based on?",
            options: ["Java", "C++", "Python", "JavaScript"],
          },
          {
            quesnum: "23",
            id: 23,
            question: "How can you include external modules in Node.js?",
            options: ["require()", "import()", "include()", "Amodule()"],
          },
          {
            quesnum: "24",
            id: 24,
            question: "What is npm?",
            options: [
              "Node Package Manager",
              "Node Project Manager",
              "Node Programming Module",
              "Node Package Module",
            ],
          },
          {
            quesnum: "25",
            id: 25,
            question:
              "Which command is used to initialize a new Node.js project with npm??",
            options: ["npm start", "npm init", "npm install", "npm create"],
          },
          {
            quesnum: "26",
            id: 26,
            question: "What is the entry point file in a Node.js application?",
            options: ["index.js", "app.js", "main.js", "server.js"],
          },
          {
            quesnum: "27",
            id: 27,
            question:
              "Which of the following modules is used to create a web server in Node.js?",
            options: ["http", "fs", "path", "os"],
          },
          {
            quesnum: "28",
            id: 28,
            question: "How can you handle asynchronous operations in Node.js?",
            options: [
              "Callbacks",
              "Promises",
              "Async/await",
              "All of the above",
            ],
          },
          {
            quesnum: "29",
            id: 29,
            question: 'What is the purpose of the "fs" module in Node.js',
            options: [
              "To handle file system operations",
              "To create and manage databases",
              "To make HTTP requests",
              "To handle network communication",
            ],
          },
          {
            quesnum: "30",
            id: 30,
            question: 'What is the role of the "path" module in Node.js?',
            options: [
              "To resolve and manipulate file paths",
              "To manage environment variables",
              "To handle HTTP requests and responses",
              "To parse JSON data",
            ],
          },
        ],
      },
    ],
  },

  // Add more questions here
];
export default testData;
