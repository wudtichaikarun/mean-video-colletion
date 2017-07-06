import { Component, OnInit } from '@angular/core';
import { Video } from '../../../shared/video';
import { VideoService } from '../../../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  constructor(
    private _videoService: VideoService, 
    private router: Router
  ) {}

  videos: Array<Video>;

  selectedVideo: Video;
  private hidenewVideo: boolean = true;

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => {
      this.videos = resVideoData
    }, err => {
      console.log(err);
      return false;
    });
  }
  

//select video
onSelectVideo(video: any){
  this.selectedVideo = video;
  this.hidenewVideo = true;
  console.log(this.selectedVideo);
}

//create new video
onSubmitAddVideo(video: Video){
  this._videoService.addVideo(video)
  .subscribe(resNewVideo => {
    this.videos.push(resNewVideo);
    this.hidenewVideo = true;
    this.selectedVideo = resNewVideo;
  });
}

//update
onUpdateVideoEvent(video: any){
  this._videoService.updateVideo(video)
  .subscribe(resUpdateVideo => video = resUpdateVideo);
  this.selectedVideo = null;
}

//delete
onDeleteVideoEvent(video: any){
  let videoArray = this.videos;
  this._videoService.deleteVideo(video)
  .subscribe(resDeletedVideo => {
    for (let i=0; i < videoArray.length; i++)
    {
      if (videoArray[i]._id === video._id)
      {
        videoArray.splice(i,1);
      }
    }
  });
  this.selectedVideo = null;
}

newVideo(){
  this.hidenewVideo = false;
}


}
