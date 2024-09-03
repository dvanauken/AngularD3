import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTreeComponent } from './todo-tree.component';

describe('TodoTreeComponent', () => {
  let component: TodoTreeComponent;
  let fixture: ComponentFixture<TodoTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTreeComponent]
    });
    fixture = TestBed.createComponent(TodoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
