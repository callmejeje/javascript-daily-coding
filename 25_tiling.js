let tiles = [0, 1, 2];

let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  if (tiles[n]) return tiles[n];
  tiles.push(tiling(n - 1) + tiling(n - 2));

  return tiles[n];
};
