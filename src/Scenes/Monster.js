class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

        
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.arm1 = this.add.sprite(this.bodyX + 100, this.bodyY + 50, "monsterParts", "arm_greenD.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 100, this.bodyY + 50, "monsterParts", "arm_greenD.png").setFlipX(true);
        my.sprite.leg1 = this.add.sprite(this.bodyX + 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 50, this.bodyY + 120, "monsterParts", "leg_greenD.png").setFlipX(true);
        my.sprite.eye = this.add.sprite(this.bodyX , this.bodyY - 20, "monsterParts", "eye_red.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX , this.bodyY + 40, "monsterParts", "mouthA.png");
        my.sprite.mouthFang = this.add.sprite(this.bodyX , this.bodyY + 40, "monsterParts", "mouthB.png");
        my.sprite.horn1 = this.add.sprite(this.bodyX + 50, this.bodyY - 70, "monsterParts", "detail_green_horn_large.png");
        my.sprite.horn2 = this.add.sprite(this.bodyX - 50, this.bodyY - 70, "monsterParts", "detail_green_horn_large.png").setFlipX(true);

        my.sprite.mouthFang.visible = false;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // Smile and Fang
        this.input.keyboard.on('keydown-S', function(event) {
            my.sprite.mouthFang.visible = false;
            my.sprite.mouthSmile.visible = true;
        });

        this.input.keyboard.on('keydown-F', function(event) {
            my.sprite.mouthFang.visible = true;
            my.sprite.mouthSmile.visible = false;
        });


        // Movement

        if (this.input.keyboard.addKey('A').isDown) {
            for (let part in my.sprite){
                my.sprite[part].x -= 1;
            } 
        }

        if (this.input.keyboard.addKey('D').isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 1;
            }
        }     
    }
}
