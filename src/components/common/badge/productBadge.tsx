import TopSalesBadgeIcon from 'src/icons/topSalesBadgeIcon';

import st from './productBadge.module.css';

type Props = {
  badgeContent: string;
};

function ProductBadge({ badgeContent }: Props) {
  return (
    <div className={st.productBadge}>
      <TopSalesBadgeIcon
        width="23"
        height="23"
        className={st.svgWrapper}
        ariaLabelContent={badgeContent}
      />
      <p className={st.badgeText}>{badgeContent}</p>
    </div>
  );
}

export default ProductBadge;
