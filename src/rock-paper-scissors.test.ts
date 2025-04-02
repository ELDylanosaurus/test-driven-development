import { play } from './rock-paper-scissors';

describe('Rock Paper Scissors', () => {
  test('Player 1 wins', () => {
    expect(play('rock', 'scissors')).toBe(1);
  });

  test('Player 2 wins', () => {
    expect(play('rock', 'paper')).toBe(2);
  });

  test('Draw', () => {
    expect(play('scissors', 'scissors')).toBe(0);
  });

  test('Ignore case and whitespace', () => {
    expect(play('  RoCk  ', '  PaPer ')).toBe(2);
    expect(play('  ScIsSorS ', ' rock ')).toBe(2);
  });

  test('Throws error on invalid move (player 1)', () => {
    expect(() => play('banana', 'rock')).toThrow('Ungültiger Spielzug von Spieler 1: "banana"');
  });

  test('Throws error on invalid move (player 2)', () => {
    expect(() => play('rock', 'laser')).toThrow('Ungültiger Spielzug von Spieler 2: "laser"');
  });
});
