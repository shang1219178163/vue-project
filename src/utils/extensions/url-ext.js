
URL.prototype.toEntries = function() {
  let result = Object.fromEntries(this.searchParams);
  return result;
}