class support{
    name;
    designation='support web dev';
    address;
    constructor(name, address){
        this.name=name;
        this.address=address;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

const david=new support('david khan', 'us');
const omuk=new support('Komuk khan', 'uk');
// console.log(david, omuk);
david.startSession();
omuk.startSession();

const cube=x=> x*x*x; 
console.log(cube(2))


