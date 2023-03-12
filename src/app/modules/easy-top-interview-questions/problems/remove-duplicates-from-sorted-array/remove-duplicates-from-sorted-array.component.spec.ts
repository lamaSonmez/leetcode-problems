import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDuplicatesFromSortedArrayComponent } from './remove-duplicates-from-sorted-array.component';

describe('RemoveDuplicatesFromSortedArrayComponent', () => {
  let component: RemoveDuplicatesFromSortedArrayComponent;
  let fixture: ComponentFixture<RemoveDuplicatesFromSortedArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDuplicatesFromSortedArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDuplicatesFromSortedArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
