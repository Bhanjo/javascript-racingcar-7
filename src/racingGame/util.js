/**
 * @param {string} string
 * @param {string | RegExp} keyword
 */
export const splitByKeyword = (string, keyword) => {
  const splitted = string
    .split(keyword)
    .map((splittedString) => splittedString.trim());
  return splitted;
};
