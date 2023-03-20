import axios from "axios";
const url = `https://www.indianikah.com/profiles/api/list/`;

const fetchUserData = async () => {
  try {
    return await axios.get(url);
  } catch (error) {
    if (error) throw error;
  }
};

const NextUsersData = async (pageNumber) => {
  try {
    return await axios.get(`${url}?page=${pageNumber}`);
  } catch (error) {
    if (error) throw error;
  }
};

const PrevUsersData = async (pageNumber) => {
  try {
    return await axios.get(`${url}/?page=${pageNumber}`);
  } catch (error) {
    if (error) throw error;
  }
};
export { fetchUserData ,NextUsersData,PrevUsersData};
