import * as PIXI from 'pixi.js'
import Size from './Size'

class SpriteMaker {

  private baseTexture: PIXI.BaseTexture;
  private textures: PIXI.Texture[];
  private column: number;
  private row:    number;

  constructor(
    texture: PIXI.Texture, sizeX:number, sizeY:number, 
    options?: { column: number, row: number }
  ){

    this.textures = [];
    this.column = 0;
    this.row    = 0;
    this.baseTexture = texture.castToBaseTexture();

    if( !options ){
      options = { column: 0, row: 0 }
      options.column = this.baseTexture.width  / sizeX - this.baseTexture.width  % sizeX;
      options.row    = this.baseTexture.height / sizeY - this.baseTexture.height % sizeY;
    }

    this.column = options.column;
    this.row    = options.row;


    for( let y = 0; y < this.row; y ++ ){
      for( let x = 0; x < this.column; x ++ ){
        this.textures.push( new PIXI.Texture(
          this.baseTexture, new PIXI.Rectangle(x * sizeX, y * sizeY, sizeX, sizeY) 
        ) );
      }
    }
  }

  getSprites() {
    const quantity = this.textures.length;
    const ret      = [];

    for( let i = 0; i < quantity; i ++ ){
      const img = new PIXI.Sprite();
      img.texture = this.textures[i];
      ret.push( img );
    }

    return ret;
  }

}

export default SpriteMaker;
