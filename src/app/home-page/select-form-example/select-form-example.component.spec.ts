import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormExampleComponent } from './select-form-example.component';

describe('SelectFormExampleComponent', () => {
  let component: SelectFormExampleComponent;
  let fixture: ComponentFixture<SelectFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFormExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
