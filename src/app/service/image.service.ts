import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ResponseContentType } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  constructor(
    private _http: Http
  ) { }


  getPlot(imageUrl: string): Observable<Blob> {
    return this._http.get(imageUrl, { responseType: ResponseContentType.Blob }).map((res: Response) => res.blob());
  }

}

