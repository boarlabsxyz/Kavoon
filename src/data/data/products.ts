import Product from 'src/types/product';

import {
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  CITY_COLLECTION,
  PRODUCT_KIT,
  CUSTOMER_PARAMETERS,
  IN_STOCK,
  CHEVRONS,
} from 'src/data/constants';
import { Cordura, Xpac } from './fabrics/fabrics';

const bikeWallet = () => ({
  id: 'bike-wallet',
  name: 'BikeWallet',
  volume: null,
  size: `13 x 8`,
  weight: null,
  material: null,
  description: {
    short: 'BikeWalletDescription',
    main: null,
    conclusion: null,
  },
  gallery: 4,
  price: {
    cordura: { UAH: 500, EUR: 14 },
    xpac: { UAH: 500, EUR: 14 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: {
    id: 'y62ZuCpf-a0',
    title: 'BikeWalletVideoTitle',
  },
  category: BAG_ACCESSORIES,
  subcategory: null,
  productKit: null,
  createdAt: '2023-04-10',
});

const organizer = () => ({
  id: 'organizer',
  name: 'Organizer',
  volume: null,
  size: `18 x 12 x 5`,
  weight: null,
  material: null,
  description: {
    short: 'OrganizerDescription',
    main: null,
    conclusion: null,
  },
  gallery: 3,
  price: {
    cordura: { UAH: 600, EUR: 17 },
    xpac: { UAH: 700, EUR: 20 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BAG_ACCESSORIES,
  subcategory: null,
  productKit: null,
  createdAt: '2023-04-24',
});

const backpackForCity = () => ({
  id: 'backpack-for-city',
  name: 'BackpackForCity',
  volume: null,
  size: '40 x 25 x 12',
  sizeOfTheClosedBag: true,
  weight: null,
  material: null,
  description: {
    short: null,
    main: 'BackpackForCityDescription',
    conclusion: 'BackpackForCityConclusion',
  },
  gallery: 7,
  price: {
    cordura: { UAH: 3500, EUR: 90 },
    xpac: { UAH: 3900, EUR: 100 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: CITY_COLLECTION,
  subcategory: null,
  productKit: null,
  createdAt: '2022-09-22',
});

const hamster = () => ({
  id: 'hamster',
  name: 'Hamster',
  volume: '1',
  size: `22 x 9 x 10`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 110,
    },
    {
      fabric: 'Xpac',
      weight: 95,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'HamsterDescription',
    conclusion: 'HamsterConclusion',
  },
  gallery: 10,
  price: {
    cordura: { UAH: 1100, EUR: 30 },
    xpac: { UAH: 1250, EUR: 35 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
  createdAt: '2022-06-13',
});

const barrelBagWithoutValve = () => ({
  id: 'barrel-bag-without-valve',
  name: 'BarrelBagWithoutValve',
  volume: '3',
  size: `14 x 25`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 320,
    },
    {
      fabric: 'Xpac',
      weight: 315,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'BarrelBagWithoutValveDescription',
    conclusion: 'BarrelBagWithoutValveConclusion',
  },
  gallery: 7,
  price: {
    cordura: { UAH: 1900, EUR: 52 },
    xpac: { UAH: 2100, EUR: 58 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2022-06-13',
});

const seatBag3L = () => ({
  id: 'seat-bag-3l',
  name: 'SeatBag3l',
  volume: '3',
  size: `11 x 12 x 30`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 300,
    },
    {
      fabric: 'Xpac',
      weight: 200,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'SeatBag3lDescription',
    conclusion: 'SeatBag3lConclusion',
  },
  gallery: 5,
  price: {
    cordura: { UAH: 1850, EUR: 50 },
    xpac: { UAH: 2100, EUR: 58 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.SeatBags,
  productKit: null,
  createdAt: '2022-06-13',
});

const halfFrameBag = () => ({
  id: 'half-frame-bag',
  name: 'HalfFrameBag',
  volume: '1.5-2',
  size: CUSTOMER_PARAMETERS,
  weight: CUSTOMER_PARAMETERS,
  material: null,
  description: {
    short: null,
    main: 'HalfFrameBagDescription',
    conclusion: 'HalfFrameBagConclusion',
  },

  gallery: 5,
  price: {
    cordura: { UAH: 2000, EUR: 55 },
    xpac: { UAH: 2300, EUR: 64 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  customSizeParameters: [
    {
      scheme_id: '1',
      schemeImageSrc:
        '/img/dimensions-schemes/half-frame-bag/half-frame-bag-dimensions-scheme-1_343x238@3x.jpg',
      parameters: ['gb', 'bc', 'cd', 'df', 'gh', 'ef', 'cg', 'bd'],
    },
    {
      scheme_id: '2',
      schemeImageSrc:
        '/img/dimensions-schemes/half-frame-bag/half-frame-bag-dimensions-scheme-2_343x238@3x.jpg',
      parameters: ['gb', 'bc', 'cd', 'df', 'gf', 'ef', 'cg', 'bd'],
    },
  ],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
  createdAt: '2022-06-13',
});

const triangularBicycleFirstAidKitFrame = () => ({
  id: 'triangular-bicycle-first-aid-kit-frame',
  name: 'TriangularBicycleFirstAidKitFrame',
  volume: '0.5',
  size: `18 x 15 x 6`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 100,
    },
    {
      fabric: 'Xpac',
      weight: 90,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'TriangularBicycleFirstAidKitFrameDescription',
    conclusion: 'TriangularBicycleFirstAidKitFrameConclusion',
  },
  gallery: 8,
  price: {
    cordura: { UAH: 1050, EUR: 28 },
    xpac: { UAH: 1200, EUR: 33 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
  createdAt: '2020-07-30',
});

const smallBagTubeOnBar = () => ({
  id: 'small-bag-tube-on-bar',
  name: 'SmallBagTubeOnBar',
  volume: '4',
  size: `24 x 21 x 14`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 580,
    },
    {
      fabric: 'Xpac',
      weight: 420,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'SmallBagTubeOnBarDescription',
    conclusion: 'SmallBagTubeOnBarConclusion',
  },
  gallery: 9,
  price: {
    cordura: { UAH: 2200, EUR: 61 },
    xpac: { UAH: 2500, EUR: 70 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2020-08-14',
});

const bananaOnBar = () => ({
  id: 'banana-on-bar',
  name: 'BananaOnBar',
  volume: '4',
  size: `17 x 33 x 14`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 460,
    },
    {
      fabric: 'Xpac',
      weight: 360,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'BananaOnBarDescription',
    conclusion: 'BananaOnBarConclusion',
  },
  gallery: 8,
  price: {
    cordura: { UAH: 2400, EUR: 67 },
    xpac: { UAH: 2600, EUR: 73 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2020-08-14',
});

const seatBag5L = () => ({
  id: 'seat-bag-5l',
  name: 'SeatBag5l',
  volume: '5',
  size: `16 x 17 x 38`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 500,
    },
    {
      fabric: 'Xpac',
      weight: 350,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'SeatBag5lDescription',
    conclusion: 'SeatBag5lConclusion',
  },
  gallery: 11,
  price: {
    cordura: { UAH: 2500, EUR: 70 },
    xpac: { UAH: 2950, EUR: 80 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.SeatBags,
  productKit: null,
  createdAt: '2022-02-17',
});

const innerFrameBag = () => ({
  id: 'inner-frame-bag',
  name: 'InnerFrameBag',
  volume: '3-5',
  size: CUSTOMER_PARAMETERS,
  zip: ['onRight', 'onLeft'],
  weight: CUSTOMER_PARAMETERS,
  material: null,
  description: {
    short: null,
    main: 'InnerFrameBagDescription',
    conclusion: 'InnerFrameBagConclusion',
  },
  gallery: 3,
  price: {
    cordura: { UAH: 2700, EUR: 76 },
    xpac: { UAH: 3200, EUR: 85 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  customSizeParameters: [
    {
      scheme_id: '1',
      schemeImageSrc:
        '/img/dimensions-schemes/inner-frame-bag/inner-frame-bag-dimensions-scheme-1_335x251.jpg',
      parameters: ['ab', 'bc', 'cd', 'bd', 'ad'],
    },
  ],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
  createdAt: '2020-07-09',
});

const barrelBagWithValve = () => ({
  id: 'barrel-bag-with-valve',
  name: 'BarrelBagWithValve',
  volume: '3',
  size: `14 x 25`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 600,
    },
    {
      fabric: 'Xpac',
      weight: 450,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'BarrelBagWithValveDescription',
    conclusion: 'BarrelBagWithValveConclusion',
  },
  gallery: 6,
  price: {
    cordura: { UAH: 2300, EUR: 64 },
    xpac: { UAH: 2600, EUR: 73 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2021-11-10',
});

const fuelBag = () => ({
  id: 'fuel-bag',
  name: 'FuelBag',
  volume: '0.5',
  size: null,
  addSizes: ['17x8', '20x10', '21,5x8', 'customSize'],
  fixings: ['velcro', 'chainringBolts'],
  weight: [
    {
      fabric: 'Cordura',
      weight: 90,
    },
    {
      fabric: 'Xpac',
      weight: '70-80',
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'FuelBagDescription',
    conclusion: 'FuelBagConclusion',
  },
  gallery: 5,
  price: {
    cordura: { UAH: 1200, EUR: 33 },
    xpac: { UAH: 1350, EUR: 38 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
  createdAt: '2021-11-10',
});

const ovalBarrelbag = () => ({
  id: 'oval-barrelbag',
  name: 'OvalBarrelbag',
  volume: '3.5',
  size: `19 x 14 x 25`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 390,
    },
    {
      fabric: 'Xpac',
      weight: 356,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'OvalBarrelbagDescription',
    conclusion: 'OvalBarrelbagConclusion',
  },
  gallery: 5,
  price: {
    cordura: { UAH: 2100, EUR: 58 },
    xpac: { UAH: 2400, EUR: 67 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2022-02-19',
});

const smallToolSeatbag = () => ({
  id: 'small-tool-seatbag',
  name: 'SmallToolSeatbag',
  volume: '0.8',
  size: `21 x 5-7 x 11`,
  weight: null,
  material: null,
  description: {
    short: null,
    main: 'SmallToolSeatbagDescription',
    conclusion: 'SmallToolSeatbagConclusion',
  },
  gallery: 4,
  price: {
    cordura: { UAH: 1250, EUR: 35 },
    xpac: { UAH: 1550, EUR: 44 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.SeatBags,
  productKit: null,
  createdAt: '2022-10-13',
});

const barrelBagMini = () => ({
  id: 'barrel-bag-mini',
  name: 'BarrelBagMini',
  volume: '0.75',
  size: '19.5 x 8',
  weight: [
    {
      fabric: 'Cordura',
      weight: 200,
    },
    {
      fabric: 'Xpac',
      weight: 130,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'BarrelBagMiniDescription',
    conclusion: 'BarrelBagMiniConclusion',
  },
  gallery: 3,
  price: {
    cordura: { UAH: 1150, EUR: 32 },
    xpac: { UAH: 1300, EUR: 37 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2023-02-15',
});

const tacticalStembag = () => ({
  id: 'tactical-stembag',
  name: 'TacticalStembag',
  volume: '1.0',
  size: '22 x 9 x 10',
  weight: [
    {
      fabric: 'Cordura',
      weight: 170,
    },
    {
      fabric: 'Xpac',
      weight: 120,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'TacticalStembagDescription',
    conclusion: 'TacticalStembagConclusion',
  },
  price: {
    cordura: { UAH: 1400, EUR: 40 },
    xpac: { UAH: 1600, EUR: 45 },
  },
  gallery: 6,
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
  createdAt: '2023-07-04',
});

const loopHandlebarBag = () => ({
  id: 'loop-handlebar-bag',
  name: 'LoopHandlebarBag',
  volume: '1.5-2.5',
  size: CUSTOMER_PARAMETERS,
  weight: CUSTOMER_PARAMETERS,
  material: null,
  description: {
    short: null,
    main: 'LoopHandlebarBagDescription',
    conclusion: 'LoopHandlebarBagConclusion',
  },
  gallery: 5,
  price: {
    cordura: { UAH: 2300, EUR: 64 },
    xpac: { UAH: 2600, EUR: 73 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
  createdAt: '2023-07-04',
});

const barrelbagWithVelcro = () => ({
  id: 'barrelbag-with-velcro',
  name: 'BarrelbagWithVelcro',
  volume: '3',
  size: '14 x 25',
  weight: [
    {
      fabric: 'Cordura',
      weight: 370,
    },
    {
      fabric: 'Xpac',
      weight: 365,
    },
  ],
  material: null,
  description: {
    short: null,
    main: 'BarrelbagWithVelcroDescription',
    conclusion: 'BarrelbagWithVelcroConclusion',
  },
  gallery: 5,
  price: {
    cordura: { UAH: 2000, EUR: 55 },
    xpac: { UAH: 2300, EUR: 64 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2023-07-05',
});

const phonePouch = () => ({
  id: 'phone-pouch',
  name: 'PhonePouch',
  volume: null,
  size: '17 x 8',
  weight: null,
  material: null,
  description: {
    short: 'PhonePouchDescription',
    main: null,
    conclusion: null,
  },
  gallery: 6,
  price: {
    cordura: { UAH: 500, EUR: 14 },
    xpac: { UAH: 550, EUR: 17 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BAG_ACCESSORIES,
  subcategory: null,
  productKit: null,
  createdAt: '2023-07-25',
});

const universalBagForCity = () => ({
  id: 'universal-bag-for-city',
  name: 'UniversalBagForCity',
  volume: '1',
  size: '12 x 9 x 20',
  weight: null,
  material: null,
  description: {
    short: null,
    main: 'UniversalBagForCityDescription',
    conclusion: 'UniversalBagForCityConclusion',
  },
  gallery: 6,
  price: {
    cordura: { UAH: 2200, EUR: 61 },
    xpac: { UAH: 2500, EUR: 70 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: CITY_COLLECTION,
  subcategory: null,
  productKit: null,
  createdAt: '2023-08-09',
});

const handlebarMount = () => ({
  id: 'handlebar-mount',
  name: 'HandlebarMount',
  volume: null,
  size: null,
  weight: 150,
  material: 'HandlebarMountMaterial',
  description: {
    short: 'MountsManufacturerInfo',
    main: 'HandlebarMountDescription',
    conclusion: null,
  },
  gallery: 5,
  price: { UAH: 800, EUR: 25 },
  fabrics: null,
  embedVideo: { id: 'ylSSGONW8Hc', title: 'HandlebarMountVideoTitle' },
  category: BAG_ACCESSORIES,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
  productKit: null,
  createdAt: '2023-12-22',
});

// const hamsterXpacWithoutPockets = () => ({
//   id: 'hamster-xpac-without-pockets',
//   name: 'Hamster',
//   volume: '1',
//   size: `22 x 9 x 10`,
//   weight: [
//     {
//       fabric: 'Xpac',
//       weight: 95,
//     },
//   ],
//   material: null,
//   description: {
//     short: 'HamsterXpacWithoutPocketsShortDescription',
//     main: 'HamsterXWithoutPocketsDescription',
//     conclusion: 'HamsterConclusion',
//   },
//   gallery: 5,
//   price: { UAH: 950, EUR: 28 },
//   fabrics: { name: 'Xpac', color: 'XpacBlack' },
//   print: 'without_print',
//   embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
//   category: IN_STOCK,
//   subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
//   productKit: null,
//   createdAt: '2024-07-11',
// });

const hamsterCorduraNavyBlueFoxes = () => ({
  id: 'hamster-cordura-navyblue-foxes',
  name: 'Hamster',
  volume: '1',
  size: `22 x 9 x 10`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 110,
    },
  ],
  material: null,
  description: {
    short: 'HamsterCorduraNavyblueFoxesShortDescription',
    main: 'HamsterDescription',
    conclusion: 'HamsterConclusion',
  },
  gallery: 3,
  price: { UAH: 1100, EUR: 30 },
  fabrics: { name: 'Cordura', color: 'CorduraNavyBlue' },
  print: 'without_print',
  embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
  createdAt: '2024-07-11',
});

const hamsterCorduraBlackEmbroidery = () => ({
  id: 'hamster-cordura-black-embroidery',
  name: 'Hamster',
  volume: '0.7',
  size: `16 x 9 x 10`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 110,
    },
  ],
  material: null,
  description: {
    short: 'HamsterCorduraBlackEmbroideryShortDescription',
    main: 'HamsterDescription',
    conclusion: 'HamsterConclusion',
  },
  gallery: 4,
  price: { UAH: 1250, EUR: 35 },
  fabrics: { name: 'Cordura', color: 'CorduraBlack' },
  print: 'ornament',
  embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
  createdAt: '2024-07-11',
});

const halfFrameBagXpacOrange = () => ({
  id: 'half-frame-bag-xpac-orange',
  name: 'HalfFrameBag',
  volume: '~ 1',
  size: `10 x 30 x 6`,
  weight: [
    {
      fabric: 'Xpac',
      weight: 200,
    },
  ],
  material: null,
  description: {
    short: 'HalfFrameBagXpacShortDescription',
    main: 'HalfFrameBagXpacDescription',
    conclusion: 'HalfFrameBagXpacConclusion',
  },
  gallery: 7,
  price: { UAH: 2300, EUR: 64 },
  fabrics: { name: 'Xpac', color: 'XpacOrangeNeon' },
  print: 'without_print',
  embedVideo: null,
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
  createdAt: '2024-07-11',
});

const halfFrameBagXpacYellowBlue = () => ({
  id: 'half-frame-bag-xpac-yellow-blue',
  name: 'HalfFrameBag',
  volume: '~ 1',
  size: `10 x 30 x 6`,
  weight: [
    {
      fabric: 'Xpac',
      weight: 200,
    },
  ],
  material: null,
  description: {
    short: 'HalfFrameBagXpacShortDescription',
    main: 'HalfFrameBagXpacDescription',
    conclusion: 'HalfFrameBagXpacConclusion',
  },
  gallery: 8,
  price: { UAH: 2300, EUR: 64 },
  fabrics: { name: 'Xpac', color: 'XpacNavyBlue' },
  print: 'without_print',
  embedVideo: null,
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
  createdAt: '2024-07-11',
});

// const barrelBagWithEmbroideryBlue = () => ({
//   id: 'barrel-bag-with-embroidery-blue',
//   name: 'BarrelBagWithEmbroidery',
//   volume: '3',
//   size: `14 x 25`,
//   weight: [
//     {
//       fabric: 'Cordura',
//       weight: 320,
//     },
//   ],
//   material: null,
//   description: {
//     short: 'BarrelBagWithEmbroideryBlueShortDescription',
//     main: 'BarrelBagWithEmbroideryBlueDescription',
//     conclusion: 'BarrelBagWithEmbroideryConclusion',
//   },
//   gallery: 8,
//   price: { UAH: 2200, EUR: 60 },
//   fabrics: { name: 'Cordura', color: 'CorduraNavyBlue' },
//   print: 'ornament',
//   embedVideo: null,
//   category: IN_STOCK,
//   subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
//   productKit: PRODUCT_KIT,
// createdAt: '2024-07-11',
// });

const barrelBagWithEmbroideryYellow = () => ({
  id: 'barrel-bag-with-embroidery-yellow',
  name: 'BarrelBagWithEmbroidery',
  volume: '3',
  size: `14 x 25`,
  weight: [
    {
      fabric: 'Cordura',
      weight: 320,
    },
  ],
  material: null,
  description: {
    short: 'BarrelBagWithEmbroideryYellowShortDescription',
    main: 'BarrelBagWithEmbroideryYellowDescription',
    conclusion: 'BarrelBagWithEmbroideryConclusion',
  },
  gallery: 7,
  price: { UAH: 2400, EUR: 67 },
  fabrics: { name: 'Cordura', color: 'CorduraYellow' },
  print: 'ornament',
  embedVideo: null,
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
  createdAt: '2024-07-11',
});

const donutChevron = () => ({
  id: 'donut',
  name: 'ChevronDonut',
  volume: null,
  size: '7 x 7.5',
  weight: null,
  material: null,
  description: {
    short: 'ChevronDonutDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 3,
  price: {
    UAH: 160,
    EUR: 4,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const ghostChevron = () => ({
  id: 'ghost',
  name: 'ChevronGhost',
  volume: null,
  size: '6.5 x 8',
  weight: null,
  material: null,
  description: {
    short: 'ChevronGhostDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 5,
  price: {
    UAH: 90,
    EUR: 2,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const heartChevron = () => ({
  id: 'heart',
  name: 'ChevronHeart',
  volume: null,
  size: '6 x 7',
  weight: null,
  material: null,
  description: {
    short: 'ChevronHeartDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 3,
  price: {
    UAH: 120,
    EUR: 3,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const coffeeChevron = () => ({
  id: 'coffee',
  name: 'ChevronCoffee',
  volume: null,
  size: '6.5 x 3',
  weight: null,
  material: null,
  description: {
    short: 'ChevronCoffeeDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 4,
  price: {
    UAH: 90,
    EUR: 3,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const letsgoChevron = () => ({
  id: 'letsgo',
  name: 'ChevronLetsGo',
  volume: null,
  size: '6.5 x 3',
  weight: null,
  material: null,
  description: {
    short: 'ChevronLetsGoDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 4,
  price: {
    UAH: 90,
    EUR: 3,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const sliceChevron = () => ({
  id: 'slice',
  name: 'ChevronSlice',
  volume: null,
  size: '4.5 x 4.5',
  weight: null,
  material: null,
  description: {
    short: 'ChevronSliceDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 3,
  price: {
    UAH: 70,
    EUR: 2,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const stravaChevron = () => ({
  id: 'strava',
  name: 'ChevronStrava',
  volume: null,
  size: '6.5 x 3',
  weight: null,
  material: null,
  description: {
    short: 'ChevronStravaDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 4,
  price: {
    UAH: 90,
    EUR: 3,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const veloCatChevron = () => ({
  id: 'velo-cat',
  name: 'ChevronVelocats',
  volume: null,
  size: '7 x 8',
  weight: null,
  material: null,
  description: {
    short: 'ChevronVelocatsDescription',
    main: 'ChevronUsage',
    conclusion: null,
  },
  mounts: 'ChevronMountType',
  gallery: 3,
  price: {
    UAH: 130,
    EUR: 4,
  },
  fabrics: null,
  embedVideo: null,
  category: CHEVRONS,
  subcategory: null,
  productKit: null,
  createdAt: '2025-03-20',
});

const Products: () => Product[] = () => [
  bikeWallet(),
  organizer(),
  backpackForCity(),
  hamster(),
  barrelBagWithValve(),
  seatBag3L(),
  halfFrameBag(),
  triangularBicycleFirstAidKitFrame(),
  smallBagTubeOnBar(),
  bananaOnBar(),
  seatBag5L(),
  innerFrameBag(),
  fuelBag(),
  barrelBagWithoutValve(),
  ovalBarrelbag(),
  smallToolSeatbag(),
  barrelBagMini(),
  tacticalStembag(),
  loopHandlebarBag(),
  barrelbagWithVelcro(),
  phonePouch(),
  universalBagForCity(),
  handlebarMount(),
  // hamsterXpacWithoutPockets(),
  hamsterCorduraNavyBlueFoxes(),
  hamsterCorduraBlackEmbroidery(),
  halfFrameBagXpacOrange(),
  halfFrameBagXpacYellowBlue(),
  // barrelBagWithEmbroideryBlue(),
  barrelBagWithEmbroideryYellow(),
  donutChevron(),
  ghostChevron(),
  heartChevron(),
  coffeeChevron(),
  letsgoChevron(),
  sliceChevron(),
  stravaChevron(),
  veloCatChevron(),
];

export {
  bikeWallet,
  organizer,
  backpackForCity,
  hamster,
  barrelBagWithoutValve,
  seatBag3L,
  halfFrameBag,
  triangularBicycleFirstAidKitFrame,
  smallBagTubeOnBar,
  bananaOnBar,
  seatBag5L,
  innerFrameBag,
  barrelBagWithValve,
  fuelBag,
  ovalBarrelbag,
  smallToolSeatbag,
  barrelBagMini,
  tacticalStembag,
  loopHandlebarBag,
  barrelbagWithVelcro,
  phonePouch,
  universalBagForCity,
  handlebarMount,
  // hamsterXpacWithoutPockets,
  hamsterCorduraNavyBlueFoxes,
  hamsterCorduraBlackEmbroidery,
  halfFrameBagXpacOrange,
  halfFrameBagXpacYellowBlue,
  // barrelBagWithEmbroideryBlue,
  barrelBagWithEmbroideryYellow,
  donutChevron,
  ghostChevron,
  heartChevron,
  coffeeChevron,
  letsgoChevron,
  sliceChevron,
  stravaChevron,
  veloCatChevron,
};

export default Products;
