import { PureCallPipe } from './pure-call.pipe';

describe('PureCallPipe', () => {
  it('create an instance', () => {
    const pipe = new PureCallPipe();
    expect(pipe).toBeTruthy();
  });
});
