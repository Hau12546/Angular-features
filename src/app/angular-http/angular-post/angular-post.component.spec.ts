import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPostComponent } from './angular-post.component';

describe('AngularPostComponent', () => {
  let component: AngularPostComponent;
  let fixture: ComponentFixture<AngularPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
