import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CURDSERService } from 'src/app/services/curdser.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  newData:any = []
  constructor(private route:Router,private ser:CURDSERService) { }

  ngOnInit(): void {


    this.ser.get().subscribe(res=>{
      console.log(res);
      this.newData = res;
    })
  }



  Form(){
    this.route.navigate(['/form'])
  }


  UPDATE(obj:any){
this.route.navigate(['/form'],({'state':obj}))
  }

 

  DELETE(id:any){
    if(confirm("are you sure!!!!"))
    this.ser.Delete(id).subscribe(res=>{
      console.log(res);
    })


    window.location.reload();
  }



}
