// src/utils/helpers.js

/**
 * Formats a JavaScript Date object into a readable string format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date as a string.
 */
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  /**
   * Generates a unique ID for new notes.
   * @returns {string} - A unique identifier.
   */
  export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  