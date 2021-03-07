import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCollComponent } from './curso-coll.component';

describe('CursoCollComponent', () => {
  let component: CursoCollComponent;
  let fixture: ComponentFixture<CursoCollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoCollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoCollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
