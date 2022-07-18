import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssignTaskComponent } from './assign-task.component';
import { BackendService } from './../../backend.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
describe('AssignTaskComponent', () => {
  let component: AssignTaskComponent;
  let fixture: ComponentFixture<AssignTaskComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AssignTaskComponent],
      imports: [RouterTestingModule, MatDialogModule],
      providers: [
        { provide: BackendService, useValue: new BackendService() },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssignTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
