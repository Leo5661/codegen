/**
 * Checks if a given string is a valid package name.
 *
 * @param {string} name - The string to check.
 * @returns {boolean} True if the string is a valid package name, false otherwise.
 */

export const isValidPackageName = (name: string): boolean => {
  return /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(name);
};
