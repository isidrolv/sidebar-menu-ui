import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynMatListItemComponent } from './dyn-mat-list-item.component';

describe('DynMatListItemComponent', () => {
  let component: DynMatListItemComponent;
  let fixture: ComponentFixture<DynMatListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynMatListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynMatListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
