// src/services/localStorageService.js

/**
 * Saves an item to localStorage.
 * @param {string} key - The key under which to save the item.
 * @param {any} value - The value to save (will be stringified).
 */
export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  /**
   * Retrieves an item from localStorage.
   * @param {string} key - The key to retrieve the item from.
   * @returns {any} - The parsed value from localStorage.
   */
  export function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  /**
   * Deletes an item from localStorage.
   * @param {string} key - The key to delete the item from.
   */
  export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
  }
  