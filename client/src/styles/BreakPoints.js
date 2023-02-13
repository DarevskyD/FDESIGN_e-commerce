export const size = {
  xs: 480, // smartphones, portrait iPhone, portrait 480x320 phones (Android)
  sm: 600, // smartphones, Android phones, landscape iPhone
  md: 800, // portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android)
  lg: 1024, // tablet, landscape iPad, lo-res laptops ands desktops
  xl: 1280, // big landscape tablets, laptops, and desktops
};

export const device = {
  xs: `(max-width: ${size.xs}px)`,
  sm: `(max-width: ${size.sm}px)`,
  md: `(max-width: ${size.md}px)`,
  lg: `(max-width: ${size.lg}px)`,
  xl: `(max-width: ${size.xl}px)`,
};