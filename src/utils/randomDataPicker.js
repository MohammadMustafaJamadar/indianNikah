const getRandomElements = (array, elements) => {
  const result = [];

  for (let i = 0; i < elements; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomObject = array[randomIndex];
    if (!result.some((obj) => obj.id === randomObject.id)) {
      result.push(randomObject);
    }else{
      i --;
    }
  }
  return result;
};

export default getRandomElements;