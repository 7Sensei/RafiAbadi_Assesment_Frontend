// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://dev.patriotmed.id';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const payload = { username, password };
    return this.http.post(`${this.baseUrl}/dashboard-user/LoginDashboard`, payload);
  }

  getPackages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/BannerAds/Package/List`);
  }

  createPackage(packageData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/BannerAds/Package/Insert`, packageData);
  }

  updatePackage(id: number, packageData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/BannerAds/Package/Update/${id}`, packageData);
  }

  deletePackage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/BannerAds/Package/Delete/${id}`);
  }
}
