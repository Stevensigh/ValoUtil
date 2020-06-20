import { objLookup } from 'shared/util/data';

describe('Object lookup', () => {
  const obj = {
    foo: { bar: 'baz' },
    baz: null,
    bar: undefined,
    qux: [1],
  };

  test('Existing property lookup', () => {
    expect(objLookup(obj, [])).toBe(obj);
    expect(objLookup(obj, ['foo'])).toEqual({ bar: 'baz' });
    expect(objLookup(obj, ['qux'])).toEqual([1]);
    expect(objLookup(obj, ['foo', 'bar'])).toBe('baz');
    expect(objLookup(obj, ['baz'])).toBeNull();
    expect(objLookup(obj, ['bar'])).toBeUndefined();
  });

  test('Default value fallback', () => {
    expect(objLookup(obj, ['foo', 'bar'], 'unused')).toBe('baz');
    expect(objLookup(obj, ['invalid'], 'default')).toBe('default');
    expect(objLookup(obj, ['invalid'])).toBeUndefined();
    expect(objLookup(obj, ['constructor'], 'default')).toBe('default');  // Object prototype member
    expect(objLookup(obj, ['foo', 'invalid'], 'default')).toBe('default');
    expect(objLookup(obj, ['baz', 'invalid'], 'default')).toBe('default');
    expect(objLookup(obj, ['qux', 'invalid'], 'default')).toBe('default');
    expect(objLookup(obj, ['foo', 'bar', 'invalid'], 'default')).toBe('default');
    expect(objLookup(obj, ['baz'], 'unused')).toBeNull();
    expect(objLookup(obj, ['bar'], 'unused')).toBeUndefined();
  });
});
