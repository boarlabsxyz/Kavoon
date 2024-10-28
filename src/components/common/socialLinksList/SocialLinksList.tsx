import { socialsNetworks } from 'src/data/routes';
import IconLink from 'src/components/common/iconLink';

import st from './SocialLinksList.module.css';

type Props = {
  background?: 'light' | 'dark';
};

function SocialLinksList({ background = 'light' }: Props) {
  return (
    <ul className={st.list}>
      {socialsNetworks.map(({ component: Icon, label, url, width, height }) => {
        const className = label === 'tiktok-link' ? st.svgStroke : st.svgFill;

        return (
          <li key={label} className={st.listItem}>
            <IconLink href={url} ariaLabel={label} background={background}>
              <Icon width={width} height={height} className={className} />
            </IconLink>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinksList;
