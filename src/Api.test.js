import ask from './Api';


describe('API Caller', () => {
  it('should call YesNo API', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => {},
    }));
    return ask()
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://yesno.wtf/api/');
      });
  });
  it('should return YesNo response in JSON format', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => ({foo: 'bar'}),
    }));

    return ask()
      .then(res => {
        expect(res).toEqual({ foo: 'bar' });
      });
  });
});
