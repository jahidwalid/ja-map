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
const [a, b] = [1,2,3,4,45,5]; console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};

console.log(x,y,z)
const nums = [1,2,3,4,5]; let output = nums.filter(n => n%2); console.log(output);

