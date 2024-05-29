import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSuccesfullyComponent } from './upload-succesfully.component';

describe('UploadSuccesfullyComponent', () => {
  let component: UploadSuccesfullyComponent;
  let fixture: ComponentFixture<UploadSuccesfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSuccesfullyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadSuccesfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
