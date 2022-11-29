let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]




// Prompt 1
party.forEach(element => {
    element.hitpoints = element.hitpoints*2
});

// Prompt 2
const subtractHP = (name, hp) =>{
    party.forEach(el => {
        if (el.name == name ){
            el.hitpoints = el.hitpoints-hp
        }
    });
}

subtractHP("Timothy", 5);
console.log(party[1].hitpoints)

// Prompt 3

party.forEach(el =>{
    if (el.name == "Sarah"){
        el.companion.type = "jellyfish"
    }
})

console.log(party[2].companion.type)

// Prompt 4
party.forEach(el =>{
    if (el.name == "Timothy"){
        el.hitpoints = el.hitpoints + 20;
        el.belongings.splice((el.belongings.indexOf("potion")),1);     
    }
})

console.log(party[1].belongings);
console.log(party[1].hitpoints);

// Prompt 5
//Remove bread from jolines belongings
party.forEach(el =>{
    if (el.name == "Joline"){
        el.belongings.splice(el.belongings.indexOf("bread"),1);
    }
    //Push it into Timothy's belonging
    if (el.name == "Timothy"){
        el.belongings.push("bread") 
    }
})

console.log(party[1].belongings)
console.log(party[0].belongings);

// Prompt 6
const leaveParty = (names) =>{
        
  party.forEach((el, index) => {
    if (el.name == names){
        party.splice(index,1)
    }
  });
}

leaveParty("Joline");
console.log(party);

// Prompt 7

const addAdventurer = (newAdventurer) =>{
  party.push({name:newAdventurer})
}

addAdventurer("Alice");
console.log(party);

//Prompt 8
const splitGold = (amountOfGold) =>{
    party.forEach((member) => {
        member.gold = 0 
        member.gold+= Math.round(amountOfGold/party.length)
    });
}
splitGold(200);
console.log(party);

//Prompt 9

party.forEach((member) => {
    if(member.name == "Sarah"){
        member.gold-= 20
        member.companion.type = "bear"
    }
});

console.log(party);

//Prompt 10
party.forEach((member) => {
    if(member.name == "Timothy"){
        member.belongings.splice((member.belongings.indexOf("sword")),1,"Rusty Sword");
    }
});
console.log(party);

//Prompt 11
const setLeader = (player) =>{
    party.forEach((person) => {
        person.isLeader = false;
        if(person.name == player){
            person.isLeader = true;
        }
    });
}

setLeader("Alice");
console.log(party);