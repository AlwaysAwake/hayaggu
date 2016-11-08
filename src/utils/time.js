import moment from 'moment-timezone';


const clientTimezone = 'Etc/UTC';
export const convertKoreanFormat = date => {
  return moment.tz(date, clientTimezone).format('YYYY년 M월 D일 A H시 mm분');
}