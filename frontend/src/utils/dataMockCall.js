// Import datas
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './dataMock';

/**
 * Get Full data of user
 * @param {number} User id
 * @returns {object} Response
 */

export const getUserInfos = async(id) => {
  try {
    const result = USER_MAIN_DATA.find((elm) => elm.id === Number(id))
    return {data:result}

  } catch (err) {
      console.log(err)
  }
};

/**
 * Get user activity
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserActivity = async(id) => {
  try {
    const result = USER_ACTIVITY.find((elm) => elm.id === Number(id))
    return {data:result}

  } catch (err) {
      console.log(err)
  }
};

/**
 * Get user average session
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserAverageSessions = async(id) => {
  try {
    const result = USER_AVERAGE_SESSIONS.find((elm) => elm.id === Number(id))
    return {data:result}

  } catch (err) {
      console.log(err)
  }
};

/**
 * Get user performance
 * @param {number} id User id
 * @returns {object} Response
 */

export const getUserPerformance = async(id) => {
  try {
    const result = USER_PERFORMANCE.find((elm) => elm.id === Number(id))
    return {data:result}

  } catch (err) {
      console.log(err)
  }
};