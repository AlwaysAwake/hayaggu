import moment from 'moment';


export const convertKoreanFormat = date => {
  return moment(date).format('YYYY년 M월 D일 H시 mm분');
}