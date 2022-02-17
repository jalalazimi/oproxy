import oproxy, { number } from '../src';

const src = {
  born: '1990',
  death: '2020',
};

describe('Number', () => {
  it('Normalize values', () => {
    const schema = {
      born: number('born'),
      age: number('{death} - {born}'),
    };

    expect(oproxy(src, schema)).toEqual({
      born: 1990,
      age: 30,
    });
  });
});
