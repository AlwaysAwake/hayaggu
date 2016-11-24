import moment from 'moment-timezone';

import { week } from '../constants/formats';


const clientTimezone = 'Etc/UTC';
export const convertKoreanFormat = date => {
  return moment.tz(date, clientTimezone).format('YYYY년 M월 D일 hh:mmA');
}

export const getWeekRange = (date, offset) => {
  return {
    start: moment(date.getTime() + week * offset).startOf(offset === 0 ? 'day' : 'week').format('YYYY-MM-DD'),
    end: moment(date.getTime() + week * offset).endOf('week').format('YYYY-MM-DD'),
  };
}