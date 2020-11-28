import State from 'module/state';

it('should get the current pause broadcast state', () => {
  const state = new State();

  // Default is `false`.
  expect(state.getIsPauseBroadcast()).toBeFalsy();
});

it('should accept a new pause broadcast state', () => {
  const state = new State();
  state.setIsPauseBroadcast(true);
  expect(state.getIsPauseBroadcast()).toBeTruthy();
});
