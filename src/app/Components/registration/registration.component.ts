import { Component } from '@angular/core';
import { faCircleCheck, faEye, faEyeSlash, faPhone } from '@fortawesome/free-solid-svg-icons';
faEyeSlash
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
 cirIcon=faCircleCheck;
 faPhone=faPhone
 faEyeSlash=faEyeSlash
 faEye=faEye
 visible:boolean=true
 changeToText:boolean=true
 ensureVisible:boolean=true
 changetype:boolean=true
 viewpass(){
  this.visible=!this.visible
  this.changeToText=!this.changeToText
 }
 ensureViewpass(){
  this.changetype=!this.changetype
  this.ensureVisible=!this.ensureVisible
 }
}
