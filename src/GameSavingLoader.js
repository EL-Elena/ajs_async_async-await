import read from './reader';
import json from './parser';
import GameSaving from './index';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return Object.assign(new GameSaving(), JSON.parse(value));
  }
}

(async () => {
  try {
    const newSaving = await GameSavingLoader.load();
    return newSaving;
  } catch (err) {
    return err;
  }
})();
