// Code your solution in this file!
//describe function named 'distanceFromHqInBlocks'
//it should return distance in blocks
//i.e; expect(distanceFromHqInBlocks(43)).to.equal(1)
//ALSO; expect(distanceFromHqInBlocks(34)).to.equal(8)[**i can use conditionals]
function distanceFromHqInBlocks(pickupBlock){
  const hqBlock = 42
  let distance;
  if (pickupBlock < hqBlock) {
    distance = hqBlock - pickupBlock
  }
  else{
    distance = pickupBlock - hqBlock
  }
  return distance
}
//confirming function returns correct values;
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))


//describe function named 'distanceFromHqInFeet'
//should return distance in feet, where; 1 block=264 feet
function distanceFromHqInFeet(pickupBlock){
  let distanceInFeet = distanceFromHqInBlocks(pickupBlock) * 264
  return distanceInFeet
}
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

//describe function named 'distanceTravelledInFeet'
//should return distance travelled in feet
//i.e:expect(distanceTravelledInFeet(43, 48)).to.equal(1320)
let distanceTravelled;
function distanceTravelledInFeet(pickupBlock, destination){
  if (destination > pickupBlock){
    distanceTravelled = (destination - pickupBlock) * 264
  }
  else{
    distanceTravelled = (pickupBlock - destination) * 264
  }
  return distanceTravelled
}
//confirming function works:
console.log(distanceTravelledInFeet(43, 38))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

//describe function named 'calculatesFarePrice'
function calculatesFarePrice (pickupBlock, destination) {
  const distanceForPrice = distanceTravelledInFeet(pickupBlock, destination);

  if (distanceForPrice <= 400) {
    return 0;
  } else if (distanceForPrice > 400 && distanceForPrice <= 2000) {
    return .02 * (distanceForPrice - 400);
  } else if (distanceForPrice > 2000 && distanceForPrice < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
//confirming function works as intended for all conditions:
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))