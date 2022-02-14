class DispositivoEntada {
    static contadorDispositivos = 0; 
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
        this._numeroInventario = ++DispositivoEntada.contadorDispositivos;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca,idRaton){
        super (tipoEntrada,marca);
        this._idRaton = idRaton;
        this._contadorRatones = ++Raton.contadorRatones; 
    }
    get idRaton(){
        return this._idRaton
    }
    set idRaton(idRaton){
        this._idRaton = idRaton;
    }
    toString(){
        return `Mouse
        Tipo de entrada: ${this._tipoEntrada}
        Marca:  ${this._marca}
        ID: ${this._idRaton}
        Articulo en slot ${this._numeroInventario} del inventario`
    }
}

class Teclado extends DispositivoEntada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca,idTeclado){
        super (tipoEntrada,marca);
        this._idTeclado = idTeclado;
    }
    get idTeclado(){
        return this._idTeclado
    }
    set idTeclado(idTeclado){
        this._idTeclado = idTeclado;
    }
    toString(){
        return `Teclado
        Tipo de entrada: ${this._tipoEntrada}
        Marca:  ${this._marca}
        ID: ${this._idTeclado}
        Articulo en slot ${this._numeroInventario} del inventario`;
    }
}


let teclado1 = new Teclado("Bluetooth", "StarGate","Gamer127");

let teclado2 = new Teclado("USB", "StarGate","Gamer111");

let mouse1 = new Raton("Bluetooth", "StarGate","Gamer127");

let mouse2 = new Raton("USB", "StarGate","Gamer111");

console.log(mouse1.toString())



class Monitor{
    static contadorMonitores = 0;
    constructor(idMonitor, marca, tamaño){
        this._idMonitor = idMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
        this._inventarioMonitores = ++Monitor.contadorMonitores;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set idMonitor(idMonitor){
        this._idMonitor = idMonitor;
    }
    set marca(marca){
        this._marca = marca; 
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor ID ${this._idMonitor}
        Marca: ${this._marca}
        Tamaño: ${this._tamaño}
        Articulo en slot ${this._inventarioMonitores} del inventario de monitores.`;
    }
}


let monitor1 = new Monitor("0256987", "Toshiba", "27 pulgadas")

class Computadora {
    static numeroDeComputadora = 0;
    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton; 
        this._numeroDeComputadora = ++Computadora.numeroDeComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    get raton(){
        return this._raton;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set monitor (monitor){
        this._monitor = monitor;
    }
    set teclado(teclado){
        this._teclado = teclado; 
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `
        ${this._nombre}
        Monitor: ${this._monitor}
        Teclado: ${this._teclado}
        Raton: ${this._raton}
        `
    }
}

class Orden {
    static idOrden = 0; 
    constructor(){
        this._idOrden = ++Orden.idOrden;
        this._computadoras = []
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }
    toString(){
        let mostrar = `
        Orden #: ${this._idOrden} 
        ${this._computadoras}`
        return mostrar
    }
    mostrarOrden(){
        let mostrarOrden = `
        Número de orden: ${this._idOrden}
        Numero de computadoras: ${this._computadoras.length}`;
        mostrarOrden += this.toString()
        return mostrarOrden
    }
    get idOrden(){
        return this._idOrden;
    }
    set idOrden(idOrden){
        this._idOrden = idOrden;
    }
}




let computadora1 = new Computadora("Primera_compu",monitor1, teclado1, mouse1 )

let computadora2 = new Computadora("segunda_compu",monitor1, teclado2, mouse1 )

let orden1 = new Orden ();

let orden2= new Orden ()

orden1.agregarComputadora(computadora1)

orden2.agregarComputadora(computadora1)
orden2.agregarComputadora(computadora2)

console.log(orden2.toString())


console.log(orden2.mostrarOrden())



