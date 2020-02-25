const user = 'default'; // TODO: Pull active user

interface UserStorage {
  [key: string]: any;
}

let userStorage: UserStorage = {};

export default {
  setLocalStorage: (key: string, props = {}) => {
    userStorage[key] = props;
    localStorage.setItem('default', JSON.stringify(userStorage));
    console.log(`Set local userStorage for user ${user}:`, userStorage);
  },
  getLocalStorage: (key: string) => {
    userStorage = JSON.parse(localStorage.getItem('default') || '{}');
    console.log(`Loaded local userStorage for user ${user}:`, userStorage);
    return userStorage[key] ?? {};
  },
  clearLocalStorage: () => {
    userStorage = {};
    localStorage.clear();
    console.log(`Cleared local userStorage for user ${user}:`);
  },
};
