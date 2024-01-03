import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {


  loginform!:FormGroup;


  constructor(private route:Router,private fb:FormBuilder) {



    this.loginform = this.fb.group({
name: ["",Validators.required],
pass: ["",Validators.required],

    });


  }

  ngOnInit(): void {



  }





  login(data:any){
   



   if(this.loginform.invalid)
   this.loginform.markAllAsTouched()
  else
  {
   console.log(data);
   localStorage.setItem('formvalue',JSON.stringify(data));
   this.route.navigateByUrl('/form')
  }


  }



  public checkError = (fn:any,en:any)=>{
    return(
      this.loginform.get(fn)?.hasError?.(en)
      &&
      this.loginform.get(fn)?.touched

    )
   }



}
