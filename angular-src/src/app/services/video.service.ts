import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptionsArgs } from '@angular/http';
import { AuthHttpService } from '../shared/auth-http.service'
import 'rxjs/add/operator/map';
import { Video } from '../shared/video';


@Injectable()
export class VideoService {

  constructor(private _http: AuthHttpService) { }
  
  // READ video
  getVideos(){
    return this._http.get('/api/videos')
    .map(res => res.json());
  }

  // CREATE video
  addVideo(video: Video){
    const options:RequestOptionsArgs = {
      headers: new Headers({'Content-Type': 'application/json'})
    }
    return this._http.post('/api/videos', JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

  // UPDATE video 
  updateVideo(video: Video){
   const options:RequestOptionsArgs = {
      headers: new Headers({'Content-Type': 'application/json'})
    }
    return this._http.put(`/api/videos/${video._id}`, JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

  // DELETE video
  deleteVideo(video: Video){
    return this._http.delete(`/api/videos/${video._id}`)
    .map((response: Response) => response.json());
  }

}
