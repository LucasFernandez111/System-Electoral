const percentageVotes = (cantOne, cantTwo, total) => {
  const percentageOne = Math.round((cantOne / total) * 100);
  const percentageTwo = Math.round((cantTwo / total) * 100);

  return { percentageOne, percentageTwo };
};

export default percentageVotes;
