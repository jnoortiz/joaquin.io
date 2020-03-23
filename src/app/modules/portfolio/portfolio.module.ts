import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioRoutingModule } from './portfolio-routing.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { PortfolioService } from './services/portfolio.service';

import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioModalComponent } from './components/portfolio-modal/portfolio-modal.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [PortfolioComponent, NavbarComponent, PortfolioModalComponent, ProjectsComponent, FooterComponent, ContactComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule, HttpClientModule, CarouselModule],
  providers: [PortfolioService]
})
export class PortfolioModule {}
