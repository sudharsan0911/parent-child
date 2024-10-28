import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';

  EnterName="gorlock the destroyer"
  EnterAge = "22"
  EnterStatus="single"
  parentData1=""
  parentData2=""
  parentData3=""

  transferData()
  {
    this.parentData1=this.EnterName
    this.parentData2=this.EnterAge
    this.parentData3=this.EnterStatus
  }
value=""

sendData(value:string)
{
  this.value=value
}

}
