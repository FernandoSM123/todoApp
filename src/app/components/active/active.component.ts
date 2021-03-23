import { Component, OnInit } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent extends MainContainerComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    var dataInLocalStorage = localStorage.getItem("Tasks");

    if (dataInLocalStorage !== null) {
    this.Tasks = JSON.parse(dataInLocalStorage);
    }
  }

  getDetails(){
    var input:HTMLInputElement=(<HTMLInputElement>document.getElementById("details"));
    var details:string=input.value;
    if(details!=""){
      input.value="";
      var task:Task=new Task(details,false);
      this.Tasks.push(task);
      localStorage.setItem("Tasks", JSON.stringify(this.Tasks));
    }
    else{
      alert("ERROR:Ingrese los datos de la tarea");
    }
  }

  changeState(index){
    var state:boolean = this.Tasks[index].completed;
    this.Tasks[index].completed = !state;
    localStorage.setItem("Tasks", JSON.stringify(this.Tasks));
  }

}
