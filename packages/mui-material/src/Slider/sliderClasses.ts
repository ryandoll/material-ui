import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
import { SliderUnstyledClasses, sliderUnstyledClasses } from '@mui/base/SliderUnstyled';

export interface SliderClasses extends SliderUnstyledClasses {
  /** Class name applied to the root element if `color="primary"`. */
  colorPrimary?: string;
  /** Class name applied to the root element if `color="secondary"`. */
  colorSecondary?: string;
  /** Class name applied to the root element if `size="small"`. */
  sizeSmall?: string;
  /** Class name applied to the thumb element if `color="primary"`. */
  thumbColorPrimary?: string;
  /** Class name applied to the thumb element if `color="secondary"`. */
  thumbColorSecondary?: string;
  /** Class name applied to the thumb element if `size="small"`. */
  thumbSizeSmall?: string;
}

export type SliderClassKey = keyof SliderClasses;

export function getSliderUtilityClass(slot: string): string {
  return generateUtilityClass('MuiSlider', slot);
}

const sliderClasses = {
  ...sliderUnstyledClasses,
  ...generateUtilityClasses('MuiSlider', [
    'colorPrimary',
    'colorSecondary',
    'thumbColorPrimary',
    'thumbColorSecondary',
    'sizeSmall',
    'thumbSizeSmall',
  ]),
};

export default sliderClasses;
