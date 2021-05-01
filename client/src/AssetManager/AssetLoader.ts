import * as PIXI from 'pixi.js'

class AssetLoader {

  private loader: PIXI.Loader;
  private resources: {[key:string]:PIXI.ILoaderResource};

  constructor() {
    this.loader = new PIXI.Loader();
    this.resources = {};
  }

  add( key: string, source: string ){
    this.loader.add( key, source );
    return this;
  }

  async load(): Promise<{[key:string]: PIXI.ILoaderResource}>{
    return new Promise((resolve, reject) => {
      this.loader.load((_, resources)=>{
        if( resources.error ){
          reject("loaderror");
        }else{
          this.resources = resources;
          resolve(resources);
        }
      });
    });
  }
}

export default AssetLoader;
