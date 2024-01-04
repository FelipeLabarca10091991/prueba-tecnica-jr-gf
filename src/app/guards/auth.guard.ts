import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GuardService } from '../auth/guard.service';

export const authGuard: CanActivateFn = (route, state) => {
  const guardService = inject(GuardService);
  return guardService.getAuthToken();
};
