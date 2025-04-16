import lang from 'src/i18n/lang';
import { Field } from 'src/types/product';
import { Language } from 'src/types/language';

export const makeFieldsForCart = (language) => {
  const fieldsForCart = [
    {
      name: lang('Volume', language),
      field: 'volume',
      unitOfMeasure: 'Liters',
    },
    {
      name: lang('BasicFabric', language),
      field: 'fabric',
    },
    {
      name: lang('BasicColor', language),
      field: 'color',
    },
    {
      name: lang('Print', language),
      field: 'materialPrint',
    },
    {
      name: lang('Dimensions', language),
      field: 'dimensions',
    },
    {
      name: lang('Fixings', language),
      field: 'fixing',
    },
    {
      name: lang('MainZip', language),
      field: 'choosenZip',
    },
    {
      name: lang('Sum', language),
      field: language === 'en' || language === 'pl' ? 'priceEURO' : 'priceUAH',
      unitOfMeasure: 'Currency',
    },
  ];

  return fieldsForCart;
};

export const makeFieldsForOrder = (language) => {
  const fieldsForOrder = [
    {
      name: lang('ProductName'),
      field: 'name',
    },
    {
      name: lang('Quantity'),
      field: 'count',
    },
    ...makeFieldsForCart(language),
  ];

  return fieldsForOrder;
};

export const makeFieldsForInfoSection = (language: Language): Field[] => {
  const fields = [
    {
      name: lang('Volume', language),
      field: 'volume',
      unitOfMeasure: lang('Liters', language),
    },
    {
      name: lang('Size', language),
      field: 'size',
      unitOfMeasure: lang('Santimeters', language),
    },
    {
      name: lang('Weight', language),
      field: 'weight',
    },
    {
      name: lang('Material', language),
      field: 'material',
    },
    {
      name: lang('Description', language),
      field: 'description',
    },
    {
      name: lang('Mounts', language),
      field: 'mounts',
    },
  ];

  return fields;
};
