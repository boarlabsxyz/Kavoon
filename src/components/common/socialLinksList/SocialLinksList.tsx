import { socialsNetworks } from 'src/data/routes';
import IconLink from 'src/components/common/iconLink';

import st from './SocialLinksList.module.css';

type Props = {
  background?: 'light' | 'dark';
};

function SocialLinksList({ background = 'light' }: Props) {
  return (
    <ul className={st.list}>
      {socialsNetworks.map(
        ({ component: Icon, url, width, height, ariaLabelContent }) => {
          return (
            <li key={url} className={st.listItem}>
              <IconLink
                href={url}
                ariaLabel={ariaLabelContent}
                background={background}
              >
                <Icon width={width} height={height} className="" />
              </IconLink>
            </li>
          );
        }
      )}
    </ul>
  );
}

export default SocialLinksList;
