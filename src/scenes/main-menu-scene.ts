import { ScreenName } from '@model';

export class MainMenuScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;
  private titleBitmapText!: Phaser.GameObjects.BitmapText;
  private playBitmapText!: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: ScreenName.MainMenuScene,
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.startKey.isDown = false;
  }

  create(): void {
    this.titleBitmapText = this.add.bitmapText(0, 200, 'font', 'FLAPPY BIRD', 30);

    this.titleBitmapText.x = this.getCenterXPositionOfBitmapText(this.titleBitmapText.width);

    this.playBitmapText = this.add.bitmapText(0, 300, 'font', 'S: PLAY', 25);

    this.playBitmapText.x = this.getCenterXPositionOfBitmapText(this.playBitmapText.width);
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start(ScreenName.GameScene);
    }
  }

  private getCenterXPositionOfBitmapText(width: number): number {
    return (this.sys.canvas.width - width) / 2;
  }
}
