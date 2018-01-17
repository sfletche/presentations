// my generator
function* generatorExample(urlA, urlB) {
  const resultFromA = yield asyncRequest( urlA );
  const data = JSON.parse( resultFromA );
  const resultFromB = yield asyncRequest(`${urlB}?id=${data.id}`);
  return JSON.parse( resultFromB );
} 
