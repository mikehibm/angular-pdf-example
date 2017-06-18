import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApiClientService {

  constructor(
    private http: Http
  ) { }

  getPDF() {
    const url = environment.PDF_URL;
    const options = { responseType: ResponseContentType.Blob };
    return this.http.get(url, options)
      .toPromise()
      .then((response: Response) => {
        const blob = response.blob();
        return new Blob([blob], { type: 'application/pdf' });
      });
    ;
  }

}
