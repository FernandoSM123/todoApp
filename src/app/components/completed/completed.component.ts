import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent extends MainContainerComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    var dataInLocalStorage = localStorage.getItem("Tasks");

    if (dataInLocalStorage !== null) {
    this.Tasks = JSON.parse(dataInLocalStorage);
    }
  }

  changeState(index){
    var state:boolean = this.Tasks[index].completed;
    this.Tasks[index].completed = !state;
    localStorage.setItem("Tasks", JSON.stringify(this.Tasks));
  }

  delete(index){
  this.Tasks.splice(index,1);
  localStorage.setItem("Tasks", JSON.stringify(this.Tasks));
  }

  deleteAll(){
    this.Tasks= new Array();
    localStorage.removeItem("Tasks");
  }

}
