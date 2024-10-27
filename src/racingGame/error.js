/**
 * @param {string} message
 * @returns {Error}
 * */
export const PrintError = (message) => {
  throw new Error(`[ERROR] ${message}`);
};
