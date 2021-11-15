import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFeatureComponent } from './observable-feature.component';

describe('ObservableFeatureComponent', () => {
  let component: ObservableFeatureComponent;
  let fixture: ComponentFixture<ObservableFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
