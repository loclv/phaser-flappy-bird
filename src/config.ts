import Phaser from 'phaser';

import { BootScene, GameScene, MainMenuScene } from './scenes';

export const config: Phaser.Types.Core.GameConfig = {
  title: 'Flappy Bird',
  version: '1.0',
  width: 390,
  height: 600,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [BootScene, MainMenuScene, GameScene],
  input: {
    keyboard: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
    },
  },
  backgroundColor: '#98d687',
  render: { pixelArt: true, antialias: false },
};
