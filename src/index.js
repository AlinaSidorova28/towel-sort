
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return [];
  }
  let new_matrix = [];
  for(let i=0; i<matrix.length; i++){
    if(i%2 === 0){
      new_matrix.push(matrix[i]);
    }
    else{
      new_matrix.push(matrix[i].reverse());
    }
  }
  return [].concat(...new_matrix);
}
