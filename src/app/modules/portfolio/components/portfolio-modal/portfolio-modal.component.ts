import { Component, OnInit, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {
  @Input() project: Project;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.project.screenshotUrls);
    this.renderer.addClass(document.body, 'body--modal-open');
  }

  closeModal(): void {
    this.renderer.removeClass(document.body, 'body--modal-open');
    this.modalClosed.emit(true);
  }
}
