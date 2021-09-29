// const square = function (x) {
//   return x * x;
// };

// console.log(square(3));

// const arrowSquare = (x) => x * x;
// console.log(arrowSquare(2));

// const event = {
//   name: "arrow",
//   printMessage: function () {
//     console.log(`Arrow ${this.name}`);
//   },
// };

// event.printMessage();

//Challenge
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => !task.completed);
  },
};

console.log(tasks.getTasksToDo());
