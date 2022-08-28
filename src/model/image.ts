export interface IImageConstructor {
  scene: Phaser.Scene;
  x: number;
  y: number;
  texture: Texture;
  frame?: string | number;
}

export enum Texture {
  Bird = 'bird',
  Pipe = 'pipe',
}
