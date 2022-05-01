import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loading:boolean=false;
  loadingText:string="";
  load(){
    this.loading=true;
    this.loadingText=undefined;
  }

  loadFor(text:string){
    this.loading=true;
    this.loadingText=text;
  }

  resume(){
    this.loading=false;
    this.loadingText=undefined;
  }

}
