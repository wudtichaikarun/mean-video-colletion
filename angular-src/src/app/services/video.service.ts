import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Video } from '../shared/video';


@Injectable()
export class VideoService {
  private _getUrl = "/videos";
  private _postUrl = "/videos";
  private _putUrl = "/videos:";
  private _deleteUrl = "/videos:";


  constructor(private _http: Http) { }

  getVideos(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json());
  }

  addVideo(video: Video){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(video), options)
    .map((response: Response) => response.json());
  }

//update video service
updateVideo(video: Video){
   let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
    .map((response: Response) => response.json());
 }

 deleteVideo(video: Video){
    return this._http.delete(this._deleteUrl + video._id)
    .map((response: Response) => response.json());
 }

}

