import _ from 'lodash';
import { DefaultTheme } from 'styled-components';

type PropTheme = {
  theme: DefaultTheme;
};

const getThemeByPath = (item: string) => ({ theme }: PropTheme): string =>
  _.get(theme, item);

export default getThemeByPath;
