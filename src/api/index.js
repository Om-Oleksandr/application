import queryString from "query-string";
import { configRandomUser } from "../configs";
/**
 *
 * @param {object} options
 * @param {number} options.page default 1
 * @param {string} options.format default json
 * @param {string} options.nat default uk
 * @param {number} options.results default 10
 * @param {string} options.seed default fd2022-2-ajax
 * @returns
 */

export const getRandomUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: configRandomUser.FORMAT,
    results: configRandomUser.AMOUNT,
    seed: configRandomUser.API_KEY,
    gender: "male", //configRandomUser.GENDER,
    // inc: "gender,name,nat,login,email",
  };
  const resOptions = {
    ...defaultOptions,
    ...options,
  };
  return fetch(
    `${configRandomUser.BASE_URL}?${queryString.stringify(resOptions)}`
  ).then((response) => response.json());
};
