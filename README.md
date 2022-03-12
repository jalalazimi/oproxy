# oproxy

Oproxy is a schema-based data mapper. Just define your schema, then transform it into that shape. Oproxy's schema is simple, intuitive, flexible and readable.

```js
import oproxy, { string, number } from 'oproxy';

const src = {
  firstName: 'foo',
  lastName: 'bar',
  city: 'Boston',
  age: '25',
  rating: {
    rate: 3.9,
  },
};

const schema = {
  username: string('{firstName} {lastName}').capitalize(),
  city: string('city').lowerCase(),
  age: number('age').defaultValue('NOT_SET'),
  rate: number('rating.rate'),
};

oproxy(src, schema);
// { username: 'fooBar', city: 'boston', age: 25, rate: 3.9 }
```

## Installation

```bash
npm install oproxy --save
# or with yarn
yarn add oproxy
```

## Table of Contents

- [API](#api)
  - [`oproxy`](#oproxysrc-object-schema-schema)
  - [`array`](#oproxysrc-object-schema-schema)


## API

### `oproxy(src: object, schema: Schema)`

For mapping `object` based on `schema`, you can use `oproxy` function.

```js
import oproxy, { string, number } from 'oproxy';

const src = {
  firstName: 'foo',
  lastName: 'bar',
};

const schema = {
  username: string('{firstName} {lastName}').capitalize(),
};

oproxy(src, schema);
// { username: 'fooBar'}
```


### array

Handles array based on schema.

```js
import oproxy, { array } from 'oproxy';

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
};

const schema = {
  list: array('users').map(item => item.toUpperCase()),
};

oproxy(src, schema);
// { list: ['FOO', 'BAR', 'BAZ', 'QUX'] }
```

[Full Documentation](/src/plugins/array/README.md)