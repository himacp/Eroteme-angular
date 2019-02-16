import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rout:Router) {
    window.onload = function () {
      document.getElementById("ques").click();
  };
   }

  ngOnInit() {
  }
some(){
    this.rout.navigate(['trending']);

  }

}
