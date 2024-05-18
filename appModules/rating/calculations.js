function createRating(obj,weight){
    obj.design * weight.design +
    obj.gameplay * weight.gameplay +
    obj.idea + weight.idea
};

function updateRating(array, id, rating) {
    const index = array.findIndex((item) => item.id === id);
    array[index].rating += rating;
    return array;
  }

  module.exports = createRating;
  module.exports = updateRating;