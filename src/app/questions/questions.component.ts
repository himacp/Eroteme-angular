import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit 
{

  public count2 : number = 0; 
  public count3 : number= 0; 
  public count4 : number= 0; 
  public count5 : number= 0; 
  public time = "12/09/2018";
  checked = false;
  checked1 = false;
  constructor() { }
  
  upvote1(){
    if(this.count3==0 && this.count2==0)
    {
      this.count2 = 1;
    }
    else{
      this.count2 =0;
    }
    
  }
  downvote1(){
    if (this.count2==0 && this.count3==0){
      this.count3 = 1;
    }
    else{
      this.count3 = 0;
    }
      
  }
  upvote2(){
    if(this.count5==0 && this.count4==0)
    {
      this.count4 = 1;
    }
    else{
      this.count4 =0;
    }
  }
  downvote2(){
    if (this.count4==0 && this.count5==0){
      this.count5 = 1;
    }
    else{
      this.count5 = 0;
    }
  }
  ngOnInit() {
  }

  heroes = []
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  heroes1 = []
  addHero1(newHero1: string) {
    if (newHero1) {
      this.heroes1.push(newHero1);
    }
  }
  InnerData=[]
  reply(newdata: string) {
    if (newdata) {
      this.InnerData.push(newdata);
    }
  }   
  InnerData1=[]
  reply1(newdata: string) {
    if (newdata) {
      this.InnerData1.push(newdata);
    }
  }   
}


