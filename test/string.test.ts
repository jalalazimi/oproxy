import oproxy, { string } from '../src';

describe('String', () => {
  it('Normalize values', () => {
    const src = {
      name: 'foo',
      full: 'foo bar',
      age: 20,
      escape: 'me, you, & them',
      escapeRegExp: '[oproxy](https://oproxy.com/)',
      lowerCase: 'VALUE',
      trim: '  foo  ',
      trimNested: {
        trim: '  foo  ',
      },
    };
    const schema = {
      age: string('age'),
      fullName: string('full').camelCase(),
      uppercase: string('name').upperCase(),
      escape: string('escape').escape(),
      escapeRegExp: string('escapeRegExp').escapeRegExp(),
      lowerCase: string('lowerCase').lowerCase(),
      trim: string('trim').trim(),
      trimEnd: string('trim').trimEnd(),
      trimStart: string('trim').trimStart(),
    };

    const res = oproxy(src, schema);

    expect(res).toEqual({
      age: '20',
      uppercase: 'FOO',
      lowerCase: 'value',
      fullName: 'fooBar',
      escape: 'me, you, &amp; them',
      trim: 'foo',
      trimEnd: '  foo',
      trimStart: 'foo  ',
      escapeRegExp: '\\[oproxy\\]\\(https://oproxy\\.com/\\)',
    });
  });
});
