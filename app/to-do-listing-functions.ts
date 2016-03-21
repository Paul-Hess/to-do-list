/// <reference path="to-do-classes-interfaces.ts" />


module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var listAllTasksOfType = function (tasks: Task[]) : Task[] {
    var typeTask: Task[] = [];
    for (var task of tasks) {
      console.log(task);
      if (task instanceof HobbyTask) {
        typeTask.push(task);
      } else {
        console.log("didnt work");
      }
    }
    console.log(typeTask);
    return typeTask;
  }
}
