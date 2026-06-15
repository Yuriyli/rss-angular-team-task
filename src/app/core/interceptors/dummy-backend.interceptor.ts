import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';

export const DummyBackendInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const user = { id: 1, email: 'test@test.com', username: 'user' };
  const apiKeys = { publicKey: 'dummy-public-key', privateKey: 'dummy-private-key' };

  if (request.url.endsWith('/auth/login') && request.method === 'POST')
    return of(new HttpResponse({ status: 200, body: { token: 'dummy-jwt-token' } })).pipe(
      delay(500),
    );

  if (request.url.endsWith('/auth/register') && request.method === 'POST')
    return of(new HttpResponse({ status: 200, body: { token: 'dummy-jwt-token' } })).pipe(
      delay(500),
    );

  if (request.url.endsWith('/auth/me') && request.method === 'GET')
    return of(new HttpResponse({ status: 200, body: user })).pipe(delay(300));

  if (request.url.endsWith('/keys') && request.method === 'GET')
    return of(new HttpResponse({ status: 200, body: apiKeys })).pipe(delay(300));

  if (request.url.endsWith('/keys') && request.method === 'PUT')
    return of(new HttpResponse({ status: 200, body: request.body })).pipe(delay(300));

  return next(request);
};
