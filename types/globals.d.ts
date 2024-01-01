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
     * Flip a string
     * @returns {string}
     * @example
     * "hello world".FLIP(); // dlrow olleh
     */
    FLIP(): string;
  }
}
export {};
