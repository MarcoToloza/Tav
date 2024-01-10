import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestrablecerPage } from './restrablecer.page';

describe('RestrablecerPage', () => {
  let component: RestrablecerPage;
  let fixture: ComponentFixture<RestrablecerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestrablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
