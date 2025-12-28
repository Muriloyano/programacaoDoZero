import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoA } from './filho-a';

describe('FilhoA', () => {
  let component: FilhoA;
  let fixture: ComponentFixture<FilhoA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilhoA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
