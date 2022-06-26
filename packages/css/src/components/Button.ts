import { css } from '../helpers/stitches';

const Button = css({
   backgroundColor: '$loContrast',
   borderRadius: '$full',
   fontSize: '$2',
   padding: '$2 $3',
   '&:hover': {
      backgroundColor: '$gray500',
   },
});

export { Button };
