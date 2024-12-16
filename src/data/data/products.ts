import Product from 'src/types/product';

import {
  BAG_ACCESSORIES,
  BICYCLE_EQUIPMENT,
  SUBCATEGORIES_BICYCLE_EQUIPMENT,
  CITY_COLLECTION,
  PRODUCT_KIT,
  CUSTOMER_PARAMETERS,
  IN_STOCK,
} from 'src/data/constants';
import { Cordura, Xpac } from './fabrics/fabrics';

const bikeWallet = () => ({
  id: 'bike-wallet',
  name: 'BikeWallet',
  volume: null,
  size: `13/8`,
  weight: null,
  material: null,
  description: {
    short: 'BikeWalletDescription',
    main: null,
    conclusion: null,
  },
  gallery: 4,
  price: {
    cordura: { UAH: 500, EUR: 13 },
    xpac: { UAH: 500, EUR: 13 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: {
    id: 'y62ZuCpf-a0',
    title: 'BikeWalletVideoTitle',
  },
  category: BAG_ACCESSORIES,
  subcategory: null,
  productKit: null,
});

const organizer = () => ({
  id: 'organizer',
  name: 'Organizer',
  volume: null,
  size: `18/12/5`,
  weight: null,
  material: null,
  description: {
    short: 'OrganizerDescription',
    main: null,
    conclusion: null,
  },
  gallery: 3,
  price: {
    cordura: { UAH: 600, EUR: 15 },
    xpac: { UAH: 700, EUR: 18 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BAG_ACCESSORIES,
  subcategory: null,
  productKit: null,
});

const backpackForCity = () => ({
  id: 'backpack-for-city',
  name: 'BackpackForCity',
  volume: null,
  size: '40/25/12',
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
});

const hamster = () => ({
  id: 'hamster',
  name: 'Hamster',
  volume: '1',
  size: `22/9/10`,
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
    cordura: { UAH: 950, EUR: 28 },
    xpac: { UAH: 1050, EUR: 30 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
});

const barrelBagWithoutValve = () => ({
  id: 'barrel-bag-without-valve',
  name: 'BarrelBagWithoutValve',
  volume: '3',
  size: `14/25`,
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
    cordura: { UAH: 1550, EUR: 42 },
    xpac: { UAH: 1800, EUR: 50 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
});

const seatBag3L = () => ({
  id: 'seat-bag-3l',
  name: 'SeatBag3l',
  volume: '3',
  size: `11/12/30`,
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
    cordura: { UAH: 1650, EUR: 45 },
    xpac: { UAH: 1850, EUR: 51 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.SeatBags,
  productKit: null,
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
    cordura: { UAH: 1700, EUR: 47 },
    xpac: { UAH: 1950, EUR: 55 },
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
});

const triangularBicycleFirstAidKitFrame = () => ({
  id: 'triangular-bicycle-first-aid-kit-frame',
  name: 'TriangularBicycleFirstAidKitFrame',
  volume: '0.5',
  size: `18/15/6`,
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
    cordura: { UAH: 750, EUR: 21 },
    xpac: { UAH: 850, EUR: 24 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
});

const smallBagTubeOnBar = () => ({
  id: 'small-bag-tube-on-bar',
  name: 'SmallBagTubeOnBar',
  volume: '4',
  size: `24/21/14`,
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
    cordura: { UAH: 1900, EUR: 54 },
    xpac: { UAH: 2200, EUR: 60 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
});

const bananaOnBar = () => ({
  id: 'banana-on-bar',
  name: 'BananaOnBar',
  volume: '4',
  size: `17/33/14`,
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
    cordura: { UAH: 2400, EUR: 65 },
    xpac: { UAH: 2600, EUR: 71 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
});

const seatBag5L = () => ({
  id: 'seat-bag-5l',
  name: 'SeatBag5l',
  volume: '5',
  size: `16/17/38`,
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
    cordura: { UAH: 2500, EUR: 68 },
    xpac: { UAH: 2950, EUR: 80 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.SeatBags,
  productKit: null,
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
    cordura: { UAH: 2400, EUR: 65 },
    xpac: { UAH: 2850, EUR: 78 },
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
});

const barrelBagWithValve = () => ({
  id: 'barrel-bag-with-valve',
  name: 'BarrelBagWithValve',
  volume: '3',
  size: `14/25`,
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
    cordura: { UAH: 2000, EUR: 55 },
    xpac: { UAH: 2400, EUR: 65 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
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
    cordura: { UAH: 1050, EUR: 30 },
    xpac: { UAH: 1150, EUR: 32 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
});

const ovalBarrelbag = () => ({
  id: 'oval-barrelbag',
  name: 'OvalBarrelbag',
  volume: '3.5',
  size: `19/14/25`,
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
    cordura: { UAH: 1650, EUR: 45 },
    xpac: { UAH: 1850, EUR: 52 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
});

const smallToolSeatbag = () => ({
  id: 'small-tool-seatbag',
  name: 'SmallToolSeatbag',
  volume: '0.8',
  size: `21/5-7/11`,
  weight: null,
  material: null,
  description: {
    short: null,
    main: 'SmallToolSeatbagDescription',
    conclusion: 'SmallToolSeatbagConclusion',
  },
  gallery: 4,
  price: {
    cordura: { UAH: 1050, EUR: 30 },
    xpac: { UAH: 1350, EUR: 35 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.SeatBags,
  productKit: null,
});

const barrelBagMini = () => ({
  id: 'barrel-bag-mini',
  name: 'BarrelBagMini',
  volume: '0.75',
  size: '19.5/8',
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
    cordura: { UAH: 750, EUR: 20 },
    xpac: { UAH: 850, EUR: 23 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
});

const tacticalStembag = () => ({
  id: 'tactical-stembag',
  name: 'TacticalStembag',
  volume: '1.0',
  size: '22/9/10',
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
    cordura: { UAH: 1050, EUR: 30 },
    xpac: { UAH: 1150, EUR: 35 },
  },
  gallery: 6,
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
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
    cordura: { UAH: 2000, EUR: 55 },
    xpac: { UAH: 2200, EUR: 60 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
});

const barrelbagWithVelcro = () => ({
  id: 'barrelbag-with-velcro',
  name: 'BarrelbagWithVelcro',
  volume: '3',
  size: '14/25',
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
    cordura: { UAH: 1800, EUR: 50 },
    xpac: { UAH: 1900, EUR: 54 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
});

const phonePouch = () => ({
  id: 'phone-pouch',
  name: 'PhonePouch',
  volume: null,
  size: '17/8',
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
    xpac: { UAH: 550, EUR: 15 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: BAG_ACCESSORIES,
  subcategory: null,
  productKit: null,
});

const universalBagForCity = () => ({
  id: 'universal-bag-for-city',
  name: 'UniversalBagForCity',
  volume: '1',
  size: '12/9/20',
  weight: null,
  material: null,
  description: {
    short: null,
    main: 'UniversalBagForCityDescription',
    conclusion: 'UniversalBagForCityConclusion',
  },
  gallery: 6,
  price: {
    cordura: { UAH: 2100, EUR: 57 },
    xpac: { UAH: 2400, EUR: 65 },
  },
  fabrics: [{ fabric: Cordura }, { fabric: Xpac }],
  embedVideo: null,
  category: CITY_COLLECTION,
  subcategory: null,
  productKit: null,
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
  price: { UAH: 650, EUR: 20 },
  fabrics: null,
  embedVideo: { id: 'ylSSGONW8Hc', title: 'HandlebarMountVideoTitle' },
  category: BICYCLE_EQUIPMENT,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.Mounts,
  productKit: null,
});

// const hamsterXpacWithoutPockets = () => ({
//   id: 'hamster-xpac-without-pockets',
//   name: 'Hamster',
//   volume: '1',
//   size: `22/9/10`,
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
// });

const hamsterCorduraNavyBlueFoxes = () => ({
  id: 'hamster-cordura-navyblue-foxes',
  name: 'Hamster',
  volume: '1',
  size: `22/9/10`,
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
  price: { UAH: 950, EUR: 28 },
  fabrics: { name: 'Cordura', color: 'CorduraNavyBlue' },
  print: 'foxes',
  embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
});

const hamsterCorduraBlackEmbroidery = () => ({
  id: 'hamster-cordura-black-embroidery',
  name: 'Hamster',
  volume: '0.7',
  size: `16/9/10`,
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
  price: { UAH: 1100, EUR: 31 },
  fabrics: { name: 'Cordura', color: 'CorduraBlack' },
  print: 'ornament',
  embedVideo: { id: 'K5kL6kvoW-E', title: 'HamsterVideoTitle' },
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: null,
});

const halfFrameBagXpacOrange = () => ({
  id: 'half-frame-bag-xpac-orange',
  name: 'HalfFrameBag',
  volume: '~ 1',
  size: `10/30/6`,
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
  price: { UAH: 2100, EUR: 58 },
  fabrics: { name: 'Xpac', color: 'XpacOrangeNeon' },
  print: 'without_print',
  embedVideo: null,
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
});

const halfFrameBagXpacYellowBlue = () => ({
  id: 'half-frame-bag-xpac-yellow-blue',
  name: 'HalfFrameBag',
  volume: '~ 1',
  size: `10/30/6`,
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
  price: { UAH: 2100, EUR: 58 },
  fabrics: { name: 'Xpac', color: 'XpacNavyBlue' },
  print: 'without_print',
  embedVideo: null,
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.FrameBag,
  productKit: null,
});

// const barrelBagWithEmbroideryBlue = () => ({
//   id: 'barrel-bag-with-embroidery-blue',
//   name: 'BarrelBagWithEmbroidery',
//   volume: '3',
//   size: `14/25`,
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
// });

const barrelBagWithEmbroideryYellow = () => ({
  id: 'barrel-bag-with-embroidery-yellow',
  name: 'BarrelBagWithEmbroidery',
  volume: '3',
  size: `14/25`,
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
  price: { UAH: 2200, EUR: 60 },
  fabrics: { name: 'Cordura', color: 'CorduraYellow' },
  print: 'ornament',
  embedVideo: null,
  category: IN_STOCK,
  subcategory: SUBCATEGORIES_BICYCLE_EQUIPMENT.HandlebarBags,
  productKit: PRODUCT_KIT,
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
};

export default Products;
