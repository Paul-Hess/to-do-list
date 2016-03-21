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
    var typeArray = [];
    var hobbyArray: Task[] = [];
    var workArray: Task[] = [];
    var homeArray: Task[] = [];
    for (var task of tasks) {
      if (task instanceof HobbyTask) {
        hobbyArray.push(task);
      } else if (task instanceof WorkTask) {
        workArray.push(task);
      } else if (task instanceof HomeTask) {
        homeArray.push(task);
      }
    }
    typeArray.push(hobbyArray, workArray, homeArray);
    return typeArray;
  }

  export var listPriorities = function(tasks: Task[], priority: string): String[] {
    var priorityArray: String[] = [];
    for (var task of tasks) {
      if (task.priority === priority) {
        priorityArray.push(task.description);
      }
    }
    return priorityArray;
  }

  export var nextPriority = function(assignee: IPerson, tasks: Task[]): string {
    var assignedTasks: Task[] = [];
    for( var task of tasks) {
      if ((task.assignedTo === assignee) && (task.priority === "High")) {
        assignedTasks.push(task);
      }
    }
    return assignedTasks[0].description;
  }
}
