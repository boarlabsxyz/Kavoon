import { BehaviorSubject } from 'rxjs';

import { IMappedFabric, IFabric } from 'src/types/fabricChoice';
import { Prints } from 'src/data/data/fabrics/fabrics';
import {
  BAG_ACCESSORIES,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  IN_STOCK,
  CUSTOMER_PARAMETERS,
  CHEVRONS,
} from 'src/data/constants';
import Product, { ProductFabricData, FabricPrice } from 'src/types/product';
import productDetailsWizardTitleVM from './productDetailsWizardTitleVM';
import productDetailsOrderBtnVM from './productDetailsOrderBtnVM';
import productDetailsWizardPickerVM from './productDetailsWizardPickerVM';
import productDetailsKitVM from './productDetailsKitVM';
import mountProductDetailsWizardVM from './mountProductDetailsWizardVM';
import productInStockDetailsWizardVM from './productInStockDetailsWizardVM';
import chevronProductDetailsWizardVM from './chevronProductDetailsWizardVM';

function productDetailsWizardVM(productId: string, products: Product[] = []) {
  const product = products.find(({ id }) => id === productId);
  if (!product) {
    return null;
  }

  if (product.subcategory === SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts) {
    return mountProductDetailsWizardVM(product);
  }

  if (product.category === IN_STOCK) {
    return productInStockDetailsWizardVM(product, products);
  }

  if (product.category === CHEVRONS) {
    return chevronProductDetailsWizardVM(product);
  }

  const price = product.price as FabricPrice;
  const fabrics = product.fabrics as ProductFabricData[];

  const mappedFabrics: IMappedFabric[] = fabrics.map(
    (fabricValue: IFabric): IMappedFabric => {
      const { fabric } = fabricValue;

      const initialColors = fabric.colors.map((color, idx) => ({
        ...color,
        selected: idx === 0,
      }));
      const priceKey = fabric.name.toLowerCase();

      return {
        name: fabric.name,
        colors: initialColors,
        priceEURO: price[priceKey].EUR,
        priceUAH: price[priceKey].UAH,
      };
    }
  );

  const [initialFabric] = mappedFabrics;

  const fabric$ = new BehaviorSubject<IMappedFabric>(initialFabric);

  const materialPrints = new BehaviorSubject(Prints.prints);
  const materialPrint = new BehaviorSubject(Prints.prints[0]);

  const addSizes = new BehaviorSubject(product.addSizes);
  const isAddSizes = product.addSizes ? product.addSizes[0] : '';
  const addSize = new BehaviorSubject(isAddSizes);

  const fixings = new BehaviorSubject(product.fixings);
  const isFixings = product.fixings ? product.fixings[0] : '';
  const fixing = new BehaviorSubject(isFixings);

  const chooseZip = new BehaviorSubject(product.zip);
  const isChoosenZip = product.zip ? product.zip[0] : '';
  const choosenZip = new BehaviorSubject(isChoosenZip);

  const { category, subcategory } = product;

  const customSizeParameters =
    product.customSizeParameters && product.customSizeParameters.length
      ? product.customSizeParameters
      : null;

  const dimensions = new BehaviorSubject<object | string>(CUSTOMER_PARAMETERS);

  const takeDimensions = (value) => {
    dimensions.next(value);
  };

  const wizardPickerVMParams = {
    fabrics: mappedFabrics,
    fabric$,
  };

  const wizardTitleVMArgs = {
    name: product.name,
    fabric$,
    volume: product.volume,
  };

  const productKitVM = productDetailsKitVM(product, products);
  let isProductKitChecked: BehaviorSubject<boolean> | null = null;
  if (productKitVM) {
    isProductKitChecked = productKitVM.productDetailsKitCheckboxVM.isChecked$;
  }

  return {
    productDetailsWizardPickerVM:
      productDetailsWizardPickerVM(wizardPickerVMParams),
    productDetailsWizardPrintPickerVM:
      category === BAG_ACCESSORIES
        ? null
        : {
            colorForSmallPreview$: materialPrints,
            selected: materialPrint,
          },
    productDetailsWizardTitleVM: productDetailsWizardTitleVM(wizardTitleVMArgs),
    addSizes,
    addSize,
    fixings,
    fixing,
    chooseZip,
    choosenZip,
    category,
    subcategory,
    productDetailsKitVM: productKitVM,
    productDetailsOrderBtnVM: productDetailsOrderBtnVM(
      product,
      products,
      fabric$,
      materialPrint,
      dimensions,
      addSize,
      fixing,
      choosenZip,
      isProductKitChecked
    ),
    customSizeParameters,
    takeDimensions,
  };
}

export default productDetailsWizardVM;
