import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellComeComponent } from './well-come.component';

describe('WellComeComponent', () => {
  let component: WellComeComponent;
  let fixture: ComponentFixture<WellComeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellComeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellComeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
