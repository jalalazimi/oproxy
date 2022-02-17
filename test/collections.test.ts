import oproxy, { string } from '../src';

const src = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
];

describe('Collections', () => {
  it('Simple Normalizing', () => {
    const schema = {
      fullName: string('name'),
    };

    expect(oproxy(src, schema)).toEqual([
      {
        fullName: 'Leanne Graham',
      },
      {
        fullName: 'Ervin Howell',
      },
      {
        fullName: 'Clementine Bauch',
      },
    ]);
  });
});
