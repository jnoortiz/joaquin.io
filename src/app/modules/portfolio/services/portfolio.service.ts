import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioSkill, PortfolioProject, Portfolio } from '@shared/models/portfolio.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<Portfolio> {
    return this.http
      .get('assets/data/projects.json')
      .pipe(
        map(projects => this._createPortfolio(projects as Array<PortfolioProject>))
      ) as Observable<Portfolio>;
  }

  getPortfolioBySkill(skill): Observable<Portfolio> {
    return this.http
      .get('assets/data/projects.json')
      .pipe(
        map(projects => this._filterProjectsBySkill(projects as Array<PortfolioProject>, skill))
      ) as Observable<Portfolio>;
  }

  // TODO: transfer logic to backend
  private _createPortfolio(projects: Array<PortfolioProject>): Portfolio {
    const portfolio: Portfolio = {
      skills: [],
      projects
    };
    // iterate over projects array
    projects.forEach(project =>
      // iterate over project skills
      project.skills.forEach(projectSkill => {
        // find skill from portfolio skills list
        const skill: PortfolioSkill = portfolio.skills.find(
          portfolioSkill => portfolioSkill.name === projectSkill
        );
        // if skill exists then add skill count, otherwise create add skill to portfolio skills list
        if (skill) {
          skill.count++;
        } else {
          portfolio.skills.push({
            name: projectSkill,
            count: 1
          });
        }
      })
    );
    return portfolio;
  }

  // TODO: transfer logic to backend
  private _filterProjectsBySkill(projects: Array<PortfolioProject>, filterSkills: Array<string>): Portfolio {
    const portfolio: Portfolio = this._createPortfolio(projects);
    filterSkills.forEach(filter => {
      portfolio.projects = portfolio.projects.filter(project => project.skills.includes(filter));
    });
    // reset skills count to 0
    portfolio.skills.forEach(portfolioSkill => (portfolioSkill.count = 0));
    // add count
    portfolio.skills.forEach(portfolioSkill =>
      portfolio.projects.forEach(project => {
        if (project.skills.includes(portfolioSkill.name)) {
          portfolioSkill.count++;
        }
      })
    );
    return portfolio;
  }
}
