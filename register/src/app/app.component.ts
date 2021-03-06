import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fg=new FormGroup({fname:new FormControl("",[Validators.required]),
  lname:new FormControl("",[Validators.required]),
  dob:new FormControl("",[Validators.required]),
  gender:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    date:new FormControl("",[Validators.required]),
    time:new FormControl("",[Validators.required]),
    lab:new FormControl("",[Validators.required]),
    report:new FormControl("",[Validators.required])
    ,result:new FormControl("",[Validators.required]),
    aadhar:new FormControl("",[Validators.required])});
   store:any=[];
   input: any;
  headers=["First Name","Last Name","Date of Birth","Gender","City","Date Of Test","Time Of Test","Lab Name",
  "Report Number","Result","Aadhar Number"];
  title: any;
  add(){
    if(this.fg.dirty===true){
      console.log(this.store.push(this.fg.value));
      console.log(this.store);
      this.fg.reset();
      (<HTMLDivElement>document.getElementById("msg")).style.display="none";
    }
  }
  
}