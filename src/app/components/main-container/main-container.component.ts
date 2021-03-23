import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  public Tasks:Task[];

  constructor() { 
    this.Tasks= new Array();
  }

  public getTask(){
    return this.Tasks;
  }

  ngOnInit(): void {
  }

}
