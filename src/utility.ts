export const CardVariant = {
  Blurry: 0,
  Wide: 1,
  Normal: 2,
} as const;

export type CardVariant = (typeof CardVariant)[keyof typeof CardVariant];

