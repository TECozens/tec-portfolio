import { colors } from './colors';
import { typography } from './typography';
import { components } from './components';
import { config } from './config';

const theme = extendTheme({
  colors,
  ...typography,
  ...components,
  config,
});

export default theme; 