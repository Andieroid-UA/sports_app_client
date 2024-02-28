import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthenticationService } from './core/services/authentication.service';
import { UserService } from './core/services/user.service';
import { authInterceptor } from './core/interceptor/auth.interceptor';

export function initializeUserData(
  userService: UserService,
  authService: AuthenticationService
) {
  console.log("THIS executed!")
  if (authService.isLoggedIn()) {
    return () => userService.getBootstrapData().subscribe();
  } else {
    return () => of(null);
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUserData,
      deps: [UserService, AuthenticationService],
      multi: true
    },
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
