import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBandFormComponent } from './new-band-form.component';

describe('NewBandFormComponent', () => {
  let component: NewBandFormComponent;
  let fixture: ComponentFixture<NewBandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
