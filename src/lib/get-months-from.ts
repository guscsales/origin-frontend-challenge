export default (date: Date, monthsAhead: number) => {
  const futureDate = new Date().setMonth(date.getMonth() + monthsAhead);
  const splittedLabels = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  })
    .format(futureDate)
    .split(' ');

  return { month: splittedLabels[0], year: splittedLabels[1] };
};
