import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubitemdosComponent } from './subitemdos.component';

describe('SubitemdosComponent', () => {
  let component: SubitemdosComponent;
  let fixture: ComponentFixture<SubitemdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubitemdosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubitemdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
