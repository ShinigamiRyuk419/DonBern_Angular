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
      name : "Drawing",
      description : "Make a portrait of different people",
      assignTo : "Balbuena"
    },
    {//if object put in curly braces
      id:1,
      name : "Note Taking",
      description : "Jot down notes from the discussion",
      assignTo : "Tinapay"
    },
    {//if object put in curly braces
      id:2,
      name : "Sleeping",
      description : "To gain more energy",
      assignTo : "Bernadez"
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
