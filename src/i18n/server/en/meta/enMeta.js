import metaStructure from '../../meta/metaStructure';

const enMeta = {
  ...metaStructure,
  'backpack-for-city': {
    title: 'Backpack for the city',
    description: `Backpack - convenient for everyday use. Suitable for 1-2 day hikes. You can fix small pouches as an additional volume`,
  },
  'banana-on-bar': {
    title: 'Handlebar Bag "BumBag"',
    description: `Indispensable for small things. It has many pockets. It is product for any traveling`,
  },
  'barrel-bag-mini': {
    title: 'Handlebar bag "Barrelbag mini"',
    description: `A small handlebar bag for trinkets. For daily trips. Suitable for marathons, brevets and short distances`,
  },
  'barrel-bag-with-embroidery-blue': commonDescriptions.barrelbagWithoutValve,
  'barrel-bag-with-embroidery-yellow': commonDescriptions.barrelbagWithoutValve,
  'barrel-bag-without-valve': commonDescriptions.barrelbagWithoutValve,
  'half-frame-bag': commonDescriptions.framepackHalf,
  'half-frame-bag-xpac-orange': commonDescriptions.framepackHalf,
  'half-frame-bag-xpac-yellow-blue': commonDescriptions.framepackHalf,
  hamster: commonDescriptions.hamsterBag,
  'hamster-cordura-black-embroidery': commonDescriptions.hamsterBag,
  'hamster-cordura-navyblue-foxes': commonDescriptions.hamsterBag,
  'hamster-xpac-without-pockets': commonDescriptions.hamsterBag,
  'fuel-bag': {
    title: 'Fuelbag',
    description: commonDescriptions.fuelBag,
  },
  'triangular-bicycle-first-aid-kit-frame': {
    title: 'TopTube Pack',
    description: commonDescriptions.fuelBag,
  },
  'universal-bag-for-city': {
    title: 'Universal Bag',
    description: commonDescriptions.universalBag,
  },
  'chevron-lets-go': {
    title: 'Chevron "Let\'s Go"',
    description: commonDescriptions.chevron(
      "Let\'s Go",
      ' – cycling patch with Velcro. Pairs well with the "Strava" and "Coffee" chevrons.'
    ),
  },
  'chevron-strava': {
    title: 'Chevron "Strava"',
    description: commonDescriptions.chevron(
      'Strava',
      ' – stylish cycling patch. Pairs well with the "Coffee" and "Let\'s Go" chevrons.'
    ),
  },
  'chevron-velocats': {
    title: 'Chevron "Velocats"',
    description: commonDescriptions.chevron(
      'Velocats',
      ' – patch for cyclists defending Ukraine.'
    ),
  },
  'chevron-coffee': {
    title: 'Chevron "Coffee"',
    description: commonDescriptions.chevron(
      'Coffee',
      ' – unique cycling patch. Part of the "Cycling" series.'
    ),
  },
  'chevron-donut': {
    title: 'Chevron "Donut"',
    description: commonDescriptions.chevron(
      'Donut',
      " – watermelon-inspired patch. A fun reminder of Ukraine\'s sunny south."
    ),
  },
  'chevron-ghost': {
    title: 'Chevron "Ghost"',
    description: commonDescriptions.chevron(
      'Ghost',
      ' – reflective embroidered patch. Made with reflective fabric for night visibility.'
    ),
  },
  'chevron-heart': {
    title: 'Chevron "Heart"',
    description: commonDescriptions.chevron(
      'Heart',
      " – watermelon-inspired patch. A tribute to Ukraine\'s sunny south."
    ),
  },
  'chevron-slice': {
    title: 'Chevron "Slice"',
    description: commonDescriptions.chevron(
      'Slice',
      " – watermelon patch. A tribute to Ukraine\'s sunny south."
    ),
  },
};

export default enMeta;
