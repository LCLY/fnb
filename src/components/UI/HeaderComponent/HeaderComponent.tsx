import React from 'react';
import './HeaderComponent.scss';
// 3rd party lib
import { Button } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';

function HeaderComponent() {
  // translation
  const { t } = useTranslation(['translation']);

  return (
    <header className="header">
      <div className="header__outerdiv">
        <div className="header__title-div">
          <span className="header__title">Lorem ipsum dolor</span>
        </div>
        <div className="header__desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas
        </div>
        <Button variant="primary" className="header__learnmore">
          {t('translation:learn_more', 'Learn More')}
        </Button>
      </div>
      <div className="header__openhours">
        <Trans t={t} i18nKey="translation:open_hours">
          <span className="header__openhours-text">Open Hours:</span> Mon-Fri 9am-12am
        </Trans>
      </div>
    </header>
  );
}

export default HeaderComponent;
