export default (monthsAhead: number) => {
  const currentDate = new Date();
  const futureDate = new Date().setMonth(currentDate.getMonth() + monthsAhead);
  const splittedLabels = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  })
    .format(futureDate)
    .split(' ');

  return { month: splittedLabels[0], year: splittedLabels[1] };
};
