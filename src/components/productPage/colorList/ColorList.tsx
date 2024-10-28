import CustomImage from 'src/components/common/customImage';
import useRx from 'src/hooks/useRx';
import shimmerUrl from 'src/helpers/shimmerUrl';

import { IColorListVM } from 'src/types/fabricChoiceTypes';
import { IMappedColor } from 'src/types/fabricChoice';

import st from './ColorList.module.css';

type Props = {
  vm: IColorListVM;
  fabricColors: IMappedColor[];
};

function ColorList({ vm, fabricColors }: Props) {
  const { fabric$, selectedColorName$ } = vm;
  const selectedColorName = useRx(selectedColorName$);

  const handleClick = (colorName: string) => {
    if (colorName === selectedColorName) return;

    const currentFabric = fabric$.getValue();
    const { colors } = currentFabric;

    const newColors = colors.map((color) => {
      if (color.name !== colorName && color.selected) {
        return { ...color, selected: !color.selected };
      }

      if (color.name === colorName && !color.selected) {
        return { ...color, selected: !color.selected };
      }

      return color;
    });

    fabric$.next({ ...currentFabric, colors: newColors });
  };

  return (
    <ul className={st.list}>
      {fabricColors.map(({ name, smallImgSrc }) => (
        <li
          onClick={() => handleClick(name)}
          className={st.listItem}
          key={name}
        >
          <CustomImage
            src={smallImgSrc}
            alt={name}
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={shimmerUrl}
            className={st.img}
          />
        </li>
      ))}
    </ul>
  );
}

export default ColorList;
