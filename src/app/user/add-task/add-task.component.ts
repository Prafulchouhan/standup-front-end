import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  standup : any ={
    name: "test",
    question1: "q-1",
    question2: "q-2",
    question3: "q-3",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
