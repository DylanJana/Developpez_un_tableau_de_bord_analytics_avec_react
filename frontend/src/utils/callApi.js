import axios from "axios";

const apiBase = axios.create({
  baseURL: `http://localhost:3000`
});

const baseURL = apiBase.defaults.baseURL;

/** Get user Infos
 * @param {string} 
 * @returns {Array} Data User info
 */

export const getUserInfos = async(id) => {
  try {
    const result = await apiBase.get(`/user/${id}`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
}

/** Get user Activity
 * @param {string} User ID
 * @returns {Array} Data Activity
 */

export const getUserActivity = async(id) => {
  try {
    const result = await apiBase.get(`/user/${id}/activity`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
};

/** Get user Average Sessions
 * @param {string} User ID
 * @returns {Array} Data Session
 */

export const getUserAverageSessions = async(id) => {
  try {
    const result = await apiBase.get(`/user/${id}/average-sessions`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
};

/** Get user Performance
 * @param {string} User ID
 * @returns {Array} Data Perfomance
 */

export const getUserPerformance = async(id) => {
  try {
    const result = await apiBase.get(`/user/${id}/performance`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
};
