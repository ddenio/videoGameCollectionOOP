//OOP 4 Pillars practice - Video Game Collection

//Going to start with Encapsulation, a base Class for the collection
   //adding getters to add some abstraction 
class Gamelibrary{
    constructor(name,system,era,language,genre){
        this._name = name;
        this._system = system;
        this._era = era;
        this._language = language;
        this._genre = genre;
    }
    get name(){
        return this._name
    }
    get system(){
        return this._system
    }
    get era(){
        return this._era
    }
    get language(){
        return this._language
    }
    get genre(){
        return this._genre
    }
    description() {
        console.log(`This game is titled ${this._name}, it was originally made for the ${this._system} system, in the ${era}`)
    }
}

//Now adding Inheritance; some child classes that will extend our Parent Gamelibrary class

class American extends Gamelibrary{
    constructor(name,system,era,language,genre,USrating){
        super(name,system,era,language,genre);
        this._USrating = USrating;
        
    }
    get USrating() {
        return this._USrating
    };
    
    description() {
        console.log(`This game is called ${this._name}, it was a(n) ${this._genre}-style game made in the ${this._era} for the ${this._system} and used the ${this._language} language, it had a rating in the US of ${this._USrating}%`)
    }
}

class Japanese extends Gamelibrary{
    constructor(name,system,era,language,genre,Japaneserating){
        super(name,system,era,language,genre);
        this._Japaneserating = Japaneserating;
        
    }
    get Japaneserating() {
        return this._Japaneserating
    };
    
    description() {
        console.log(`This game is called ${this._name}, it was a(n) ${this._genre}-style game made in the ${this._era} for the ${this._system} and used the ${this._language} language, it had a rating in the US of ${this._Japaneserating}%`)
    }
}

class European extends Gamelibrary{
    constructor(name,system,era, language,genre,Europeanrating){
        super(name,system,era,language,genre);
        this._Europeanrating = Europeanrating;
        
    }
    get Europeanrating() {
        return this._Europeanrating
    };
    
    description() {
        console.log(`This game is called ${this._name}, it was a(n) ${this._genre}-style game made in the ${this._era} for the ${this._system} and used the ${this._language} language, it had a rating in Europe of ${this._Europeanrating}%`)
    }
}

let sonic = new American('Sonic The Hedgehog', 'Sega Genesis','90s','English', 'platform',82);
let finalfantasy = new Japanese('Final Fantasy', 'Famicon','80s','Japanese','JRPG',95);
let earthlight = new European('Earthlight','ZX Spectrum','80s','English','scrolling shooter',80);

//Utilizing Polymorphism here
let collection = [sonic,finalfantasy,earthlight]

for(game of collection){
    game.description()
}