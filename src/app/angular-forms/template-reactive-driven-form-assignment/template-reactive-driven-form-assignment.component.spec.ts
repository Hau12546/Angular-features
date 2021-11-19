import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReactiveDrivenFormAssignmentComponent } from './template-reactive-driven-form-assignment.component';

describe('TemplateReactiveDrivenFormAssignmentComponent', () => {
  let component: TemplateReactiveDrivenFormAssignmentComponent;
  let fixture: ComponentFixture<TemplateReactiveDrivenFormAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReactiveDrivenFormAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReactiveDrivenFormAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
