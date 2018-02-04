import {systemFontsStack} from '@cowtech/react-lazily/styling/fonts';
import {reset} from '@cowtech/react-lazily/styling/reset';
import {viewHeight} from 'csx';
import {cssRule as global, fontFace} from 'typestyle';

import {fontSize, linkColor, linkHighlightColor} from './environment';

reset();

fontFace({
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'local("Lato Light"), local("Lato-Light"), url(https://fonts.gstatic.com/s/lato/v11/kU6VHbqMAZhaN_nXCmLQsQ.woff) format("woff")',
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
});

fontFace({
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: 700,
  src: 'local("Lato Bold"), local("Lato-Bold"), url(https://fonts.gstatic.com/s/lato/v11/I1Pn3gihk5vyP0Yw5GqKsQ.woff) format("woff")',
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
});

global('body', {
  fontSize,
  fontWeight: 400,
  minHeight: viewHeight(100),
});

global('body, a, p, strong, em, li, dd, dt, button, input, select, textarea', {fontFamily: `Lato, ${systemFontsStack}`});

global('h1, h2, h3, h4, h5, h6', {
  fontFamily: `Lato, ${systemFontsStack}`,
  fontWeight: 400
});

global('a, a:focus, a:active', {color: linkColor});
global('a:hover', {color: linkHighlightColor});