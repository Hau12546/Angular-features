import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormAssignmentComponent } from './template-driven-form-assignment.component';

describe('TemplateDrivenFormAssignmentComponent', () => {
  let component: TemplateDrivenFormAssignmentComponent;
  let fixture: ComponentFixture<TemplateDrivenFormAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
