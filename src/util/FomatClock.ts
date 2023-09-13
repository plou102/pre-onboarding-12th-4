export const fomatClock = (value: string) => {
  const date = new Date(value);
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');

  return `${min}:${sec}`;
};
