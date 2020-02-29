import { Component, OnInit } from '@angular/core';
import { particlesConfig } from 'assets/data/portfolio-particles';

declare var particlesJS: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    particlesJS('particles-js', particlesConfig, function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
