import GameSavingLoader from './GameSavingLoader';

export default async function saving() {
  try {
    const value = await GameSavingLoader.load();
    return value;
  } catch (error) {
    return 'err';
  }
}
