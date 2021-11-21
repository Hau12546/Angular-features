import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipeFeatureComponent } from './angular-pipe-feature.component';

describe('AngularPipeFeatureComponent', () => {
  let component: AngularPipeFeatureComponent;
  let fixture: ComponentFixture<AngularPipeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPipeFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPipeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
