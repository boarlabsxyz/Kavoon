'use client';

import { useParams } from 'next/navigation';

import ProductKit from 'src/components/productPage/productKit';
import ProductDetailsWizardTitle from './ProductDetailsWizardTitle';
import ProductDetailsWizardPicker from './ProductDetailsWizardPicker';
import ProductDetailsOrderBtn from './ProductDetailsOrderBtn';
import ProductDetailsWizardPrintPicker from './ProductDetailsWizardPrintPicker';
import ProductDetailsWizardSize from 'src/components/productPage/productDetailsWizardSize';
import ProductDetailsWizardFixing from 'src/components/productPage/productDetailsWizardFixing';
import InfoBeforeSelecting from './infoBeforeSelecting';
import ProductDetailsWizardDimension from './ProductDetailsWizardDimension';
import ProductDetailsWizardChooseZip from 'src/components/productPage/productDetailsWizardChooseZip';

import lang from 'src/i18n/lang';
import productDetailsWizardVM from 'src/data/viewModels/product/productDetailsWizardVM';

import st from './ProductDetailsWizard.module.css';

function ProductDetailsWizard({ products }) {
  const { lang: language, productId } = useParams();
  const vm = productDetailsWizardVM(productId, products);

  const { name } = vm.productDetailsWizardTitleVM;

  return (
    <div className={st.wrapper}>
      <ProductDetailsWizardTitle
        vm={vm.productDetailsWizardTitleVM}
        language={language}
      />
      <div className={st.content}>
        <InfoBeforeSelecting />
        {vm.productDetailsWizardPickerVM && (
          <ProductDetailsWizardPicker
            vm={vm.productDetailsWizardPickerVM}
            language={language}
          />
        )}
        {vm.productDetailsWizardPrintPickerVM && (
          <ProductDetailsWizardPrintPicker
            vm={vm.productDetailsWizardPrintPickerVM}
            language={language}
          />
        )}
        {name === 'FuelBag' && (
          <>
            <ProductDetailsWizardSize
              vm={{
                mainTheme: 'SelectSize',
                items: vm.addSizes,
                selected: vm.addSize,
              }}
              language={language}
            />
            <ProductDetailsWizardFixing
              vm={{
                mainTheme: 'Fixings',
                items: vm.fixings,
                selected: vm.fixing,
              }}
              language={language}
            />
          </>
        )}
        {name === 'InnerFrameBag' && (
          <>
            <ProductDetailsWizardChooseZip
              vm={{
                mainTheme: 'ChooseZip',
                items: vm.chooseZip,
                selected: vm.choosenZip,
              }}
              language={language}
            />
          </>
        )}
        {vm.customSizeParameters && (
          <ProductDetailsWizardDimension
            vm={{
              hintText: lang('HintText', language),
              centimeter: lang('Centimeter', language),
              enterDimensionsText: lang('EnterBikesFrameDimensions', language),
              customSizeParameters: vm.customSizeParameters,
            }}
            takeDimensions={vm.takeDimensions}
          />
        )}

        {vm.productDetailsKitVM && <ProductKit vm={vm.productDetailsKitVM} />}

        <ProductDetailsOrderBtn
          vm={vm.productDetailsOrderBtnVM}
          language={language}
        />
      </div>
    </div>
  );
}

export default ProductDetailsWizard;
