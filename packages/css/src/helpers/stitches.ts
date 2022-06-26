import { createStitches } from '@stitches/core';

export const { css, config, createTheme, getCssText, globalCss, keyframes, theme } =
   createStitches({
      theme: {
         colors: {
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',

            gray100: 'hsl(206,22%,99%)',
            gray200: 'hsl(206,12%,97%)',
            gray300: 'hsl(206,11%,92%)',
            gray400: 'hsl(206,10%,84%)',
            gray500: 'hsl(206,10%,76%)',
            gray600: 'hsl(206,10%,44%)',
         },
         space: {
            1: '5px',
            2: '10px',
            3: '15px',
         },
         fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
         },
         fonts: {
            untitled: 'Untitled Sans, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
         },
         fontWeights: {},
         lineHeights: {},
         letterSpacings: {},
         sizes: {},
         borderWidths: {},
         borderStyles: {},
         radii: {
            full: '9999px',
         },
         shadows: {},
         zIndices: {},
         transitions: {},
      },
   });
