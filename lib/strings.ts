// Capitalize first letter of a string
export const capitalize = () => {
  String.prototype.CAPITALIZE = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
};

// flip a string
export const flip = () => {
  String.prototype.FLIP = function () {
    return this.split("").reverse().join("");
  };
};

export default { capitalize, flip };
