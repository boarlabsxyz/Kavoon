import CustomImage from 'src/components/common/customImage';

import st from './dropdownList.module.css';
import { Messenger, Network } from 'src/types/pickersProps';

type Props = {
  readonly optionsList: ReadonlyArray<Messenger | Network>;
  readonly handleSelect: (item: Messenger | Network) => void;
  readonly pickedItem: Messenger | Network;
};

function isMessenger(item: Messenger | Network): item is Messenger {
  return (item as Messenger).src !== undefined;
}

function DropdownList({ optionsList, handleSelect, pickedItem }: Props) {
  return (
    <ul className={st.list} role="listbox" id="options-list">
      {optionsList.map((item) => (
        <li
          onClick={() => handleSelect(item)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleSelect(item);
            }
          }}
          key={item.name}
          className={st.item}
          role="option"
          tabIndex={0}
          aria-selected={pickedItem?.name === item.name}
        >
          {isMessenger(item) ? (
            <>
              <CustomImage
                src={item.src}
                alt="option icon"
                width={35}
                height={35}
              />
              <span className={st.itemWithIconName}>{item.name}</span>
            </>
          ) : (
            <span className={st.itemName}>{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DropdownList;
