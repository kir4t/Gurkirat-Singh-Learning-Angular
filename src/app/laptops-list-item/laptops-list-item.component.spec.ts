import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsListItemComponent } from './laptops-list-item.component';

describe('LaptopsListItemComponent', () => {
  let component: LaptopsListItemComponent;
  let fixture: ComponentFixture<LaptopsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
