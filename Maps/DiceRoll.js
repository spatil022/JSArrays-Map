// finding number rolled maximum and minimum times

let dictionary = {1:0,2:0,3:0,4:0,5:0,6:0};
console.log(dictionary);
let number =0;

while(number<10)
{
    let dieRoll = Math.floor(Math.random()*6)+1;
    console.log(dieRoll);
    number = dictionary[dieRoll];
    number =number+1;
    dictionary[dieRoll]= number;
}

console.log(dictionary);

let max = dictionary[1];
let min = dictionary[1];

for(var key in dictionary)
{
    if(max<dictionary[key])
    max = dictionary[key];
    if(min>dictionary[key])
    min = dictionary[key];
}

for(var key in dictionary)
{
    if(max==dictionary[key])
    console.log("Key : "+key+" reached maximum times of value = "+dictionary[key]);
    if(min ==dictionary[key])
    console.log("Key : "+key+" reached minimum times of value = "+dictionary[key]);
}

