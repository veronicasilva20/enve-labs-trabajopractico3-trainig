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
        return pokémon.moves
};


// Crear una función getPrimaryAbilityque tome como argumento un pokémon y devuelva la habilidad primaria

function getPrimaryAbility(pokémon) {
    return  pokémon.ability.primary
};


// Crear una función getWeaknessesque tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

function getWeaknesses(pokémon) {
    return pokémon.modifiers.weakness
};


// Crear una función getResistancesque tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

function getResistances(pokémon) {
    return squirtle.modifiers.weakness
};


// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo



function resistsType(pokémon,targetType) {
    return pokémon.modifiers.resistances.includes(targetType);
}



// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene el mismo nombre y tipo


function resistsMove(pokémon,move) {
    return pokémon.modifiers.resistances;
};

// Crear una función isWeakAgainstque tome como argumento un objeto con dos propiedades, attackery attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva truesi el pokémon atacado es débil frente al tipo de pokémon que lo ataca


function isWeakAgainst(pokémonCombo) {
    return pokémonCombo.attacked.modifiers.weakness.includes(pokémonCombo.attacker.type);
};
// Crear una función isStrongAgainstque tome como argumento un objeto con dos propiedades, attackery attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva truesi el pokémon atacado es resistente al tipo de pokémon que lo ataca


function isStrongAgainst(pokémonCombo) {
    return pokémonCombo.attack.modifiers.resistances.includes(pokémonCombo.attack.type);
};

// Crear una función addAbilityque tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada


function addAbility(pokémon,ability) {
    const newPokémon ={...pokémon};
    newPokémon.ability={...newPokémon.ability,...ability};
    return newPokémon
};

// Crear una función addMoveque tome como argumentos un pokémon y un movimiento, agregar dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

function addMove(pokémon,move) {
    const newPokémon ={...pokémon};
    newPokémon.moves.push(move);
    return newPokémon;
};

// Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attackery attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
// 2, si el pokémon atacado es débil ( weakness) contra el tipo del pokémon que ataca
// 0,5, si el pokémon atacado es resistente ( resistances) contra el tipo del pokémon que ataca
// 1, si no es débil ni resistente



