function calcularGasto(hotel) {
    const num_persones = Math.ceil(hotel.getNumHabitacions() / 20);
    const cost_total = num_persones * 1500;
    return cost_total;
  }
 