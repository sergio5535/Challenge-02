function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for(let i in cars) {
    if(cars[i].available === true) {
      // console.log(cars[i]);
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
