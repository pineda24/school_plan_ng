import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  isMenuCollapsed: boolean = false;

  constructor(private http: HttpClient) {}

  find(collection: String) {
    return this.http.get<any>(environment.serverBaseURL + collection + '/');
  }

  findById(collection: String, id: String) {
    return this.http.get<any>(environment.serverBaseURL + collection + '/' + id);
  }

  findBySubjectAndCareer(collection: String, idSubject: String, idCareer: String) {
    return this.http.get<any>(environment.serverBaseURL + collection + '/' + idSubject + '/' + idCareer);
  }

  create(collection: String, data: any) {
    return this.http.post<any>(environment.serverBaseURL + collection + '/', data);
  }

  update(collection: String, id: String, data: any) {
    return this.http.put<any>(environment.serverBaseURL + collection + '/' + id, data);
  }

  updateBySubjectAndCareer(collection: String, idSubject: String, idCareer: String, data: any) {
    return this.http.put<any>(environment.serverBaseURL + collection + '/' + idSubject + '/' + idCareer, data);
  }

  deleteOne(collection: String, id: String) {
    return this.http.delete<any>(environment.serverBaseURL + collection + '/' + id);
  }

  deleteBySubjectAndCarreer(collection: String, idSubject: String, idCareer: String) {
    return this.http.delete<any>(environment.serverBaseURL + collection + '/' + idSubject + '/' + idCareer);
  }
}
