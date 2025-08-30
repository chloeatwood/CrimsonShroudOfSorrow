import Player from "./Player.js";

export default class Witch extends Player {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, {
            classType: "witch",
            health: 80,
            stamina: 120,
            speed: 180
        });

        // Magic attack key
        this.magicKey = scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.Z
        );
    }

    update() {
        super.update(); // Keep movement, stamina regen, and basic attacks

        this.handleMagic();
    }

    handleMagic() {
        if (Phaser.Input.Keyboard.JustDown(this.magicKey)) {
            if (this.stamina >= 20) {
                this.stamina -= 20;
                console.log("Witch casts magic!");
                // Placeholder: implement projectile or spell logic here
            } else {
                console.log("Not enough stamina for magic!");
            }
        }
    }
}
