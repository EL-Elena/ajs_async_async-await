import saving from '../index';

const correct = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('Checking saving', async () => {
  return saving().then((value) => expect(value).toEqual(correct));
});

test('Checking error', async () => {
  try {
    await saving();
  } catch (e) {
    expect(e).toMatch('err');
  }
});
