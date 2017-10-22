import { Injectable } from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthHttpService extends Http {
  constructor( backend: XHRBackend, options: RequestOptions ) {
    const token = localStorage.getItem('access-token');
    options.headers.set('Authorization', `JWT ${token}`);

    super(backend, options)
  }

  request(
    url: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    const token = localStorage.getItem('access-token')

    if (typeof url === 'string') {
      // tslint:disable-next-line:curly
      if (!options) options = { headers: new Headers() };
      options.headers.set('Authorization', `JWT ${token}`);
    }else {
      url.headers.set('Authorization', `JWT ${token}`);
    }
    return super.request(url, options)
  }

}
