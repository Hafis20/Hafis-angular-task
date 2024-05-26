import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const takeToken = inject(LocalstorageService);
  const router = inject(Router);
  if (takeToken.userTokenFromLocalStorage) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
