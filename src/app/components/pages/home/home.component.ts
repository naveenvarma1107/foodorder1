import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/model/food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Foods:food[]=[];
  constructor(private api:FoodService, activateroute:ActivatedRoute){
    activateroute.params.subscribe((params)=>{
      if(params.searchterm)
      this.Foods=this.api.getAllfoodbysearchterm(params.searchterm)
      else
      this.Foods=api.getAll()
    })
  }


  ngOnInit(){}
  }


