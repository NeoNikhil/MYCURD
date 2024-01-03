import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CURDSERService } from 'src/app/services/curdser.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  TB!:FormGroup;
  req:any;
  constructor(private route:Router,private Fb:FormBuilder,private ser:CURDSERService) {
  this.req = route.getCurrentNavigation()?.extras.state;
   console.log(this.req);



  this.TB = this.Fb.group({
    name:['',Validators.required],
    email:['',Validators.required]
  })



}



  ngOnInit(): void {

    if(this.req){
      this.TB.patchValue(this.req)
      console.log( this.req.id);
    }
  }

  login(data:any){

    if(this.req){
      this.ser.Update(this.req.id,this.TB.value).subscribe((res:any)=>{console.log(res)
        alert('Success fully update!!')
      })
    }
  else{
 this.ser.post(data).subscribe(res=>{
                console.log(res);
                      alert('Success fully Submitted!!')
              })


        // console.log(data);
            }

     this.TB.reset()

  }




  tab(){
this.route.navigate(['/table']);
  }


public CE = (FN:any,EN:any)=>{
  return(
this.TB.get(FN)?.hasError?.(EN)&&
this.TB.get(FN)?.touched
  );
}



}
