export type TMaterialContrastLevel = -1.0 | 0 | 0.5 | 1.0 | number

export const MaterialContrastLevels = {
    Reduced: -1,
    Default: 0,
    Medium: 0.5,
    High: 1
} as const