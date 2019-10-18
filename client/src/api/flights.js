import axios from 'axios';
import moment from 'moment';

const params = {
  originPlace: 11235,
  destinationPlace: 13554,
  outboundDate: moment().startOf('isoWeek').add(1, 'week').format('YYYY-MM-DD'),
  inboundDate: moment().startOf('isoWeek').add(8, 'days').format('YYYY-MM-DD'),
};

export default {
  fetch: () => axios.get('http://localhost:4000/api/search', { params }),
};
