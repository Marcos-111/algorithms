String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(
      function(split_string: string): string {
      return split_string.charAt(0).toUpperCase() + split_string.slice(1);
    })
    .join(' ');
};
