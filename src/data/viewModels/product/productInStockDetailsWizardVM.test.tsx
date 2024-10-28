import productInStockDetailsWizardVM from './productInStockDetailsWizardVM';

interface Product {
  name: string;
  fabrics: { name: string; color: string };
  price: { EUR: number; UAH: number };
  print: string;
  category: string;
  subcategory: string;
  volume: number;
}

const product: Product = {
  name: 'Product Name',
  fabrics: { name: 'Fabric Name', color: 'Color' },
  price: { EUR: 100, UAH: 3000 },
  print: 'PrintName',
  category: 'Category',
  subcategory: 'Subcategory',
  volume: 1,
};

const products: Product[] = [product];

const expectedMaterialPrint = {
  largeImgSrc: `/img/prints/${products[0].print}_385x355@3x.png`,
  name: `${products[0].print}`,
  smallImgSrc: `/img/prints/${products[0].print}_100x100@3x.png`,
};

const expectedMaterialPrints = [expectedMaterialPrint];

const vm = productInStockDetailsWizardVM(product, products);
test('productInStockDetailsWizardVM return correct result', () => {
  expect(
    vm.productDetailsWizardPrintPickerVM.colorForSmallPreview$.getValue()
  ).toEqual(expectedMaterialPrints);
  expect(vm.productDetailsWizardPrintPickerVM.selected.getValue()).toEqual(
    expectedMaterialPrint
  );
  expect(vm.productDetailsWizardPrintPickerVM.isOnlyOneFabricPrint).toEqual(
    true
  );

  expect(vm.materialPrints.getValue()).toEqual(expectedMaterialPrints);
  expect(vm.materialPrint.getValue()).toEqual(expectedMaterialPrint);
  expect(vm.category).toEqual('Category');
  expect(vm.subcategory).toEqual('Subcategory');
});
