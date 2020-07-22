import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCorsComponent } from './test-cors.component';

describe('TestCorsComponent', () => {
  let component: TestCorsComponent;
  let fixture: ComponentFixture<TestCorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
