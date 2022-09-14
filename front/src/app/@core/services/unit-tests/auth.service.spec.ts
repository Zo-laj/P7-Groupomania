import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { AuthService } from '../auth.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let authService: AuthService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
  authService = new AuthService(httpClientSpy);
});

it('should create and return a new user (HttpClient called once)', (done: DoneFn) => {
  const newUser: User = {
    id: 8,
    email: "zoe2test@test.com",
    userName: "Zo",
    password: "123456",
    role: "user"}

  httpClientSpy.post.and.returnValue(of(newUser));

  authService.createUser(newUser.email, newUser.userName, newUser.password).subscribe({
    next: user => {
      expect(user)
        .withContext('expected new user')
        .toEqual(newUser);
      done();
    },
    error: done.fail
  });
  expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
});

it('should return an error when the server returns a 400', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 400 error',
    status: 400, statusText: 'Bad Request'
  });

  httpClientSpy.get.and.returnValue(of(errorResponse));

  authService.createUser("", "", "").subscribe({
    next: user => done.fail('expected an error, not user'),
    error: error  => {
      expect(error.message).toContain('test 400 error');
      done();
    }
  });
});