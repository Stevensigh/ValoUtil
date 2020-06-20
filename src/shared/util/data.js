/**
 * Safely retrieve the value associated with a path in an object.
 *
 * @param {Object} obj Root object.
 * @param {Array} path Array of sequential paths to look up in the object.
 * @param {*} defaultValue Optional default value to return if the desired path does not resolve to
 *                         any value.
 * @returns {*} Item at the requested lookup path; undefined if the path points to no item.
 */
export const objLookup = (obj, path, defaultValue = undefined) => {
  if (!path.length) {
    return obj;
  }

  const [current, ...rest] = path;

  if (obj && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, current)) {
    return objLookup(obj[current], rest, defaultValue);
  }

  return defaultValue;
};

export default undefined;
