import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CatActivityService} from '../services/cat-activity.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private catActSV : CatActivityService ,private route:Router) { }
 
  ngOnInit() {
  }
  insert(form) {
    let his_id = form.his_id;
    let name = form.name;
    let age = form.age;
    let gender = form.gender;
   
    
    this.catActSV.insert(his_id, name,age,gender).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

}
