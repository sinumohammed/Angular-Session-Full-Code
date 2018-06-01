import { TestBed, inject } from '@angular/core/testing';

import { UserPreferencesService } from './user-preferences.service';

describe('UserPreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPreferencesService]
    });
  });

  it('should be created', inject([UserPreferencesService], (service: UserPreferencesService) => {
    expect(service).toBeTruthy();
  }));
});
