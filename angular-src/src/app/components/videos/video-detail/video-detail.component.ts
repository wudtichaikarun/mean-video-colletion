import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';



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

deleteVideo(){
  this.deleteVideoEvent.emit(this.video);
}

ConfirmClicked(){
   this.confirmClicked = true
  if(this.confirmClicked){
    this.deleteVideoEvent.emit(this.video);
  }
}

}
