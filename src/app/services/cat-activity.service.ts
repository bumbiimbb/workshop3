import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatActivityService {

apiUrl:string="http://127.0.0.1/bbm/process/crud_cateactivity.php";

  constructor(public http: HttpClient) { }


  getCatAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(his_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'his_id' : his_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( his_id: string, name: string ,age: string,gender: string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'his_id': his_id,
      'name': name,
      'age': age,
      'gender': gender
    
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( his_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'his_id' : his_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( his_id: any , name: string, age:string,gender: string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'his_id' : his_id ,
      'name': name,
      'age': age,
      'gender': gender
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

}
