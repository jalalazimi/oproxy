# Array

Transforms array values into different shapes.

## array(key: string)

Gets the value of key and transform it into an array.

```js
import oproxy, { array } from 'oproxy';

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
};

const schema = {
  list: array('users'),
};

oproxy(src, schema);
// { list: ['foo', 'bar', 'baz', 'qux'] }
```

## Methods

### .chunk(size: number)

Returns an array of elements split into groups the length of size.

```js
import oproxy, { array } from 'oproxy';

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
};

const schema = {
  users: array('users').chunk(2),
};

oproxy(src, schema);
// { users: [['foo', 'bar'],['baz', 'qux']] }
```

### .compact()

Removes all falsy values from an array. In JavaScript, `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsy.

```js
import oproxy, { array } from 'oproxy';

const src = {
  cities: ['Dublin', 'London', undefined, 'New York', false],
};

const schema = {
  cities: array('cities').compact(),
};

oproxy(src, schema);
// { users: ['Dublin', 'London', 'New York'] }
```

### .drop(number= 1)

Drops first n elements. If n is not specified, it will drop the first element.

```js
import oproxy, { array } from 'oproxy';

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
};

const schema = {
  users: array('users').drop(2),
};

oproxy(src, schema);
// { users: ['baz', 'qux'] }
```

### .filter(fn: function)

Returns the elements of an array that meet the condition specified by a function. It's a wrapper of `Array.prototype.filter`.

```js
import oproxy, { array } from 'oproxy';

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
};

const schema = {
  users: array('users').filter(user => user !== 'bar'),
};

oproxy(src, schema);
// { users: ['foo', 'baz', 'qux'] }
```

### .sort(compareFn?: (firstElement: any, secondElement: any) => number)

Returns sorted array. It's using native `Array.prototype.sort` method. So you can pass a custom compare function.

```js
import oproxy, { array } from 'oproxy';

const src = {
  users: ['foo', 'bar', 'baz', 'qux'],
};

const schema = {
  users: array('users').sort(),
};

oproxy(src, schema);
// { users: ['bar', 'baz', 'foo', 'qux'] }
```
