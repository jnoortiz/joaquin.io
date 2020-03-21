import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {
  project: Project;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log(this.project);
  }
}
