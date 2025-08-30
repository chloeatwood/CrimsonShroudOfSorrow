import Player from "../entities/Player.js";

export default class PrologueScene extends Phaser.Scene {
    preload() {
        this.load.image("player", "assets/");
    }

    create() {
        this.player = new Player(this, 400, 300, "player", {
            classType: "ranger",
            health: 100,
            stamina: 100,
            speed: 200
        });

        this.add.text(10, 10, "Player Test Scene", { fontSize: "20px", fill: "#fff" });
    }

    update() {
        this.player.update();
    }
}
