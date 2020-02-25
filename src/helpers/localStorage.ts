import logger, { LogLevel } from './logger';

const user = 'default'; // TODO: Pull active user

interface UserStorage {
  [key: string]: any;
}

let userStorage: UserStorage = {};

export default {
  setLocalStorage: (key: string, props = {}) => {
    userStorage[key] = props;
    localStorage.setItem('default', JSON.stringify(userStorage));
    logger.log(LogLevel.INFO, `Set local userStorage for user ${user}:`, userStorage);
  },
  getLocalStorage: (key: string) => {
    userStorage = JSON.parse(localStorage.getItem('default') || '{}');
    logger.log(LogLevel.INFO, `Loaded local userStorage for user ${user}:`, userStorage);
    return userStorage[key] ?? {};
  },
  clearLocalStorage: () => {
    userStorage = {};
    localStorage.clear();
    logger.log(LogLevel.INFO, `Cleared local userStorage for user ${user}:`);
  },
};
