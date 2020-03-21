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

@NgModule({
  declarations: [PortfolioComponent, NavbarComponent, PortfolioModalComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule, HttpClientModule, CarouselModule],
  providers: [PortfolioService]
})
export class PortfolioModule {}
