export function play(player1: string, player2: string): number {
  const normalize = (move: string) => move.trim().toLowerCase();

  const validMoves = ['rock', 'paper', 'scissors'];
  const p1 = normalize(player1);
  const p2 = normalize(player2);

  if (!validMoves.includes(p1)) {
    throw new Error(`Ungültiger Spielzug von Spieler 1: "${player1}"`);
  }

  if (!validMoves.includes(p2)) {
    throw new Error(`Ungültiger Spielzug von Spieler 2: "${player2}"`);
  }

  if (p1 === p2) return 0;

  const winsAgainst: Record<string, string> = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  return winsAgainst[p1] === p2 ? 1 : 2;
}