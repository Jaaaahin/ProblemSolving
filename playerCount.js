const data = {
    name: ["John", "Mary", "John"],
    next: {
        name: ["John", "Mary"],
        next: null
    }
};
const playerCount = (data) => {
if(data === null) return {};
let countPlayer = {};
for(let player of data.name){
    countPlayer[player] = (countPlayer[player]  || 0) + 1;

}
const nextPlayerCount = playerCount(data.next);
for(let key in nextPlayerCount){
    countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key];
}
return countPlayer;
};
console.log(playerCount(data)); // Output: { John: 3, Mary: 2 }