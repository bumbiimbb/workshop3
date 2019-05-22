import { Component, OnInit } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  his_id : string;

  constructor(private catActSV : CatActivityService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let his_id = this.his_id = (this.router.snapshot.paramMap.get('his_id'));
    this.subscription=this.catActSV.get(his_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let his_id = this.his_id = (this.router.snapshot.paramMap.get('his_id'));
    let name = form.name;
    let age = form.age;
    let gender = form.gender;
    
    this.catActSV.edit(his_id ,name, age ,gender ).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(his_id  + name + age + gender );
       
  }


  ngOnInit() {
  }

}
