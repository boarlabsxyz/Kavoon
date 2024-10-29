import {
  triangularBicycleFirstAidKitFrame,
  bananaOnBar,
  seatBag5L,
} from './products.ts';
import { Prints } from './fabrics/fabrics';

const allKitDiscount = () => ({
  discount: 0,
  kit: [
    {
      ...triangularBicycleFirstAidKitFrame(),
      materialPrint: Prints,
      count: 1,
    },
    {
      ...bananaOnBar(),
      materialPrint: Prints,
      count: 1,
    },
    {
      ...seatBag5L(),
      materialPrint: Prints,
      count: 1,
    },
  ],
});

export default allKitDiscount;
