import oproxy, { array, string } from '../src';

const src = {
  id: 'root',
  name: 'Documents',
  children: [
    {
      id: '1',
      name: 'Report',
      children: [
        {
          id: '2',
          name: 'PDF',
        },
      ],
    },
    {
      id: '3',
      name: 'Files',
      children: [
        {
          id: '4',
          name: 'Excel',
        },
      ],
    },
    {
      id: '5',
      name: 'Programs',
      children: [
        {
          id: '6',
          name: 'Codes',
        },
        {
          id: '7',
          name: 'Data',
          children: [
            {
              id: '8',
              name: 'Codes',
            },
          ],
        },
      ],
    },
  ],
};

describe('nestedSchema', () => {
  it('array of Object', () => {
    const nestedSchema = {
      userId: string('id').formatter(id => `user-${id}`),
      name: string('name').lowerCase(),
      children: array('children').proxy({ recursive: true }),
    };

    expect(oproxy(src, nestedSchema)).toEqual({
      userId: 'user-root',
      name: 'documents',
      children: [
        {
          userId: 'user-1',
          name: 'report',
          children: [{ userId: 'user-2', name: 'pdf' }],
        },
        {
          userId: 'user-3',
          name: 'files',
          children: [{ userId: 'user-4', name: 'excel' }],
        },
        {
          userId: 'user-5',
          name: 'programs',
          children: [
            { userId: 'user-6', name: 'codes' },
            {
              userId: 'user-7',
              name: 'data',
              children: [{ userId: 'user-8', name: 'codes' }],
            },
          ],
        },
      ],
    });
  });
});
