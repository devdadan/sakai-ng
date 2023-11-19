import { InjectionToken } from '@angular/core';
import { JwtOptions, JwtHelperService } from '@auth0/angular-jwt';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token');
    },
    allowedDomains: ['example.com'], // Gantilah dengan domain yang diizinkan Anda
  } as JwtOptions;
}

export const JWT_OPTIONS = new InjectionToken<JwtOptions>('JWT_OPTIONS');
