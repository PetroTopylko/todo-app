import { TestBed } from '@angular/core/testing';

import { TodoItemsService } from './todo-items.service';

describe('TodoItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoItemsService = TestBed.get(TodoItemsService);
    expect(service).toBeTruthy();
  });
});
