import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio, PortfolioSkill } from '@shared/models/portfolio.model';
import { PortfolioModalComponent } from '../../components/portfolio-modal/portfolio-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();
  projectsCount: number;

  private filteredSkills: Array<string> = [];

  constructor(
    private portfolioService: PortfolioService,
    private cd: ChangeDetectorRef,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this._initProjects();
  }

  filterProjectsBySkills(skill?: PortfolioSkill) {
    if (skill) {
      // determine if skill is currently being filtered
      const index = this.filteredSkills.findIndex(filteredSkill => filteredSkill === skill.name);
      if (index > -1) {
        // remove skill from filtered skills
        this.filteredSkills.splice(index, 1);
      } else {
        // add skill to filtered skills
        this.filteredSkills.push(skill.name);
      }
      this.portfolioService.getPortfolioBySkill(this.filteredSkills).subscribe(data => {
        this.portfolio = data;
        this.cd.detectChanges();
      });
    } else {
      this.filteredSkills = [];
      this.portfolioService.getPortfolio().subscribe(data => {
        this.portfolio = data;
        this.cd.detectChanges();
      });
    }
  }

  getShowAllClass(): string {
    if (this.filteredSkills.length === 0) {
      return 'active';
    }
  }

  getSkillItemClass(skill: PortfolioSkill): string {
    if (skill.count === 0) {
      return 'inactive';
    } else if (this.filteredSkills.includes(skill.name)) {
      return 'active';
    }
  }

  openModal(projectId): void {
    const initialState = {
      project: this.portfolio.projects.find(project => project.id === projectId)
    };
    this.modalService.show(PortfolioModalComponent, { initialState }).setClass('modal-lg');
  }

  private _initProjects(): void {
    this.portfolioService.getPortfolio().subscribe(
      data => {
        this.portfolio = data;
        this.projectsCount = data.projects.length;
        this.cd.detectChanges();
      },
      err => {
        console.error(err);
      }
    );
  }
}
