const data = {

    phoenix: {
        title: "Phoenix",
        image: "image/fln2.jpeg",
        background: "image/Fire Wallpaper iPhone.jfif",
        origin: "Greek Mythology",
        type: "Legendary Bird",
        power: "Rebirth from Ashes",
        description: "The Phoenix is a magical bird that dies in flames and rises again from its ashes."
    },

    leviathan: {
        title: "Leviathan",
        image: "image/chi.jpeg",
        background: "image/61502351156741625.jfif",
        origin: "Ancient Sea Legends",
        type: "Sea Monster",
        power: "Ocean Control",
        description: "A gigantic sea creature feared by sailors throughout history."
    },

    chimera: {
        title: "Chimera",
        image: "image/s.jpeg",
        background: "image/21251429487739139.jfif",
        origin: "Greek Mythology",
        type: "Hybrid Beast",
        power: "Fire Breathing",
        description: "A terrifying creature with the body of a lion, a goat and a serpent."
    },

    gorgon: {
        title: "Gorgon",
        image: "image/g.jpeg",
        background: "image/30258628744692635.jfif",
        origin: "Greek Mythology",
        type: "Monster",
        power: "Turn People Into Stone",
        description: "Anyone who looks directly at the Gorgon may be turned into stone."
    },

    griffin: {
        title: "Griffin",
        image: "image/gg.jpeg",
        background: "image/1047931407061521042.jfif",
        origin: "Ancient Legends",
        type: "Guardian Beast",
        power: "Strength and Flight",
        description: "A majestic creature with the body of a lion and the wings of an eagle."
    },

    sphinx: {
        title: "Sphinx",
        image: "image/ab.jpeg",
        background: "image/71987294040672938.jfif",
        origin: "Egyptian Mythology",
        type: "Mystical Creature",
        power: "Wisdom and Riddles",
        description: "The Sphinx is known for guarding sacred places and asking riddles."
    }

};

const params = new URLSearchParams(window.location.search);
const creature = params.get("creature");

if (data[creature]) {

    document.getElementById("title").textContent =
        data[creature].title;

    document.getElementById("image").src =
        data[creature].image;

    document.getElementById("origin").textContent =
        data[creature].origin;

    document.getElementById("type").textContent =
        data[creature].type;

    document.getElementById("power").textContent =
        data[creature].power;

    document.getElementById("description").textContent =
        data[creature].description;

    document.body.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("${data[creature].background}")`;

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
}
