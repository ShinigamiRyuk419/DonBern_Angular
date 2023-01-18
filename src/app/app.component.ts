import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular specialization';
  isAddStudent = false;

  //directive lessons
  studentsList: Student[]= [
    {//if object put in curly braces
      id:0,
      lastName : "Doning",
      firstName : "Junnalyn",
      age : 24,
      nationality : "Filipino",
      occup: "Software Engineer",
      gender: "Female",
      homeAddress: "Pinamungajan, Cebu",
      status : "Single",
      elemSchool: "Mipangi Elementary School",
      highSchool: "Pinamungajan National Highschool",
      college: "University of San Carlos"
    },
    {//if object put in curly braces
      id:1,
      lastName : "Ryuk",
      firstName : "Shinigami",
      age : 25,
      nationality : "Japanese",
      gender: "Male",
      homeAddress: "Cebu",
      status : "Married",
      elemSchool: "Hell Elementary School",
      highSchool: "Hell National Highschool",
    },
    {//if object put in curly braces
      id:2,
      lastName : "Bernadez",
      firstName : "Jo-ann",
      age : 22,
      nationality : "Japanese",
      occup : "Animator",
      gender: "Female",
      homeAddress: "Japan",
      status : "Single",
      elemSchool: "Kinablangan Elementary school",
      highSchool: "Sisters of Mary School-Girlstown,Inc.",
      college: "University of St. Thomas"
    }
  ]

  addStudent(student: Student){
    // console.log(student);
    this.studentsList.push(student);
    this.isAddStudent = false;
  }

  addNewStudent(){
    this.isAddStudent = true;
  }
}
