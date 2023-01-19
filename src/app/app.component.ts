import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular specialization';
  isAddTask = false;

  //directive lessons
  taskList: Task[]= [
    {//if object put in curly braces
      id:0,
      name : "Doning",
      description : "Junnalyn",
      assignTo : "Filipino"
    },
    {//if object put in curly braces
      id:1,
      name : "Ryuk",
      description : "Shinigami",
      assignTo : "25"
    },
    {//if object put in curly braces
      id:2,
      name : "Bernadez",
      description : "Jo-ann",
      assignTo : "Animator"
    }
  ]

  addTask(task: Task){
    // console.log(student);
    this.taskList.push(task);
    this.isAddTask = false;
  }

  addNewTask(){
    this.isAddTask = true;
  }
}
