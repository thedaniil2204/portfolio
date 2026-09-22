const photoTiles = [
  'photoTileLarge',
  'photoTileSmall',
  'photoTileSmall',
  'photoTileMedium',
  'photoTileMini',
  'photoTileMini',
  'photoTileTall',
  'photoTileWide',
  'photoTileLarge',
  'photoTileTall',
  'photoTileShort',
];

export function PhotoGrid() {
  return (
    <div className="masonryGrid" aria-label="Галерея работ">
      {photoTiles.map((tileClass, index) => (
        <div className={`photoTile ${tileClass}`} key={`${tileClass}-${index}`} />
      ))}
    </div>
  );
}
