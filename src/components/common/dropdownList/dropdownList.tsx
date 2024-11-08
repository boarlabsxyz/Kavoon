import CustomImage from 'src/components/common/customImage';
// import List from 'src/data/messengersList';

import st from './dropDawnList.module.css';

function DropdownList({ optionsList, handleSelect, pickedItem, language }) {
  // const messengersList = MessengersList(language);

  return (
    <ul className={st.list} role="listbox">
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
          <CustomImage
            src={item.src}
            alt="option icon"
            width={35}
            height={35}
          />
          <span className={st.itemName}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default DropdownList;
