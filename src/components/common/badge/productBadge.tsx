import CustomImage from 'src/components/common/customImage';

import st from './productBadge.module.css'

type Props = {
    badgeContent: string;
};

function ProductBadge({ badgeContent }: Props) {
    return (
        <div className={st.productBadge}>
            <CustomImage
                className={st.svgWrapper}
                src='/img/top-sales-badge/topSalesBadge.svg'
                alt='TopBadge'
                width="0"
                height="0"
            />
            <p className={st.badgeText}>{badgeContent}</p>
        </div>
    )
}

export default ProductBadge;