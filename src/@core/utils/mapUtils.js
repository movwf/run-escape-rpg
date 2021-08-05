/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import explodeArray from '../../utils/explodeArray';
import getPositionOffsets from '../../utils/getPositionOffsets';

/**
 * Creates map matrix from data
 * @param {Object} mapObject Initial map object
 * @param {String} pathLayerName Map layer contains path
 * @returns Matrix of map and it's properties
 */
export const createMapData = (mapObject, pathLayerName) => {
  const { layers, tileheight, tilewidth } = mapObject;
  // Select path layer
  const pathLayer = layers.filter((layer) => layer.name === pathLayerName)[0];

  return {
    map: explodeArray(pathLayer.data, pathLayer.width),
    height: pathLayer.height,
    width: pathLayer.width,
    tileHeight: tileheight,
    tileWidth: tilewidth,
  };
};

/**
 * Calculates starting position of the player based on path layer of map
 * @param {Object} pathLayerData Path layer object
 * @returns Start position of player
 */
export const getStartPosition = (pathLayerData) => {
  const { map, height, width, tileHeight, tileWidth } = pathLayerData;
  let firstAvailableTile = { x: 0, y: 0 };

  // Look for first movable tile location
  search: for (let i = 0; i < height; i += 1) {
    for (let k = 0; k < width; k += 1) {
      if (map[i][k] === 0) {
        firstAvailableTile = { x: i, y: k };
        break search;
      }
    }
  }

  return {
    x: firstAvailableTile.x * tileHeight,
    y: firstAvailableTile.y * tileWidth,
  };
};

/**
 * Calculates player's current position
 * @param {Ref<HTMLElement>} mapRef Map reference
 * @param {Ref<HTMLElement} charRef Player reference
 * @returns Player's position
 */
export const getPlayerPosition = (mapRef, charRef) => {
  const { top: mapOffsetTop, left: mapOffsetLeft } = getPositionOffsets(mapRef);
  const { top: charOffsetTop, left: charOffsetLeft } = getPositionOffsets(charRef);

  return { x: charOffsetTop - mapOffsetTop, y: charOffsetLeft - mapOffsetLeft };
};
