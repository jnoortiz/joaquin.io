import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PortfolioProject } from '@shared/models/portfolio.model';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {
  project: PortfolioProject;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log(this.project);
  }
}
