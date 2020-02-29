import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [PortfolioComponent, NavbarComponent],
  imports: [CommonModule, PortfolioRoutingModule]
})
export class PortfolioModule {}
