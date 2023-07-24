import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeadService {

  TOKEN: string = "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYTIyNTRlM2UwZTAwMzQ3MGE4YjkiLCJlbWFpbCI6Imdpb3Zhbm5pLnRyb2lzaXViQGdtYWlsLmNvbSIsImZpcnN0bmFtZSI6Ikdpb3Zhbm5pIiwibGFzdG5hbWUiOiJUcm9pc2kiLCJlbWFpbHZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2ODMwNDI5NTAsImF1ZCI6Imh0dHBzOi8vdGlsZWRlc2suY29tIiwiaXNzIjoiaHR0cHM6Ly90aWxlZGVzay5jb20iLCJzdWIiOiJ1c2VyIiwianRpIjoiYmViYjU0NTYtNTQ5My00ZTMyLTljMWItYWY5MWRkMDk4NDhmIn0.L_YbMf6dIm341XwtsCU9xC5ctTivYqHONpofgNN5G5KnjcxbRxAbLsglyKS6e1fbaRljWp0XSVcMftZ1eRqH5OQ7hs9Ybo_EL7QUgmsqkhhBE2oyXKwqYZULfJD42h3ORfO6CiGIt47ldvKMR7InLwlSxnEOUbqr97E1FdvINbk" 
  tiledesk_api_url: string;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.tiledesk_api_url = environment.tiledesk_api_url;
  }

  getLeadsActive(projectId) {
    return new Promise((resolve, reject) => {

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.TOKEN
      })

      const url = this.tiledesk_api_url + "/" + projectId + "/leads";
      this.httpClient.get(url, { headers: headers })
          .toPromise().then((res) => {
            resolve(res);
          }).catch((err) => {
            reject(err);
          })
    })
  }
}
