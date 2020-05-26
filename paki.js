class Pakiman
{
  constructor(n, v, a) //nombre, vida ataque
  {
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
  }
}

var cauchin = new Pakiman("cauchin", 100, 30);//100 de vida, ataque de 30
var pokacho = new Pakiman("Pokacho", 80, 50);// 80 de vida, 50 de vida
var tocinauro = new Pakiman("Tocinauro", 120, 40);//120 de vida atqu de 40
console.log(cauchin, pokacho, tocinauro);
