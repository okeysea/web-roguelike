class Size {

  private sizeX: number;
  private sizeY: number;

  constructor( sizeX?:number, sizeY?:number ){
    this.sizeX = 0;
    this.sizeY = 0;
   
    if( sizeX ) this.sizeX = sizeX;
    if( sizeY ) this.sizeY = sizeY;
  }
  
  get width() { return this.sizeX; }
  get height(){ return this.sizeY; }

  set width(v: number) { this.sizeX = v; }
  set height(v: number){ this.sizeY = v; }
}

export default Size;
