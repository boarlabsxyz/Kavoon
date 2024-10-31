import fabricColors from './fabricsData';

const { corduraColors, fabricPrints, xPacColors } = fabricColors;

const CorduraSrc = '/img/fabrics/cordura/';
const XpacSrc = '/img/fabrics/xpac/';
const PrintsSrc = '/img/prints/';

const formSrcPrint = (src, name) => ({
  smallImgSrc: `${src}${name}_100x100@3x.png`,
  largeImgSrc: `${src}${name}_385x355@3x.png`,
});

const makeFabricColors = (name, path, initialColors, fieldName = 'colors') => ({
  name,
  [fieldName]: initialColors.map((color) => ({
    ...formSrcPrint(path, color),
    name: color,
  })),
});

const Cordura = makeFabricColors('Cordura', CorduraSrc, corduraColors);

const Xpac = makeFabricColors('Xpac', XpacSrc, xPacColors);

const Prints = makeFabricColors('Prints', PrintsSrc, fabricPrints, 'prints');

const Fabrics = () => [Cordura, Xpac, Prints];

export { Cordura, Xpac, Prints };
export default Fabrics;
