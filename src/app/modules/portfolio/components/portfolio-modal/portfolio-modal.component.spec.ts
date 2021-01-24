import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioModalComponent } from './portfolio-modal.component';

describe('PortfolioModalComponent', () => {
  let component: PortfolioModalComponent;
  let fixture: ComponentFixture<PortfolioModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
