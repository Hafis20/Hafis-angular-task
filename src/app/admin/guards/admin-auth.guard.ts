import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {

  const takeToken = inject(LocalstorageService);
  const router = inject(Router);
  if (takeToken.adminTokenFromLocalStorage) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
