import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '@shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Array<Project>> {
    return this.http.get('assets/data/projects.json') as Observable<Array<Project>>;
  }
}
