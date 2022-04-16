import oproxy, { string } from '../src';

const src = {
  name: 'foo',
  family: 'bar',
  city: undefined,
  bio: 'me, you, & them',
  readme: '[oproxy](https://oproxy.com/)',
  description: '  foo  ',
  user: {
    age: 20,
  },
};

describe('String', () => {
  it('Simple Normalizing', () => {
    const schema = {
      age: string('user.age'),
      username: string('name'),
      full: string('name').formatter((name, data) => `${name} ${data.family}`),
      birthDate: string('user.age').formatter(
        age => `${new Date().getFullYear() - Number(age)}`
      ),
    };

    expect(oproxy(src, schema)).toEqual({
      age: '20',
      username: 'foo',
      full: 'foo bar',
      birthDate: '2002',
    });
  });
  it('default value string', () => {
    const schema = {
      city: string('city').defaultValue('UNSET'),
    };

    expect(oproxy(src, schema)).toEqual({
      city: 'UNSET',
    });
  });
  it('escape string', () => {
    const schema = {
      bio: string('bio').escape(),
    };

    expect(oproxy(src, schema)).toEqual({
      bio: 'me, you, &amp; them',
    });
  });
  it('escape RegExp string', () => {
    const schema = {
      readme: string('readme').escapeRegExp(),
    };

    expect(oproxy(src, schema)).toEqual({
      readme: '\\[oproxy\\]\\(https://oproxy\\.com/\\)',
    });
  });
  it('lowerCase string', () => {
    const schema = {
      family: string('family').lowerCase(),
    };

    expect(oproxy(src, schema)).toEqual({
      family: 'bar',
    });
  });
  it('upperCase string', () => {
    const schema = {
      uppercase: string('name').upperCase(),
    };
    expect(oproxy(src, schema)).toEqual({
      uppercase: 'FOO',
    });
  });
  it('trim string', () => {
    const schema = {
      trim: string('description').trim(),
      trimEnd: string('description').trimEnd(),
      trimStart: string('description').trimStart(),
    };
    const res = oproxy(src, schema);
    expect(res).toEqual({
      trim: 'foo',
      trimEnd: '  foo',
      trimStart: 'foo  ',
    });
  });
});
