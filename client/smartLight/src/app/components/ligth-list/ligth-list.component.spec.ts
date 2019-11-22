import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigthListComponent } from './ligth-list.component';

describe('LigthListComponent', () => {
  let component: LigthListComponent;
  let fixture: ComponentFixture<LigthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigthListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
