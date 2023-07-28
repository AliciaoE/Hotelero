class Hotel {
  constructor(nom, habitacions, plantes, superficieTotal) {
    this.nom = nom;
    this.habitacions = habitacions;
    this.plantes = plantes;
    this.superficieTotal = superficieTotal;
  }

  getNom() {
    return this.nom;
  }

  setNom(nom) {
    this.nom = nom;
  }

  getNumHabitacions() {
    return this.habitacions;
  }

  setNumHabitacions(habitacions) {
    this.habitacions = habitacions;
  }

  getNumPlantes() {
    return this.plantes;
  }

  setNumPlantes(plantes) {
    this.plantes = plantes;
  }

  getSuperficieTotal() {
    return this.superficieTotal;
  }

  setSuperficieTotal(superficieTotal) {
    this.superficieTotal = superficieTotal;
  }


toString() {

    return ( "Nom:" + this.nom + " habitacions " + this.habitacions +  " - plantes: "  + this.plantes + " - superficie total: " + this.superficieTotal) + "<br>";

  }

  calcularManteniment() {
    const num_persones = Math.ceil(this.num_habitacions / 20);
    const cost_total = num_persones * 1500;
    console.log(`Són necessàries ${num_persones} persones per atendre el servei d'habitacions de l'hotel i el cost total destinat al servei és de ${cost_total} € al mes.`);
  }
}


