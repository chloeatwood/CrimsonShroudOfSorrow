import Phaser from "phaser";
import PrologueScene from "./scenes/PrologueScene.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: { gravity: { y: 500 }, debug: false }
    },
    scene: [PrologueScene]
};

new Phaser.Game(config);
