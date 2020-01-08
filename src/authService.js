const account = {
  wanglihe2010: "123456"
}
const authService = (username, password) => {
  if(username in account) {
    return true;
  } else {
    return false;
  } 
}

export default authService;