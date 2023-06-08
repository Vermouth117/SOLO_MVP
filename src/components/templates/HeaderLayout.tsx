
import React, { ReactNode, memo } from 'react';

import Header from '../organisms/Header';

type Props = {
  children: ReactNode;
}

const HeaderLayout: React.FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default HeaderLayout;
