import { BehaviorSubject } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

import cartModel from 'src/data/logic/cartLogic';
import Product, { Currencies } from 'src/types/product';

import { IMappedFabric } from 'src/types/fabricChoice';
import { FabricColorPrint } from 'src/data/data/fabrics/fabrics';
import takeStreamValue from 'src/data/viewModels/takeStreamValue';

const productDetailsOrderBtnVM = (
  product: Product,
  products: Product[],
  fabric: BehaviorSubject<IMappedFabric>,
  materialPrint: BehaviorSubject<FabricColorPrint>,
  dimensions: BehaviorSubject<{}>,
  addSize: BehaviorSubject<string>,
  fixing: BehaviorSubject<string>,
  choosenZip: BehaviorSubject<string>,
  isProductKitChecked: BehaviorSubject<boolean>
) => {
  const addProduct = () => {
    const { name, priceEURO, priceUAH, colors } = fabric.getValue();
    const [selectedColor] = colors.filter((color) => color.selected);

    const materialPrintValue = takeStreamValue(
      materialPrint,
      'selectedParameter'
    );
    const dimensionsValue = takeStreamValue(dimensions);
    const addSizeValue = takeStreamValue(addSize);
    const fixingValue = takeStreamValue(fixing);
    const choosenZipValue = takeStreamValue(choosenZip);

    cartModel.addProduct({
      name: product.name,
      id: product.id,
      volume: product.volume,
      fabric: name,
      color: selectedColor.name,
      priceEURO,
      priceUAH,
      materialPrint: materialPrintValue,
      count: 1,
      cartId: uuidv4(),
      picture: `/products/${product.id}/${product.id}_120x120@3x.png`,
      dimensions: dimensionsValue,
      size: product.size,
      addSize: addSizeValue,
      fixing: fixingValue,
      choosenZip: choosenZipValue,
    });

    if (
      isProductKitChecked instanceof BehaviorSubject &&
      isProductKitChecked.getValue()
    ) {
      const mount = products.find(
        (productItem) => productItem.id === product.productKit.id
      );
      const { price } = mount as { price: Currencies };
      isProductKitChecked.next(false);
      cartModel.addProduct({
        name: mount.name,
        id: mount.id,
        priceEURO: price.EUR,
        priceUAH: price.UAH,
        dimensions: '',
        count: 1,
        cartId: uuidv4(),
        picture: `/products/${mount.id}/${mount.id}_120x120@3x.png`,
      });
    }
  };

  return {
    name: product.name,
    addProduct,
  };
};

export default productDetailsOrderBtnVM;
