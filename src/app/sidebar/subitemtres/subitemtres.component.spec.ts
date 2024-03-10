import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubitemtresComponent } from './subitemtres.component';

describe('SubitemtresComponent', () => {
  let component: SubitemtresComponent;
  let fixture: ComponentFixture<SubitemtresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubitemtresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubitemtresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
