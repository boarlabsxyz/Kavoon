export declare interface FabricColorPrint {
  name: string;
  smallImgSrc: string;
  largeImgSrc: string;
}
export declare interface FabricColor {
  name: string;
  colors: FabricColorPrint[];
}
export declare interface FabricPrint {
  name: string;
  prints: FabricColorPrint[];
}
export declare interface Fabric {
  name: string;
  color: string;
}

declare const Cordura: FabricColor;
declare const Xpac: FabricColor;
declare const Prints: FabricPrint;
declare const Fabrics: FabricColor[];

export { Cordura, Xpac, Prints };
export default Fabrics;
