import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from '../model/emp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  baseUrl:string;
  constructor(private httpClient:HttpClient
    ) {
    this.baseUrl = "http://localhost:4449/appointment";
   }

   getAll() : Observable<Emp[]>{
     return this.httpClient.get<Emp[]>(this.baseUrl)
   }

   getAllById(empId:number) : Observable<Emp>{
      return this.httpClient.get<Emp>(`${this.baseUrl}/${empId}`);
   }

   add(emp:Emp) :Observable<Emp>{
     return this.httpClient.post<Emp>(this.baseUrl,emp);
   }

   save(emp:Emp) :Observable<Emp>{
    return this.httpClient.put<Emp>(this.baseUrl,emp);
  }

    delete(empId:number) :Observable<void>{
        return this.httpClient.delete<void>(`${this.baseUrl}/${empId}`);
    }
}
