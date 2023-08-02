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

 // Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

function getMoves(pokemon) {
        return pokemon.moves;
}

// console.log("movimientos "+ getMoves(squirtle))

 // Crear una función getPrimaryAbilityque tome como argumento un pokémon y devuelva la habilidad primaria

function getPrimaryAbility(pokemon) {
    return  pokemon.ability.primary
};
// console.log("habilidad primaria de pikachu " + getPrimaryAbility(pikachu))


// Crear una función getWeaknessesque tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

function getWeaknesses(pokemon) {
    return pokemon.modifiers.weakness
};
// console.log("debilidades "+getWeaknesses(squirtle))

// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

function getResistances(pokemon) {
    return pokemon.modifiers.resistances;
};
// console.log("resistencias "+ getResistances(pikachu));


 // Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo



function resistsType(pokemon,targetType) {
    return pokemon.modifiers.resistances.includes(targetType);
}
// console.log("devuelve true si es resistente" + resistsType(pikachu));


 // Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene el mismo nombre y tipo


function resistsMove(pokemon,move) {
    return pokemon.modifiers.resistances;
};


 // Crear una función isWeakAgainstque tome como argumento un objeto con dos propiedades, attackery attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva truesi el pokémon atacado es débil frente al tipo de pokémon que lo ataca


function isWeakAgainst(pokemonCombo) {
    return pokemonCombo.attacked.modifiers.weakness.includes(pokemonCombo.attacker.type);
};


 // Crear una función isStrongAgainstque tome como argumento un objeto con dos propiedades, attackery attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva truesi el pokémon atacado es resistente al tipo de pokémon que lo ataca


function isStrongAgainst(pokemonCombo) {
    return pokemonCombo.attack.modifiers.resistances.includes(pokemonCombo.attack.type);
};

 // Crear una función addAbilityque tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada


function addAbility(pokemon,ability) {
    const newPokemon ={...pokemon};
    newPokemon.ability={...newPokemon.ability,...ability};
    return newPokemon
}   
 // Crear una función addMoveque tome como argumentos un pokémon y un movimiento, agregar dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

function addMove(pokemon,move) {
    pokemon.moves.push(move);
    return pokemon;
};

// Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attackery attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
 // 2, si el pokémon atacado es débil ( weakness) contra el tipo del pokémon que ataca
 // 0,5, si el pokémon atacado es resistente ( resistances) contra el tipo del pokémon que ataca
 // 1, si no es débil ni resistente

function getAttackModifier (pokemonCombo) {
    const attackedPokemon=pokemonCombo.attacked;
    if(attackedPokemon.modifiers.weakness.includes(pokemonCombo.attacker.type)){
     return 2;   
    }else if (attackedPokemon.modifiers.resistances.includes(pokemonCombo.attacker.type)){
        return 0.5;
    }else{
        return 1;
    }
};
// Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
// {
//     attacker: "Squirtle",
//     attacked: "Pikachu",
//     move: "Water Gun",
//     damage: 12,
//     modifier: "weak" // otros valores: "resistant", "normal"
// }

function getAttackLog  ({ attacker, attacked, move, damage, modifier }) {
    let log = `${attacker} used ${move}! ${attacked} lost ${damage} HP!`;
  
    if (modifier === "weak") {
      log += " It's super effective!";
    } else if (modifier === "resistant") {
      log += " It's not very effective!";
    }
  
    return log;
  };
  
  // Ejemplo de uso
  const attackLog = {
    attacker: "Squirtle",
    attacked: "Pikachu",
    move: "Water Gun",
    damage: 12,
    modifier: "weak",
  };
  
//   const log = getAttackLog(attackLog);
//   console.log(log);
  
// Crear una función calculateDamageque tome como un argumento un objeto con las siguientes propiedades
// attackes el ataque del pokémon que ataca
// defensees la defensa del pokémon siendo atacado
// modifierel modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula:
// 0.5 * attack * (attack / defense) * modifier
 
function calculateDamage ({ attack, defense, modifier }) {
    return 0.5 * attack * (attack / defense) * modifier;
  };
  
  // Ejemplo de uso
  const attack = 50;
  const defense = 30;
  const modifier = 2;
  const damage = calculateDamage({ attack, defense, modifier });
  
//   console.log(damage);
  
    
// Crear una función battleque tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
// Por ronda, cada pokémon ataca al contrario
// Comienza atacando al pokémon con más velocidad ( speed)
// La batalla termina cuando la vida ( hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
// El daño se obtiene con la función calculateDamagey se resta a la vida del pokémon atacado
// Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la funcióngetAttackLog
// El movimiento se elige de forma aleatoria en cada ataque
// El objeto que debe devolver como resultado debe seguir la siguiente estructura:
// {
//     rounds: 1,
//     results: {
//         winner: {
//             name: "Pikachu",
//             hp: 12 // vida restante
//         },
//         losser: {
//             name: "Squirtle",
//             hp: 0
//         }
//     },
//     history: [
//         "Squirtle used Water Gun! Pikachu lost 12 HP!", 
//         "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
//     ]
// }

