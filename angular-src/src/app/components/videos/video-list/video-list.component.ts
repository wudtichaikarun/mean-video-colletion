import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../../../shared/video';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos','currentPage','totalPages','CategoryId'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {
  showDropdown: boolean = false;
  public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

onSelect(vid: Video ){
  this.SelectVideo.emit(vid);
}



toggleDropdown():void { 
   this.showDropdown = !this.showDropdown;
}

}
