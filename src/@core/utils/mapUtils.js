import explodeArray from '../../utils/explodeArray';

/**
 * Creates map matrix from data
 * @param {Object} mapObject Initial map object
 * @param {String} pathLayerName Map layer contains path
 * @returns Matrix of map and it's properties
 */
// eslint-disable-next-line import/prefer-default-export
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
