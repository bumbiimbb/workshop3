import { Component } from '@angular/core';
import { CatActivityService } from '../services/cat-activity.service';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { insertView } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
constructor(private catActSV: CatActivityService, private route:Router) {
  this.showData();
}
  showData(){
      this.subscription = this.catActSV.getCatAtivity()
      .subscribe( data =>
        {
         
          //console.log("status:ใช้งาน"+ ['rs'].length);
          this.dataList=data['rs'];
         
        }

      );
      
  }
  adddata(){
    this.route.navigateByUrl("add");
    
  }
  
  deletedata(pro_id){
    this.catActSV.del(pro_id).subscribe();
    console.log(pro_id);
  }
  
  editdata(pro_id){
    this.route.navigate(['./edit',{pro_id : pro_id}]);
    console.log(pro_id);
  }
}
