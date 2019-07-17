function makeAddress(element){
  let tmp = element;
  tmp.location1 = element.location1.levelOneDiv + " " + element.location1.levelTwoDiv + " " + element.location1.place;
  return tmp; 
}

module.exports.function = function findStore (location1, place,where1, addvoca) {
  const fail = require('fail');
  const console = require('console');
  //다른 경로의 파일을 가져옵니다.
  let fakeData = require("./data/hydrogen.js");

  if(!location1 && !place){
    throw fail.checkedError("No Result", "NoResult");  
  }
   
  console.log(location1);
  console.log(place);
  
  let result = [];
  
  fakeData.forEach(function (element){
    if(!location1){
      if(element.location1.place == place){
        result.push(makeAddress(element));
      }
    }else{
      if(!location1.levelOne){
        if(!location1.subLocalityOne){
          if(location1.locality.name == element.location1.levelOneDiv)
            result.push(makeAddress(element));
        }else{
          if(location1.locality.name == element.location1.levelOneDiv && location1.subLocalityOne.name == element.location1.levelTwoDiv)
            result.push(makeAddress(element));     
        }
      }else{
        if(!location1.locality){
          if(location1.levelOne.name == element.location1.levelOneDiv)
            result.push(makeAddress(element));
        }else{
          if(location1.levelOne.name == element.location1.levelOneDiv && location1.locality.name == element.location1.levelTwoDiv)
            result.push(makeAddress(element));
        }
      } 
    }
  });
  
  console.log(result);

  return result;
}