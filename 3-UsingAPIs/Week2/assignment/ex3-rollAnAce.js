import { rollDie } from '../../helpers/pokerDiceRoller.js';
/** @import {DieFace} from "../../helpers/pokerDiceRoller.js" */

/**
 * Rolls a die until the desired value is rolled.
 * @param {DieFace} desiredValue
 * @returns {Promise<DieFace>}
 */
export async function rollDieUntil(desiredValue) {
  let value = false;
  do {
    value = await rollDie();
  } while (!value);
  return true;
}

async function main() {
  try {
    if (await rollDieUntil('ACE')) {
      (results) => console.log('Resolved!', results);
    }
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
