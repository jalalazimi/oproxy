import oproxy, { id } from '../src';
import * as uuid from 'uuid';
jest.mock('uuid');

jest.spyOn(uuid, 'v4').mockReturnValue('72cf8d64-6cbe-42a9-bd4c-5013e80767b5');

const src = {
  name: 'foo',
  id: 1,
};

describe('Id', () => {
  it('map object', () => {
    const schema = {
      uuid: id(),
      id: id('id'),
    };

    expect(oproxy(src, schema)).toEqual({
      uuid: '72cf8d64-6cbe-42a9-bd4c-5013e80767b5',
      id: 1,
    });
  });
});
