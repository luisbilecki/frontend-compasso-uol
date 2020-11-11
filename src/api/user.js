import axios from './base'

const getUser = async username => {
  return axios
    .get(`/users/${username}`)
    .then(res => res.data);
};

const getRepos = async username => {
  return axios
    .get(`/users/${username}/repos`)
    .then(res => res.data);
};

const getStarred = async username => {
  return axios
    .get(`/users/${username}/starred`)
    .then(res => res.data);
};

export default { getUser, getRepos, getStarred };