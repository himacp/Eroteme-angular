import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit 
{

  public count1 : number = 0; 
  public count2 : number= 0; 
  public count3 : number= 0; 
  public count4 : number= 0; 
  public count5: number=0;
  public count6: number=0;
  public count7: number=0;
  public count8: number=0;
  public count9: number=0;
  public count: number=0;

  public time = "18/02/2018";
  checked = false;
  checked1 = false;

  
  constructor() { }
  
  upvote1(){
    if(this.count2==0 && this.count1==0)
    {
      this.count1 = 1;
    }
    else{
      this.count1 =0;
    }
    
  }
  downvote1(){
    if (this.count1==0 && this.count2==0){
      this.count2 = 1;
    }
    else{
      this.count2 = 0;
    }
      
  }
  upvote2(){
    if(this.count4==0 && this.count3==0)
    {
      this.count3 = 1;
    }
    else{
      this.count3 =0;
    }
  }
  downvote2(){
    if (this.count3==0 && this.count4==0){
      this.count4 = 1;
    }
    else{
      this.count4 = 0;
    }
  }

  upvote3(){
    if(this.count6==0 && this.count5==0)
    {
      this.count5 = 1;
    }
    else{
      this.count5 =0;
    }
  }
    downvote3(){
      if (this.count5==0 && this.count6==0){
        this.count6 = 1;
      }
      else{
        this.count6 = 0;
      }
    }
    upvote4(){
      if(this.count8==0 && this.count7==0)
      {
        this.count7 = 1;
      }
      else{
        this.count7 =0;
      }
    }
    downvote4(){
      if (this.count7==0 && this.count8==0){
        this.count8 = 1;
      }
      else{
        this.count8 = 0;
      }
    }
    upvote5(){
      if(this.count==0 && this.count9==0)
      {
        this.count9 = 1;
      }
      else{
        this.count9 =0;
      }
    }
    downvote5(){
      if (this.count9==0 && this.count==0){
        this.count = 1;
      }
      else{
        this.count = 0;
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


