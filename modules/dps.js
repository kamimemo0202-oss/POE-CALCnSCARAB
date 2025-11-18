export function calcDPS(item) {
  if (!item.damage || !item.speed) return 0;
  return Math.round(item.damage * item.speed);
}
