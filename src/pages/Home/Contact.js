import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Section from 'components/Section';
import { reflow } from 'utils/transition';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Contact.css';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

const ContactTitle = ({ status, titleId }) => (
  <Fragment>
    <Heading
      level={3}
      className={classNames('contact__title', `contact__title--${status}`)}
    >
      <DecoderText text="Let's Meet Us" start={status !== 'exited'} delay={500} />
    </Heading>
  </Fragment>
);

const ContactText = ({ status, titleId }) => (
  <Fragment>
    <Text size="xl" weight="bold">
      <Text size="l" weight="medium">
        CEO
      </Text>
      INSEOB KIM
    </Text>
    <Text size="m" weight="regular">
      010.2388.9800
      <br />
      metabusx@gmail.com
      <br />
      138-1, Yongdam-ro, Jeju-si
      <br />
    </Text>
    <div className={classNames('contact__button', `contact__button--${status}`)}>
      <Button iconHoverShift href={''} iconEnd="arrowRight">
        Send Email
      </Button>
    </div>
  </Fragment>
);

const NaverMapAPI = () => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'1hqa4x61ni'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '100%', // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 33.508889841, lng: 126.515705804 }} // 지도 초기 위치
        defaultZoom={16} // 지도 초기 확대 배율
      >
        <Marker
          key={1}
          position={{ lat: 33.508889841, lng: 126.515705804 }}
          animation={2}
          shape={{ coords: [0, 12, 12, 0, 24, 12, 12, 32, 0, 12], type: 'poly' }}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

const Contact = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;
  return (
    <Section
      className="contact"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="contact__content">
            <div className="contact__column">
              <ContactTitle status={status} titleId={titleId} />
              <div className="contact__row">
                <div className="contact__map">
                  <NaverMapAPI />
                </div>
                <div className="contact__text">
                  <ContactText status={status} titleId={titleId} />
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Contact;
