import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachResultComponent } from './each-result.component';

describe('EachResultComponent', () => {
  let component: EachResultComponent;
  let fixture: ComponentFixture<EachResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
