class Intro extends Phaser.Scene {
    constructor() {
        super('cinematic');
    } //runs once when scene is first created
    preload() {
        this.load.path = 'assets/';
        this.load.audio('chirp','chrip sound effect.mp3');
        this.load.image('phoenix', 'phoenix makes.png');
    } //runs once, preloads external assets, ie images
    create() {
        image = add.image(960, 540,'phoenix');
        this.cameras.main.fadeIn(2000, red=0, green=0, blue=0);
        this.cameras.main.fadeOut(2000, red=0, green=0, blue=0);

    } //runs once, set up game objects
            update() {} //runs once per frame, contains logic that needs to happen consistently
}
class Loading extends Phaser.Scene {
        constructor() {
            super('loading');
        }
        preload() {
            this.load.path = 'assets/';
            this.load.video('loading', 'd1loadingscreen.mp4');
        }
        create() {
            this.add.video(960, 540, 'loading');
            this.add.text(1440, 860, "Loading...", {font: "30px Arial", color: "0xadadad"});
        }
}
class TitleScreen extends Phaser.Scene {
        constructor() {
            super('titlescreen');
        }
        preload() {
            this.load.path = 'assets/';
            this.load.image('titleimage', 'd1titlescreen.png');
            this.load.audio('bgmusic', 'd1bgmusic.mp3');
        }
        create() {
                this.graphics = this.add.graphics();
                this.graphics.fillStyle(0x9900ff, 1);

                this.graphics.fillTriangle(840, 520, 840, 560, 880, 540);
                this.graphics.fillTriangle(1080, 520, 1080, 560, 1040, 540);
        }
}
class Opening extends Phaser.Scene {
        constructor() {
            super('opening');
        }
        preload() {
            this.load.path = 'assets/';
            this.load.image('scene1image','d1scene1.png');
        }
        create() {

        }
}
let config = {
    type: Phaser.WEBGL,
    width: 1920,
    height: 1080,
    backgroundColor: 0x000000,
    scene: [Intro, Loading, TitleScreen, Opening],
}

let game = new Phaser.Game(config);