import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-questions',
  templateUrl: './trending-questions.component.html',
  styleUrls: ['./trending-questions.component.css']
})
export class TrendingQuestionsComponent implements OnInit {
  count : number =0;
  downcount : number=0;
  constructor() { }
 ​
  ngOnInit() {
    }
 countFunc(){
  this.count = this.count+1;
  console.log(this.count);
 }
 countFunction(){
  this.downcount =this.downcount+1;
 }
}
