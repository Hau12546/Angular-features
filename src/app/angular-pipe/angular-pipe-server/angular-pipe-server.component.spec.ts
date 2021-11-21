import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipeServerComponent } from './angular-pipe-server.component';

describe('AngularPipeServerComponent', () => {
  let component: AngularPipeServerComponent;
  let fixture: ComponentFixture<AngularPipeServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPipeServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPipeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
