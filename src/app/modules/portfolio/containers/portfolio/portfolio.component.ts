import { Component, OnInit } from '@angular/core';
import { particlesConfig } from 'assets/data/portfolio-particles';
declare var particlesJS: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  experienceInYears: number;

  constructor() {}

  ngOnInit(): void {
    this._initParticles();
    this._initExperienceInYears();
  }

  private _initExperienceInYears(): void {
    const firstJobDate = new Date('2013-10-1'); // August
    const now = new Date();
    const diff = Math.floor(now.getTime() - firstJobDate.getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    this.experienceInYears = Math.floor(months / 12);
  }

  private _initParticles(): void {
    particlesJS('particles-js', particlesConfig, () => {});
  }
}
