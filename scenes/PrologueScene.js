import Phaser from "phaser";

export default class PrologueScene extends Phaser.Scene {
    constructor() {
        super({ key: "PrologueScene" });
    }

    preload() {
        // Load a test player sprite
        this.load.image("player", "assets/Blue_witch/B_witch_idle.png");
    }

    create() {
        // Add the player sprite in the middle of the screen
        this.player = this.physics.add.sprite(400, 300, "player");

        // Add some test text
        this.add.text(10, 10, "Prologue Scene: Setup Working", { fontSize: "20px", fill: "#fff" });
    }

    update() {
        // Nothing yet; just a placeholder
    }
}
