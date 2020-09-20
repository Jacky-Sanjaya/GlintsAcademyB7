class Student {
  constructor(name, age, birth, gender, id, hobi) {
    this.name = name;
    this.age = age;
    this.birth = birth;
    this.gender = gender;
    this.id = id;
    this.hobi = [hobi];
  }
  get data() {
    return `${this.name} ${this.age} ${this.birth} ${this.gender} ${this.id} ${this.hobi}`;
  }
  set nama(name_Baru) {
    this.name = name_Baru;
  }
  set umur(name_Age) {
    this.age = name_Age;
  }
  set lahir(name_Birth) {
    this.birth = name_Birth;
  }
  set kelamin(name_gender) {
    this.gender = name_gender;
  }
  set ide(name_id) {
    this.id = name_id;
  }
  addhobi(hobibaru) {
    this.hobi.push(hobibaru);
  }
  removeHobi(hapushobi) {
    for (let i = 0; i < this.hobi.length; i++) {
      if (this.hobi[i] === hapushobi) {
        this.hobi.splice(i, 1);
      }
    }
  }
}

// const murid = new Student("asep", 12, 1457, "cowok", 125267, ["makan"]);
const murid = new Student(
  "Jacky",
  17,
  "16-11-2002",
  "cowok",
  12526789,
  "basket"
);
console.log(murid);
murid.name = "NewJacky";
murid.addhobi("Maen");
murid.addhobi("Tidor");
murid.removeHobi("makan");
console.log(murid);
