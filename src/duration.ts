export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Negative duration not allowed");
  }

  const totalSeconds = Math.round(seconds);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  let result = "";

  if (hours > 0) result += `${hours}h`;
  if (minutes > 0) result += `${minutes}m`;
  if (secs > 0 || result === "") result += `${secs}s`;

  return result;
}
