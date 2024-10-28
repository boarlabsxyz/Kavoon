import { BehaviorSubject } from 'rxjs';

import { IMappedFabric } from 'src/types/fabricChoice';
import { BAG_ACCESSORIES } from 'src/data/constants';
import productDetailsWizardTitleVM from './productDetailsWizardTitleVM';
import productDetailsWizardPickerVM from './productDetailsWizardPickerVM';
import productDetailsKitVM from './productDetailsKitVM';
import productInStockDetailsOrderBtnVM from './productInStockDetailsOrderBtnVM';

function productInStockDetailsWizardVM(product: any, products: any) {
  const { fabrics, price, print } = product;
  const prints = {
    name: 'Prints',
    colors: [
      {
        largeImgSrc: `/img/prints/${print}_385x355@3x.png`,
        smallImgSrc: `/img/prints/${print}_100x100@3x.png`,
        name: print,
      },
    ],
  };

  const isOnlyOneFabricPrint = true;

  const mappedFabrics = [
    {
      name: fabrics.name,
      colors: [
        {
          largeImgSrc: `/img/fabrics/${fabrics.name.toLowerCase()}/${fabrics.color}_385x355@3x.png`,
          smallImgSrc: `/img/fabrics/${fabrics.name.toLowerCase()}/${fabrics.color}_100x100@3x.png`,
          name: fabrics.color,
          selected: true,
        },
      ],
      priceEURO: price.EUR,
      priceUAH: price.UAH,
    },
  ];

  const isOnlyOneFabricColor = true;

  const [initialFabric] = mappedFabrics;

  const fabric$ = new BehaviorSubject<IMappedFabric>(initialFabric);

  const materialPrints = new BehaviorSubject(prints.colors);
  const materialPrint = new BehaviorSubject(prints.colors[0]);

  const { category, subcategory } = product;

  const wizardPickerVMParams = {
    fabrics: mappedFabrics,
    fabric$,
    isOnlyOneFabricColor,
  };

  const wizardPickerPrintVMParams = {
    colorForSmallPreview$: materialPrints,
    selected: materialPrint,
    isOnlyOneFabricPrint,
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
      category === BAG_ACCESSORIES ? null : wizardPickerPrintVMParams,
    productDetailsWizardTitleVM: productDetailsWizardTitleVM(wizardTitleVMArgs),
    materialPrints,
    materialPrint,
    category,
    subcategory,
    productDetailsKitVM: productKitVM,
    productDetailsOrderBtnVM: productInStockDetailsOrderBtnVM(
      product,
      products,
      isProductKitChecked
    ),
  };
}

export default productInStockDetailsWizardVM;
