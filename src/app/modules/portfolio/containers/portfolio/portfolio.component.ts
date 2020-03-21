import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Project } from '@shared/models/project.model';
import { particlesConfig } from 'assets/data/portfolio-particles';
import { PortfolioModalComponent } from '../../components/portfolio-modal/portfolio-modal.component';
declare var particlesJS: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  experienceInYears: number;
  projects: Array<Project>;

  constructor(private portfolioService: PortfolioService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.initParticles();
    this.initExperienceInYears();
    this.initProjects();
  }

  private initExperienceInYears(): void {
    const firstJobDate = new Date('2013-10-1'); // August
    const now = new Date();
    const diff = Math.floor(now.getTime() - firstJobDate.getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    this.experienceInYears = Math.floor(months / 12);
  }

  private initParticles(): void {
    particlesJS('particles-js', particlesConfig, () => {});
  }

  private initProjects(): void {
    this.portfolioService.getProjects().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  openModal(projectId): void {
    const initialState = {
      project: this.projects.find(project => project.id === projectId)
    };
    this.modalService.show(PortfolioModalComponent, { initialState }).setClass('modal-lg');
  }
}
