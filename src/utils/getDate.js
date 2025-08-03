export const getDate = () => {
  const todaysDate = new Date();

  return todaysDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};