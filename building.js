floorNumber = (lockerNumber) => {
  let lockerSum = 0;
  let arrayIndex = 0;
  const lockerArray = [9,3,7,2];

  for (let i = 1; i; i++){
    lockerSum += lockerArray[arrayIndex];
    if(lockerSum> lockerNumber){
      return i;
    }

    if(arrayIndex !== lockerArray.length -1){
      arrayIndex++;
    } else {
      arrayIndex = 0;
    }
  }
}
console.log(floorNumber(20));