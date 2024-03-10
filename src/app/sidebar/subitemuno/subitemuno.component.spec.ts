import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubitemunoComponent } from './subitemuno.component';

describe('SubitemunoComponent', () => {
  let component: SubitemunoComponent;
  let fixture: ComponentFixture<SubitemunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubitemunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubitemunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
