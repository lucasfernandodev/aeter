import style from './style.module.css';
import { IconArrowNarrowUp } from '@tabler/icons';
import { useEffect, useRef } from 'react';
import { useScroolbarTop } from '../../Hooks/useScroolbarTop';

const ButtonRollingToTop = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonBottomFixed, isButtonTotopShow } = useScroolbarTop();

  function scrollingTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.setProperty('--bottom', `${buttonBottomFixed}px`);
    }
  }, [buttonBottomFixed]);

  return (
    <>
      {isButtonTotopShow ? (
        <button
          type='button'
          ref={buttonRef}
          onClick={scrollingTop}
          className={style.buttonTop}
        >
          <IconArrowNarrowUp />
        </button>
      ) : null}
    </>
  );
};

export default ButtonRollingToTop;
