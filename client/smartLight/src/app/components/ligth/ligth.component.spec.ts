import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigthComponent } from './ligth.component';

describe('LigthComponent', () => {
  let component: LigthComponent;
  let fixture: ComponentFixture<LigthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
