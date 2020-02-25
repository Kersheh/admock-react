const development = process.env.NODE_ENV === 'development';

export enum LogLevel {
  INFO,
  LOG,
  WARN,
  ERROR
}

export default {
  log(level: LogLevel, ...msgs: Array<any>) {
    switch(level) {
      case LogLevel.INFO:
        if(development) {
          console.info(...msgs);
        }
        break;
      case LogLevel.LOG:
        if(development) {
          console.log(...msgs);
        }
        break;
      case LogLevel.WARN:
        if(development) {
          console.warn(...msgs);
        }
        break;
      case LogLevel.ERROR:
        console.error(...msgs);
        break;
    }
  }
};
