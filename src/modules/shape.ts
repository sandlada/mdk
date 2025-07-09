export abstract class Shape {
    public static readonly None                = `var(--md-sys-shape-corner-none, 0px)`
    public static readonly ExtraSmall          = `var(--md-sys-shape-corner-extra-small, 4px)`
    public static readonly Small               = `var(--md-sys-shape-corner-small, 8px)`
    public static readonly Medium              = `var(--md-sys-shape-corner-medium, 12px)`
    public static readonly Large               = `var(--md-sys-shape-corner-large, 16px)`
    public static readonly LargeIncreased      = `var(--md-sys-shape-corner-large-increased, 20px)`
    public static readonly ExtraLarge          = `var(--md-sys-shape-corner-extra-large, 28px)`
    public static readonly ExtraLargeIncreased = `var(--md-sys-shape-corner-extra-large-increased, 32px)`
    public static readonly ExtraExtraLarge     = `var(--md-sys-shape-corner-extra-extra-large, 48px)`
    public static readonly Full                = `var(--md-sys-shape-corner-full, calc(infinity * 1px))`
}