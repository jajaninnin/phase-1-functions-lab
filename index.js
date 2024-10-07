// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks >= 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  };
}

function distanceFromHqInFeet(blocks) {
  const value = distanceFromHqInBlocks(blocks);
  return value * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start - destination >= 0) {
    return (start - destination)*264;
  } else {
    return (destination - start)*264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  }
  if (distance < 2000) {
    return (distance - 400) * 0.02;
  }
  if (distance < 2500) {
    return 25;  
  }
  return 'cannot travel that far';
}
