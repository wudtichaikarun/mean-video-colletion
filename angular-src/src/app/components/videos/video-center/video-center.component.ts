import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs'
import { videoPaginate } from '../../../shared/videosPaginate';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Video } from '../../../shared/video'
import { VideoService } from '../../../services/video.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { VideosResponse } from'../../../shared/videos-response'


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  form: FormGroup;

  videos: Array<Video>;
  currentPage: String;
  totalPages: Number[];
  
  selectedVideo: videoPaginate;
  
  private hidenewVideo: boolean = true;
  
  formErrors ={
    // name: '',
    title: '',
    url: ''
  }

  validatetionMessages = {
    // name: {
    //   required: 'Name is required.'
    // },
    title: {
      required: 'Username is required.',
      minlength: 'Username required 4-10 character.',
      maxlength: 'Username required 4-10 character.'
    },
    url:{
      required: 'Email is required.',
      pattern: 'Invalid email pattern'
    }
    // password:{
    //   required: 'Password is required.',
    //   minlength: 'Username required 4-8 character.',
    //   maxlength: 'Username required 4-8 character.'
    // }

  }

  constructor(
    private builder: FormBuilder,
    private _videoService: VideoService,
    private route : ActivatedRoute,
    private router: Router
  ) {}

   ngOnInit() {
    this.buildForm()
    this.subscribeToParams()
    // this._videoService.getVideos()
    // .subscribe(resVideoData => {
    //   this.videos = resVideoData
    //   console.log(this.videos)
    // }, err => {
    //   console.log(err);
    //   return false;
    // });
  }
  private subscribeToParams(){
    this.route.queryParams.subscribe(
      ({ page, categoryId }) => this.loadPage(page, categoryId)
    )
  }
  private loadPage(page = 1, categoryId){
    this._videoService
      .getVideos(page , categoryId)
      .subscribe(({ docs, page, pages}:VideosResponse) => {
        this.videos = docs;
        this.currentPage = page;
        this.totalPages = Array.from({ length: +pages }, (_, index) => index +1)
        console.log(this.videos)
        console.log(this.currentPage)
        console.log(this.totalPages)
      })
      // .subscribe(
      //   ({ docs, page, pages }) => {
      //   this.videos = docs ;
      //   // create array
      //   //this.totalPages = Array.from({ length: pages }, (_, index) => index +1)
      //   // this.pages = Array.from({ length: pages }, (_, index) => index +1)
      //   console.log(this.videos)
      //   console.log(this.currentPage)
      //   console.log(this.totalPages)
      // })
  }

  // Build and validate form by angular
  buildForm(){
    this.form = this.builder.group({
      // name: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', Validators.required],
      discription: [],
      categoryId:['', Validators.required]
    });
    this.form
    .valueChanges
    //.debounceTime(400)
    //.distinctUntilChange()
    .subscribe(()=> this.onValueChanged())
  }

    onValueChanged(){
    if(!this.form) return;
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = this.form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validatetionMessages[field];
        for(const key in control.errors){
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }

// Select video
onSelectVideo(video: any){
  this.selectedVideo = video;
  this.hidenewVideo = true;
  console.log(this.selectedVideo);
}

// Create new video
onSubmitAddVideo(even){
  console.log(this.form.value)
  this._videoService.addVideo(this.form.value)
  .subscribe(resNewVideo => {
    this.videos.push(resNewVideo);
    this.hidenewVideo = true;
    this.selectedVideo = resNewVideo;
  });
}

// Update
onUpdateVideoEvent(video: any){
  this._videoService.updateVideo(video)
  .subscribe(resUpdateVideo => {
    video = resUpdateVideo;
    this.selectedVideo = resUpdateVideo;
  });
}

// // Delete
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
