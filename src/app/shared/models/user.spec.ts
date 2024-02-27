import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    const dummyUser = {
      // Add properties required by the User class
    };
    expect(new User(dummyUser)).toBeTruthy();
  });
});
