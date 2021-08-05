/**
 * Explode array into divisions
 * @param {Array<any>} array Initial array
 * @param {*} divSize Division size
 * @returns Array of divided arrays
 */
const explodeArray = (array, divSize) => {
  if (divSize > array.length) return 'Invalid division size!'; // Prevent oversetting the divSize

  const tempArray = [];
  let tempDiv = [];

  for (let i = 0; i < array.length; i += 1) {
    tempDiv.push(array[i]);
    // If temp div is full
    if (tempDiv.length === divSize) {
      tempArray.push(tempDiv);
      tempDiv = [];
    }
    // Last not full div
    if (i === array.length - 1 && tempDiv.length !== 0) tempArray.push(tempDiv);
  }

  return tempArray;
};

export default explodeArray;
