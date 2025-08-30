import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    /**
     * 
     * @param {Phaser.Scene} scene - The current scene
     * @param {number} x - Starting x position
     * @param {number} y - Starting y position
     * @param {string} texture - The sprite texture key
     * @param {object} config - Configuration for class, health, stamina, etc.
     */
    constructor(scene, x, y, texture, config = {}) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.scene = scene;

        // Player stats
        this.health = config.health || 100;
        this.stamina = config.stamina || 100;
        this.maxStamina = config.stamina || 100;
        this.speed = config.speed || 200;

        // Class type: "warlock", "barbarian", "ranger"
        this.classType = config.classType || "ranger";

        // Input
        this.cursors = scene.input.keyboard.createCursorKeys();

        // Optional attack key
        this.attackKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Set physics properties
        this.setCollideWorldBounds(true);
    }

    update() {
        this.handleMovement();
        this.handleAttack();
        this.recoverStamina();
    }

    handleMovement() {
        const moveSpeed = this.speed;

        this.body.setVelocityX(0);

        if (this.cursors.left.isDown) {
            this.body.setVelocityX(-moveSpeed);
            this.setFlipX(true);
        } else if (this.cursors.right.isDown) {
            this.body.setVelocityX(moveSpeed);
            this.setFlipX(false);
        }

        // Jumping
        if (this.cursors.up.isDown && this.body.onFloor()) {
            this.body.setVelocityY(-350);
        }
    }

    handleAttack() {
        if (Phaser.Input.Keyboard.JustDown(this.attackKey)) {
            if (this.stamina >= 10) {
                this.stamina -= 10;
                console.log(`${this.classType} attacks! Stamina left: ${this.stamina}`);
                // Placeholder: implement attack logic here
            } else {
                console.log("Not enough stamina!");
            }
        }
    }

    recoverStamina() {
        // Simple stamina regen over time
        if (this.stamina < this.maxStamina) {
            this.stamina += 0.5; // adjust rate as needed
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            this.die();
        }
    }

    die() {
        console.log("Player died!");
        this.setTint(0xff0000);
        this.body.setVelocity(0, 0);
        this.scene.scene.pause();
        // You can also trigger a game over scene here
    }
}
