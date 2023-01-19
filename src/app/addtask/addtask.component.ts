import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  ngOnInit(){
    this.taskForm.reset();
  }

@Output() taskOut = new EventEmitter();

taskForm = new FormGroup({
  name: new FormControl(''),
  description: new FormControl(''),
  assignTo: new FormControl('')
})

addTask(){
  this.taskOut.emit(this.taskForm.value)
}

}
