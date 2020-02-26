import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) {
   }
 
  postAPIData(data:any){

    return this.http.post('http://localhost:3000/write',data);

  }
  
  getConfig(b:any) {
    
   return this.http.get('http://localhost:3000/details/'+b);

 }
   deleteData(name:any){
    return this.http.delete('http://localhost:3000/delete/'+name);

   }
   update(name:any,olddob:any,dob:any){

    return this.http.put('http://localhost:3000/update/'+name+'/'+olddob+'/'+dob,name);

   }
  
}
