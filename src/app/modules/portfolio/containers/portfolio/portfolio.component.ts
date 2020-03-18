import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

import { Project } from '@shared/models/project.model';

import { particlesConfig } from 'assets/data/portfolio-particles';

declare var particlesJS: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private projects: Array<Project>;

  experienceInYears: number;
  projectsByRow: Array<Array<Project>>;
  selectedProject: Project;
  showModal: boolean;

  constructor(private portfolioService: PortfolioService) {}

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
        // we save the flattened projects list
        this.projects = data;

        // we divide the array of projects into subarrays of up to 3 projects
        const projectsByRow = [[]];
        data.forEach(project => {
          if (projectsByRow[projectsByRow.length - 1].length === 3) {
            projectsByRow.push([]);
          }
          projectsByRow[projectsByRow.length - 1].push(project);
        });
        this.projectsByRow = projectsByRow;
      },
      err => {
        console.error(err);
      }
    );
  }

  // TODO: move to shared
  onModalClosed(): void {
    this.showModal = false;
  }

  // TODO: move to shared
  openModal(projectId): void {
    this.selectedProject = this.projects.find(project => project.id === projectId);
    this.showModal = true;
  }
}
