import { eventChannel } from "redux-saga/effects";

const THIRTY_SECONDS = 30000;

const decorateAction = action => ({ ...action, count: 0, version: 0 });

const actionRegistry = {
  actionRegister: {
    [THIRTY_SECONDS]: {}
  },
  registerAction(action) {
    const { interval, key } = action;
    // TODO fix this type saftey
    const exists = !!action[interval][key];
    if (exists) {
      this.actionRegister[interval][key].count++;
    } else {
      this.actionRegister[interval][key] = action;
    }
  },
  unRegisterAction(action) {
    const { interval, key } = action;

    if (ac)
    const { interval } = action;
    if (interval === THIRTY_SECONDS) {
    }
  },
  accessRegister(interval) {
    return Object.values(this.actionRegister[interval]);
  }
};

const channel = eventChannel(emitter => {
  setInterval(() => {
    emitter(THIRTY_SECONDS);
  }, THIRTY_SECONDS);
});

function* run() {
  const sup = channel();
  while (true) {
    yield channel.next();
  }
}

const rangeGen = (from = 1, to = 5) => {
  return {
    from,
    to,
    [Symbol.asyncIterator]() {
      return {
        currentNum: this.from,
        lastNum: this.to,
        async next() {
          await new Promise(resolve => setTimeout(resolve, 1000));
          if (this.currentNum <= this.lastNum) {
            return {
              done: false,
              value: this.currentNum++
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
  };
};

Promise.all(rangeGen());
