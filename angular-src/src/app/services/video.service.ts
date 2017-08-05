import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptionsArgs } from '@angular/http';
import { AuthHttpService } from '../shared/auth-http.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Video } from '../shared/video';
import { VideosResponse } from'../shared/videos-response'


@Injectable()
export class VideoService {

  constructor(private _http: AuthHttpService) { }

  // READ video
  getVideos(page = 1, categorieID = 0): Observable<VideosResponse> {
    const options: RequestOptionsArgs = { params: {page, categorieID}};

    return this._http.get('/api/videos', options)
    .map((res: Response) => res.json())
    // .map(({ docs, page, pages }) => ({
    //   docs,
    //   page,
    //   pages
    // }))
  }

  // READ categoryId
  getCategory(){
    const options:RequestOptionsArgs = {
      headers: new Headers({'Content-Type': 'application/json'})
    }
    return this._http.get('/api/categories',options)
    .map((response: Response) => response.json());
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
    return this._http.patch(`/api/videos/${video._id}`, JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

  // DELETE video
  deleteVideo(video: Video){
    return this._http.delete(`/api/videos/${video._id}`)
    .map((response: Response) => response.json());
  }

}
