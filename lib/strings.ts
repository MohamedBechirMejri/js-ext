// Capitalize first letter of a string
export const capitalize = () => {
  String.prototype.CAPITALIZE = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
};

// reverse a string
export const reverse = () => {
  String.prototype.REVERSE = function () {
    return this.split("").reverse().join("");
  };
};

export default { capitalize, reverse };
