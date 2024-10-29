import ChooseFabric from 'src/components/productPage/chooseFabric/ChooseFabric';

import lang from 'src/i18n/lang';

import st from './FabricModalControls.module.css';

function FabricModalControls({ vm, setCurrentPage, language }) {
  const { fabrics, fabric$ } = vm;
  const { name: currentFabricName } = fabric$.getValue();

  const handleRadio = (nameOfFabric) => {
    const selectedFabric = fabrics.find(({ name }) => name === nameOfFabric);

    fabric$.next(selectedFabric);
    setCurrentPage(1);
  };

  return (
    <div className={st.wrapper}>
      <ChooseFabric language={language} />
      <div className={st.content}>
        {fabrics.map(({ name }) => (
          <label key={name} className={st.label}>
            <input
              type="radio"
              value={name}
              id={name}
              checked={currentFabricName === name}
              onChange={(e) => handleRadio(e.currentTarget.value)}
              className={st.input}
            />
            <div aria-hidden="true" className={st.mark} />
            <span className={st.text}>{lang(name, language)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FabricModalControls;
