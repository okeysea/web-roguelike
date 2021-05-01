import * as PIXI from 'pixi.js'
import SpriteMaker from './AssetManager/SpriteMaker'
import AssetLoader from './AssetManager/AssetLoader'

const getViewContainer = () => {
  var elem = document.getElementById("output");
  return elem == null ? undefined : elem;
}
const viewContainer = getViewContainer();

const app = new PIXI.Application({
  resizeTo: viewContainer,
  backgroundColor: 0x000000
});

if( viewContainer ) viewContainer.appendChild( app.view );

/* 
 * play ground
 * */

/*
const spliteTexture = PIXI.Texture.from('./splite-32.png');
const img = new PIXI.Sprite();
img.texture = new PIXI.Texture( spliteTexture.castToBaseTexture(), new PIXI.Rectangle(0,0,32,32) );
*/


const loader = new AssetLoader();
loader.add("sprite", "./splite-32.png").load().then( (resources) => {

  if( !resources.sprite.texture ) return;
  const spritemaker = new SpriteMaker( resources.sprite.texture, 32, 32 );

  const imgs = spritemaker.getSprites();

  let i = 0;
  for( const img of imgs ){
    img.x = 32 * i
    app.stage.addChild(img);
    i ++;
  }
});



