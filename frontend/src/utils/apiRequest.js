// Import datas
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../dataMock.js';

import { formatedPerf, formatedDate } from './formatData.js';

// Import essentiels to use axios
import axios from "axios";

const apiBase = axios.create({
  baseURL: `http://localhost:3000`
});

const baseURL = apiBase.defaults.baseURL;

// Variable, to choose between API Data or Mock Data. True you use api data false use mock data.
const usingApi = true;

/**
 * Get Full data of user
 * @param {number} User id
 * @returns {object} Response
 * @author Dylan
 * @version 1.0
 */


export const getUserInfos = async(id) => {
  if(usingApi === true) {
    try {
      const result = await apiBase.get(`${baseURL}/user/${id}`);
      return result.data;
    } catch(err) {
        console.log(err)
    }
  } else {
    const result = USER_MAIN_DATA.find((elm) => elm.id === Number(id));
    return {data:result}
  }
};

/**
 * Get user activity
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserActivity = async(id) => {
  if(usingApi === true) {
    try {
      const result = await apiBase.get(`${baseURL}/user/${id}/activity`);
      return result.data;
    } catch(err) {
        console.log(err)
    }
  } else {
    const result = USER_ACTIVITY.find((elm) => elm.userId === Number(id))
    return {data:result}
  }
};

/**
 * Get user average session
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserAverageSessions = async(id) => {
  let userSession = null;
  if(usingApi === true) {
    try {
      const result = await apiBase.get(`${baseURL}/user/${id}/average-sessions`);
      userSession = result.data.data.sessions;
    } catch(err) {
        console.log(err)
    }
  } else {
    userSession = USER_AVERAGE_SESSIONS.find((elm) => elm.userId === Number(id))
    userSession = userSession.sessions;
  }
  return formatedDate(userSession)
};

/**
 * Get user performance
 * @param {number} id User id
 * @returns {object} Response
 * @author Dylan
 * @version 1.0
 */

export const getUserPerformance = async(id) => {
  let userPerf = null;
  if(usingApi === true) {
    try {
      const getData = await apiBase.get(`/user/${id}/performance`);
      userPerf = getData.data.data;
    } catch(err) {
        console.log(err)
    }
  } else {
    userPerf = USER_PERFORMANCE.find((elm) => elm.userId === Number(id));
  }
  return formatedPerf(userPerf)
};