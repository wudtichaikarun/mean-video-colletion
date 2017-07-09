import { Component, OnInit, EventEmitter } from '@angular/core';
import { videoPaginate } from '../../../shared/videosPaginate';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos','currentPage','totalPages'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

onSelect(vid: videoPaginate){
  this.SelectVideo.emit(vid);
}

}
