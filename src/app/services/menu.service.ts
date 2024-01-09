import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MenuItem} from "../components/sidebar-menu/sidebar-menu.component";
import {uri} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpOptions: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getSideBarItems(): Observable<MenuItem[]> {
    const params: HttpParams = new HttpParams();
    params.set("userId", "1");
    params.set("roleId", "1");
    params.set("companyId", "1");
    params.set("langId", "1");
    params.set("apiToken", "HG3adf30avBad3s2dfg344vB");

    return this.http.get<MenuItem[]>(uri + '/menu', {
      'headers': this.httpOptions,
      'params': params
    });
  }
}
