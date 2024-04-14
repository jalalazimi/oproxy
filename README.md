# oproxy (🚧 Under Construction)

Oproxy is an intuitive, flexible, and readable schema-based data mapper for JavaScript applications. Simply define your data schema, and Oproxy will transform your data to match the defined schema.

## Features 🚀

- **Declarative Schemas:** Easily define how your data should be transformed with straightforward schema declarations.

- **Powerful Transformations:** Perform a wide range of operations including string manipulations, numerical calculations, and array processing.

- **Deep Nesting Capable:** Master nested data with recursive schema definitions.
Extensibility: Extend and customize to meet specific needs with custom formatters and more.

- **Recursive Mapping:** Easily handle nested data structures.

```js
import oproxy, { number, string } from 'oproxy'

const src = {
  firstName: 'foo',
  lastName: 'bar',
  city: 'Boston',
  age: '25',
  rating: {
    rate: 3.9,
  },
}

const schema = {
  username: string('{firstName} {lastName}').capitalize(),
  city: string('city').lowerCase(),
  age: number('age').defaultValue('NOT_SET'),
  rate: number('rating.rate'),
}

oproxy(src, schema)
// { username: 'fooBar', city: 'boston', age: 25, rate: 3.9 }
```

## Installation

```bash
npm install oproxy --save
# or with yarn
yarn add oproxy
```

### Basic Example

Transform a simple list of users into a new format:

```javascript
import oproxy, { string } from 'oproxy';

const users = [
  { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' }
];

const schema = {
  fullName: string('name'),
};

const transformedUsers = oproxy(users, schema);
console.log(transformedUsers);
// Output: [{ fullName: 'Leanne Graham' }, { fullName: 'Ervin Howell' }]
```

## Advanced Examples

### Nested Structures 📂

Easily handle complex nested data with recursive schemas:

```javascript
import oproxy, { array, string } from 'oproxy';

const documentTree = {
  id: 'root',
  name: 'Documents',
  children: [
    { id: '1', name: 'Report', children: [{ id: '2', name: 'PDF' }] }
  ]
};

const nestedSchema = {
  userId: string('id').formatter(id => `user-${id}`),
  name: string('name').lowerCase(),
  children: array('children').proxy({ recursive: true })
};

const result = oproxy(documentTree, nestedSchema);
console.log(result);
// Output: Deeply transformed document tree with user IDs and names lowercased
```

### Numeric Operations 🔢

Perform dynamic calculations and format numeric data:

```javascript
import oproxy, { number } from 'oproxy';

const person = { birthYear: '1985', currentYear: '2023' };

const schema = {
  age: number('currentYear').subtract('birthYear'),
};

const computedData = oproxy(person, schema);
console.log(computedData);
// Output: { age: 38 }
```

### Advanced Array Manipulations 🔄

Manipulate and refine arrays with powerful operations:

```javascript
import oproxy, { array } from 'oproxy';

const teamData = {
  members: ['Alice', 'Bob', undefined, 'Charlie', null, 'Dave'],
};

const schema = {
  members: array('members').compact().unique().sort(),
};

const refinedTeam = oproxy(teamData, schema);
console.log(refinedTeam);
// Output: { members: ['Alice', 'Bob', 'Charlie', 'Dave'] }
```

## Contributing 🤝

We encourage contributions from the community to make Oproxy even better! Whether it's bug fixes, feature additions, or documentation improvements, all contributions are welcome.