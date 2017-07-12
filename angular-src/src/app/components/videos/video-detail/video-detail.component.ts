import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';
import {Popup} from 'ng2-opd-popup'


@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent'],
  providers: [ 
    ConfirmOptions,
    {provide: Position, useClass: Positioning}
  ]
})
export class VideoDetailComponent implements OnInit {
 video: any;
 private editTitle: boolean = false;
 private updateVideoEvent = new EventEmitter();
 private deleteVideoEvent = new EventEmitter();

 @ViewChild('popup1') popup1: Popup;

      //config confirm property
  public title: string = 'Confirm Delete';
  public message: string = 'Are you sure! to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  public isOpen: boolean = false;

 constructor() { }



  ngOnInit() {
  }

  ngOnChange(){
    this.editTitle = false;
  }

btnEditClick(){
  this.editTitle = true
}
btnCancelClick(){
  this.editTitle = false;
}

//onblur title
// onMouseout(){
//   this.editTitle = false;
//   console.log('event mouseout working');
// }

updateVideo(){
  this.updateVideoEvent.emit(this.video);
}

// deleteVideo(){
//   this.deleteVideoEvent.emit(this.video);
// }

ConfirmClicked(){
   this.confirmClicked = true
  if(this.confirmClicked){
    this.deleteVideoEvent.emit(this.video);
  }
}

ClickButton(){
  this.popup1.options = {
    header: "Your custom header",
    color: "#5cb85c", // red, blue.... 
    widthProsentage: 40, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: true, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
  };
  this.popup1.show(this.popup1.options)
}
 
}
