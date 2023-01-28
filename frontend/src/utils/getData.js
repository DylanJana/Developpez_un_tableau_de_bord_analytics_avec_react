import { 
  getUserInfos, 
  getUserActivity, 
  getUserAverageSessions,
  getUserPerformance
} from "./dataMockCall";

// import { 
//   getUserInfos, 
//   getUserActivity, 
//   getUserAverageSessions,
//   getUserPerformance
// } from "./callApi";

/**
 * @param {string} type of data
 * @param {number} id of user
 * @returns {Array} data
 */

export const getData = async(type, id) => {
  let data = [];

  switch(type) {
    case 'USER_MAIN_DATA':
      data = await getUserInfos(id);
      break
    case 'USER_ACTIVITY':
      data = await getUserActivity(id);
      break
    case 'USER_AVERAGE_SESSIONS':
      data= await getUserAverageSessions(id);
      break
    case 'USER_PERFORMANCE':
      data = await getUserPerformance(id);
      break
    default:
      // do nothing
  }
  return data;
};