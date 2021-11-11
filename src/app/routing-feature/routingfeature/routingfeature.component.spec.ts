import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingfeatureComponent } from './routingfeature.component';

describe('RoutingfeatureComponent', () => {
  let component: RoutingfeatureComponent;
  let fixture: ComponentFixture<RoutingfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
