import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    const dummyPost = {
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
      created_at: '2022-01-01',
      user: {
        // Add properties required by the User class
      }
    };
    expect(new Post(dummyPost)).toBeTruthy();
  });
});
