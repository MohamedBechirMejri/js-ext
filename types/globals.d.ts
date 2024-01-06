declare global {
  interface String {
    /**
     * Capitalize first letter of a string
     * @returns {string}
     * @example
     * "hello world".CAPITALIZE(); // Hello world
     */
    CAPITALIZE(): string;

    /**
     * Reverse a string
     * @returns {string}
     * @example
     * "hello world".REVERSE(); // dlrow olleh
     */
    REVERSE(): string;
  }
}
export {};
