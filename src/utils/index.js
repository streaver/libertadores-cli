module.exports = {
  isPastGame(data) {
    return data.teamOneResult.length > 0 && data.teamTwoResult.length > 0;
  },
};
