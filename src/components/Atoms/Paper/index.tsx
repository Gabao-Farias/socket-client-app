import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {
  paperProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
};

const Paper: FC<Props> = ({ children, paperProps }) => {
  return <Wrapper {...paperProps}>{children}</Wrapper>;
};

export default Paper;
