/**
 * Variants to define a color set based on primary, secondary,..., n-ary color.
 */
declare type ColorSetVariant = {
  darker?: string;
  main: string;
  lighter?: string;
  disabled?: string;
};

/**
 * Color theme used on color theme app.
 */
declare type ColorTheme = {
  error: string;
  warning: string;
  success: string;
  info: string;
  text?: ColorSetVariant;
  primary?: ColorSetVariant;
  secondary?: ColorSetVariant;
  tertiary?: ColorSetVariant;
  accent?: ColorSetVariant;
  environment?: ColorSetVariant;
};

/**
 * Defines default choosable color theme in app.
 */
declare type ColorThemeDefaultOptions = 'light' | 'dark';

/**
 * In case of app have multiple choosable color themes.
 */
declare type ColorThemes = {
  [variant: string]: ColorTheme;
};

/**
 * Default breakpoints variants
 */
declare type BreakpointVariants =
  | 'mobile'
  | 'mobileWider'
  | 'tablet'
  | 'laptop'
  | 'largeLaptop'
  | 'fhd';

declare type Breakpoints = {
  [breakpoint in BreakpointVariants]: number;
};

/**
 * Variations for sizes.
 */
declare type SizesVariants =
  | 'insane'
  | 'huge'
  | 'giant'
  | 'big'
  | 'large'
  | 'medium'
  | 'short'
  | 'small'
  | 'smaller'
  | 'meaningless';

/**
 * Relation between variations and it's sizes.
 */
declare type SizeVariantValue = {
  [variant in SizesVariants]: number;
};

/**
 * Spacings that can be used in margins or paddings.
 */
declare type Spacings = SizeVariantValue;

/**
 * Radis sizes.
 */
declare type Radiuses = SizeVariantValue;

/**
 * Font sizes.
 */
declare type FontSizes = SizeVariantValue;

/**
 * The actual theme type being used on application, or the type for the current theme in use.
 */
declare type AppTheme = {
  breakpoints: Breakpoints;
  colors: ColorTheme;
  fontSizes: FontSizes;
  radius: Radiuses;
  spacings: Spacings;
  typography: TypographyVariantsGenericMapper<TypographyAttributes>;
};
