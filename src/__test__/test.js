import loadLevel from '../loadData';
import fetchData from '../__mocks__/http';

jest.mock('../__mocks__/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('colled fetchData', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  loadLevel(5);
  expect(fetchData).toBeCalledWith('https://server/user/5');
});

test('get level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '100' });
  expect(loadLevel(5) === 'Ваш текущий уровень: 100');
});

test('level information is unavailable', () => {
  fetchData.mockReturnValue({ status: false });
  expect(loadLevel(5) === 'Информация об уровне временно недоступна');
});
