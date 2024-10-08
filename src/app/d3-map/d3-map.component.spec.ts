import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3MapComponent } from './d3-map.component';

describe('D3MapComponent', () => {
  let component: D3MapComponent;
  let fixture: ComponentFixture<D3MapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3MapComponent]
    });
    fixture = TestBed.createComponent(D3MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
