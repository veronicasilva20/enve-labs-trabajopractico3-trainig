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
};
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
};
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
};
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
//creo las  funciones de cada argumento.

function getMoves(pokemon) {
  return pokemon.moves;
}

function getPrimaryAbility(pokemon) {
  return pokemon.ability.primary;
}

function getWeaknesses(pokemon) {
  return pokemon.modifiers.weakness;
}

function getResistances(pokemon) {
  return pokemon.modifiers.resistances;
};

function resistsType(pokemon, targetType) {
  return pokemon.modifiers.resistances.includes(targetType);
};
function resistsMove(okemon,move) {
    return pokemon.modifier.resistances;
};
function isWeakAgainst(pokemonCombo) {
  return pokemonCombo.attacked.modifiers.weakness.includes(pokemonCombo.attacker.type);
};

function isStrongAgainst(pokemonCombo) {
  return pokemonCombo.attack.modifiers.resistances.includes(pokemonCombo.attacker.type);
};

function addAbility(pokemon, ability) {
  let newPokemon = { ...pokemon };
  newPokemon.ability = { ...newPokemon.ability, ...ability };
  return newPokemon;
};

function addMove(pokemon, move) {
  let newPokemon = { ...pokemon };
  newPokemon.moves.push(move);
  return newPokemon;
};

function getAttackModifier(pokemonCombo) {
  if (isWeakAgainst(pokemonCombo)) {
    return 2;
  } else if (isStrongAgainst(pokemonCombo)) {
    return 0.5;
  } else {
    return 1;
  }
};

function calculateDamage(attack, defense, modifier) {
  return (0.5 * attack * (attack / defense) * modifier).toFixed(2);
};

function getAttackLog(attackData) {
  let modifierMsg = attackData.modifier === "weak"
    ? "It's super effective!"
    : attackData.modifier === "resistant"
      ? "It's not very effective!"
      : "";

  return `${attackData.attacker} used ${attackData.move}! ${attackData.attacked} lost ${attackData.damage} HP! ${modifierMsg}`;
};
// funcion  que genero para la batalla.

function battle(pokemon1, pokemon2) {
  let history = [];
  let rounds = 0;

  while (pokemon1.stats.hp > 0 && pokemon2.stats.hp > 0) {
    rounds++;
    let attacker = pokemon1.stats.speed >= pokemon2.stats.speed ? pokemon1 : pokemon2;
    let attacked = pokemon1.stats.speed >= pokemon2.stats.speed ? pokemon2 : pokemon1;

    let moveIndex = Math.floor(Math.random() * attacker.moves.length);
    let move = attacker.moves[moveIndex];
    let modifier = getAttackModifier({
      attacker: attacker,
      attacked: attacked,
      attack: attacker.stats.attack,
      defense: attacked.stats.defense
    });

    let damage = calculateDamage(attacker.stats.attack, attacked.stats.defense, modifier);

    attacked.stats.hp = Math.max(0,attacked.stats.hp -damage);

    let log = getAttackLog({
      attacker: attacker.name,
      attacked: attacked.name,
      move: move,
      damage: damage,
      modifier: modifier > 1 ? "weak" : modifier < 1 ? "resistant" : ""
    });

    history.push(log);
  }

  let winner = pokemon1.stats.hp > 0 ? pokemon1 : pokemon2;
  let loser = pokemon1.stats.hp > 0 ? pokemon2 : pokemon1;

  return {
    rounds,
    results: {
      winner: { name: winner.name, hp: winner.stats.hp },
      loser: { name: loser.name, hp: 0 }
    },
    history
  };
}

function main() {
  let squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
      "primary": "Torrent",
      "hidden": "Rain Dish"
    },
    stats: {
      hp: 44,
      attack: 48,
      defense: 50,
      speed: 43
    },
    moves: [
      "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
      "weakness": ["electric", "grass"],
      "resistances": ["water", "fire", "ice", "steel"]
    }
  };

  let pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
      "primary": "Static",
      "hidden": "Lightning rod"
    },
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
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

  let battleResult = battle(squirtle, pikachu);

  console.log("Battle Result:" );
  console.log("Rounds:", battleResult.rounds);
  console.log("Winner:", battleResult.results.winner);
  console.log("Loser:", battleResult.results.loser);
  console.log("Attack History:");
  battleResult.history.forEach(log => console.log(log));

  console.log("El programa ha finalizado.");
}

// Llamamos a la función principal para que se ejecute el código
main();
