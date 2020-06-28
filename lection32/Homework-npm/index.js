const differenceInCalendarDays = require('date-fns/difference_in_calendar_days');
const R = require('ramda');

const getMessage = R.ifElse(
  (days) => R.gt(days, 30),
  () => 'До конца курса ещё больше месяца',
  () => 'До конца курса осталось мало времени',
);

const now = new Date(Date.now());
const end = new Date(2020, 7, 17, 12);

const daysCount = differenceInCalendarDays(now, end);

console.log(getMessage(daysCount));