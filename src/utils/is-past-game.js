module.exports = function isPastGame(data) {
  return data.teamOneResult.length > 0 && data.teamTwoResult.length > 0;
};
