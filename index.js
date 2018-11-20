// Write your solution in this file!

var driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  
}