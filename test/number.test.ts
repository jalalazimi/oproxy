import oproxy, { number } from '../src';

describe('Number', () => {
  it('Normalize values', () => {
    const src = {
      age: '20',
    };
    const schema = {
      age: number('age'),
    };

    const res = oproxy(src, schema);

    expect(res).toEqual({
      age: 20,
    });
  });
});
