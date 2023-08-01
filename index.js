const getPikachu = () => {
    return {
        name: "Pikacku",
        type: "electric",
        // ...
    }
}

const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}

const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}

const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
};

// Crear una función getMovesque tome como argumento un pokémon y devuelva la lista de movimientos

function getMoves(pokémon) {
        return  pikachu.moves
};
console.log(getMoves(pikachu));

// Crear una función getPrimaryAbilityque tome como argumento un pokémon y devuelva la habilidad primaria

function getPrimaryAbility(pokémon) {
    return  pikachu.ability.primary
};
console.log(getPrimaryAbility(pikachu));

// Crear una función getWeaknessesque tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

function getWeaknesses(pokémon) {
    return pikachu.modifiers.weakness
};
console.log(getWeaknesses(pikachu))

// Crear una función getResistancesque tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

function getResistances(pokémon) {
    return squirtle.modifiers.weakness
};
console.log(getResistances(squirtle))

// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo



function resistsType(pokémon,targetType) {
    return pokémon.modifiers.resistances.includes(targetType);
}
console.log(resistsType())


// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene el mismo nombre y tipo


function resistsMove(pokémon,move) {
    return pokémon.modifiers.resistances;
};

function isWeakAgainst(pokémonCombo) {
    return pokémonCombo.attacked.modifiers.weakness.includes(pokémonCombo.attacker.type);
}

function isStrongAgainst(pokémonCombo) {
    return pokémonCombo.attack.modifiers.resistances.includes(pokémonCombo.attack.type);
};
function addAbility(pokémon,ability) {
    const newPokémon ={...pokémon};
    newPokémon.ability={...newPokémon.ability,...ability};
    return newPokémon
};
function addMove(pokémon,move) {
    const newPokémon ={...pokémon};
    newPokémon.moves.push(move);
    return newPokémon;
};
function getAttackModifier (pokémonCombo) {
    const attackedPokémon=pokémonCombo.attacked;
    if(attackedPokémon.modifiers.weakness.includes(pokémonCombo.attacker.type)){
     return 2;   
    }else if (attackedPokémon.modifiers.resistances.includes(pokémonCombo.attacker.type)){
        return 0.5;
    }else{
        return 1;
    }
};