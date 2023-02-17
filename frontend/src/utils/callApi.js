import axios from "axios";

const apiBase = axios.create({
  baseURL: `http://localhost:3000`
});

const baseURL = apiBase.defaults.baseURL;

/** Get user Infos
 * @param {string} User ID
 * @returns {Array} Data User info
 * @author Dylan
 * @version 1.0
 */

export const getUserInfos = async(id) => {
  try {
    const result = await apiBase.get(`${baseURL}/user/${id}`);
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
    const result = await apiBase.get(`${baseURL}/user/${id}/activity`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
};

/** Get user Average Sessions
 * @param {string} User ID
 * @returns {Array} Data Session
 * @author Dylan
 * @version 1.0
 */

export const getUserAverageSessions = async(id) => {
  try {
    const result = await apiBase.get(`${baseURL}/user/${id}/average-sessions`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
};

/** Get user Performance
 * @param {string} User ID
 * @returns {Array} Data Perfomance
 * @author Dylan
 * @version 1.0
 */

export const getUserPerformance = async(id) => {
  try {
    const result = await apiBase.get(`/user/${id}/performance`);
    return result.data;
  } catch(err) {
      console.log(err)
  }
};
