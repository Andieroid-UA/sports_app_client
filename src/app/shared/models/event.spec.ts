import { Event } from './event';

describe('Event', () => {
  it('should create an instance', () => {
    const dummyEvent = {
      // Add properties required by the Event class
    };
    expect(new Event(dummyEvent)).toBeTruthy();
  });
});
