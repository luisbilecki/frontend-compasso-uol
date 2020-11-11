import usersApi from '../api/user';

const getUserDetails = async (username) => {
  const [profile, repos, starred] = await Promise.all([
    usersApi.getUser(username), // profile
    usersApi.getRepos(username), // repositories
    usersApi.getStarred(username) // starred
  ])

  return {
    profile,
    repos,
    starred
  }
}

export default { getUserDetails }