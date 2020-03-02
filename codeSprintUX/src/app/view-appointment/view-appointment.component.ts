import { Component, OnInit } from '@angular/core';
import { Emp } from '../model/emp';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  emps:Emp[];
  errMsg:string;
  
  constructor(private empService :EmpService) { }

  ngOnInit() {
    this.loadData();
  }
    loadData(){
      this.emps=null;
      this.errMsg=null;
  
      this.empService.getAll().subscribe(
        (data) =>{ this.emps=data; },
        (err) => {this.errMsg="Sorry Server not reachable!";}
      );

    }

}
