import type { ICSSValue } from "../primitives/ICSSValue"
import { Palette } from "./palette"

type ColorCSSFallback = `--md-sys-color-${string}`
type ColorCSSValue       = string | [string, string]

type ResolvedColorValue<V> = V extends [string, string] 
    ? `light-dark(${V[0]}, ${V[1]})` 
    : V
type FinalCSSOutput<K extends string, V extends string | [string, string], HasFallback extends boolean> = 
    HasFallback extends true 
        ? `var(${K}, ${ResolvedColorValue<V>})` 
        : ResolvedColorValue<V>

class ColorValue<
    K extends ColorCSSFallback,
    V extends ColorCSSValue,
    HasFallback extends boolean
> implements ICSSValue {

    public readonly key        : K
    public readonly value      : V
    public readonly hasFallback: HasFallback

    private constructor(key: K, value: V, hasFallback: HasFallback) {
        this.key   = key
        this.value = value
        this.hasFallback = hasFallback
    }

    public static of<
        K extends ColorCSSFallback,
        V extends ColorCSSValue,
        HasFallback extends boolean
    >(key: K, value: V, hasFallback: HasFallback) {
        return new ColorValue(key, value, hasFallback)
    }

    private getValue(): ResolvedColorValue<V> {
        return (
            Array.isArray(this.value)
                ? `light-dark(${this.value[0]}, ${this.value[1]})` as `light-dark(${V[0]}, ${V[1]})`
                : this.value as V
        ) as any
    }

    public toCSSValue(): FinalCSSOutput<K, V, HasFallback> {
        if(this.hasFallback) {
            return `var(${this.key}, ${this.getValue()})` as any
        }
        return `${this.getValue()}` as any
    }

    public toString() {
        return this.toCSSValue()
    }

}

export class Color {
    public static readonly Background              = ColorValue.of(`--md-sys-color-background`,                 [Palette.Neutral98.toCSSValue(),        Palette.Neutral6.toCSSValue()], true)
    public static readonly Error                   = ColorValue.of(`--md-sys-color-error`,                      [Palette.Error40.toCSSValue(),          Palette.Error80.toCSSValue()], true)
    public static readonly ErrorContainer          = ColorValue.of(`--md-sys-color-error-container`,            [Palette.Error90.toCSSValue(),          Palette.Error30.toCSSValue()], true)
    public static readonly InverseOnSurface        = ColorValue.of(`--md-sys-color-inverse-on-surface`,         [Palette.Neutral95.toCSSValue(),        Palette.Neutral20.toCSSValue()], true)
    public static readonly InversePrimary          = ColorValue.of(`--md-sys-color-inverse-primary`,            [Palette.Primary80.toCSSValue(),        Palette.Primary40.toCSSValue()], true)
    public static readonly InverseSurface          = ColorValue.of(`--md-sys-color-inverse-surface`,            [Palette.Neutral20.toCSSValue(),        Palette.Neutral90.toCSSValue()], true)
    public static readonly OnBackground            = ColorValue.of(`--md-sys-color-on-background`,              [Palette.Neutral10.toCSSValue(),        Palette.Neutral90.toCSSValue()], true)
    public static readonly OnError                 = ColorValue.of(`--md-sys-color-on-error`,                   [Palette.Error100.toCSSValue(),         Palette.Error20.toCSSValue()], true)
    public static readonly OnErrorContainer        = ColorValue.of(`--md-sys-color-on-error-container`,         [Palette.Error10.toCSSValue(),          Palette.Error90.toCSSValue()], true)
    public static readonly OnPrimary               = ColorValue.of(`--md-sys-color-on-primary`,                 [Palette.Primary100.toCSSValue(),       Palette.Primary20.toCSSValue()], true)
    public static readonly OnPrimaryContainer      = ColorValue.of(`--md-sys-color-on-primary-container`,       [Palette.Primary10.toCSSValue(),        Palette.Primary90.toCSSValue()], true)
    public static readonly OnPrimaryFixed          = ColorValue.of(`--md-sys-color-on-primary-fixed`,           [Palette.Primary10.toCSSValue(),        Palette.Primary10.toCSSValue()], true)
    public static readonly OnPrimaryFixedVariant   = ColorValue.of(`--md-sys-color-on-primary-fixed-variant`,   [Palette.Primary30.toCSSValue(),        Palette.Primary30.toCSSValue()], true)
    public static readonly OnSecondary             = ColorValue.of(`--md-sys-color-on-secondary`,               [Palette.Secondary100.toCSSValue(),     Palette.Secondary20.toCSSValue()], true)
    public static readonly OnSecondaryContainer    = ColorValue.of(`--md-sys-color-on-secondary-container`,     [Palette.Secondary10.toCSSValue(),      Palette.Secondary90.toCSSValue()], true)
    public static readonly OnSecondaryFixed        = ColorValue.of(`--md-sys-color-on-secondary-fixed`,         [Palette.Secondary10.toCSSValue(),      Palette.Secondary10.toCSSValue()], true)
    public static readonly OnSecondaryFixedVariant = ColorValue.of(`--md-sys-color-on-secondary-fixed-variant`, [Palette.Secondary30.toCSSValue(),      Palette.Secondary30.toCSSValue()], true)
    public static readonly OnSurface               = ColorValue.of(`--md-sys-color-on-surface`,                 [Palette.Neutral10.toCSSValue(),        Palette.Neutral90.toCSSValue()], true)
    public static readonly OnSurfaceVariant        = ColorValue.of(`--md-sys-color-on-surface-variant`,         [Palette.NeutralVariant30.toCSSValue(), Palette.NeutralVariant80.toCSSValue()], true)
    public static readonly OnTertiary              = ColorValue.of(`--md-sys-color-on-tertiary`,                [Palette.Tertiary100.toCSSValue(),      Palette.Tertiary20.toCSSValue()], true)
    public static readonly OnTertiaryContainer     = ColorValue.of(`--md-sys-color-on-tertiary-container`,      [Palette.Tertiary10.toCSSValue(),       Palette.Tertiary90.toCSSValue()], true)
    public static readonly OnTertiaryFixed         = ColorValue.of(`--md-sys-color-on-tertiary-fixed`,          [Palette.Tertiary10.toCSSValue(),       Palette.Tertiary10.toCSSValue()], true)
    public static readonly OnTertiaryFixedVariant  = ColorValue.of(`--md-sys-color-on-tertiary-fixed-variant`,  [Palette.Tertiary30.toCSSValue(),       Palette.Tertiary30.toCSSValue()], true)
    public static readonly Outline                 = ColorValue.of(`--md-sys-color-outline`,                    [Palette.Neutral50.toCSSValue(),        Palette.Neutral60.toCSSValue()], true)
    public static readonly OutlineVariant          = ColorValue.of(`--md-sys-color-outline-variant`,            [Palette.NeutralVariant80.toCSSValue(), Palette.NeutralVariant30.toCSSValue()], true)
    public static readonly Primary                 = ColorValue.of(`--md-sys-color-primary`,                    [Palette.Primary40.toCSSValue(),        Palette.Primary80.toCSSValue()], true)
    public static readonly PrimaryContainer        = ColorValue.of(`--md-sys-color-primary-container`,          [Palette.Primary90.toCSSValue(),        Palette.Primary30.toCSSValue()], true)
    public static readonly PrimaryFixed            = ColorValue.of(`--md-sys-color-primary-fixed`,              [Palette.Primary90.toCSSValue(),        Palette.Primary90.toCSSValue()], true)
    public static readonly PrimaryFixedDim         = ColorValue.of(`--md-sys-color-primary-fixed-dim`,          [Palette.Primary80.toCSSValue(),        Palette.Primary80.toCSSValue()], true)
    public static readonly Scrim                   = ColorValue.of(`--md-sys-color-scrim`,                      [Palette.Neutral0.toCSSValue(),         Palette.Neutral0.toCSSValue()], true)
    public static readonly Secondary               = ColorValue.of(`--md-sys-color-secondary`,                  [Palette.Secondary40.toCSSValue(),      Palette.Secondary80.toCSSValue()], true)
    public static readonly SecondaryContainer      = ColorValue.of(`--md-sys-color-secondary-container`,        [Palette.Secondary90.toCSSValue(),      Palette.Secondary30.toCSSValue()], true)
    public static readonly SecondaryFixed          = ColorValue.of(`--md-sys-color-secondary-fixed`,            [Palette.Secondary90.toCSSValue(),      Palette.Secondary90.toCSSValue()], true)
    public static readonly SecondaryFixedDim       = ColorValue.of(`--md-sys-color-secondary-fixed-dim`,        [Palette.Secondary80.toCSSValue(),      Palette.Secondary80.toCSSValue()], true)
    public static readonly Shadow                  = ColorValue.of(`--md-sys-color-shadow`,                     [Palette.Neutral0.toCSSValue(),         Palette.Neutral0.toCSSValue()], true)
    public static readonly Surface                 = ColorValue.of(`--md-sys-color-surface`,                    [Palette.Neutral98.toCSSValue(),        Palette.Neutral6.toCSSValue()], true)
    public static readonly SurfaceBright           = ColorValue.of(`--md-sys-color-surface-bright`,             [Palette.Neutral98.toCSSValue(),        Palette.Neutral24.toCSSValue()], true)
    public static readonly SurfaceContainer        = ColorValue.of(`--md-sys-color-surface-container`,          [Palette.Neutral94.toCSSValue(),        Palette.Neutral12.toCSSValue()], true)
    public static readonly SurfaceContainerHigh    = ColorValue.of(`--md-sys-color-surface-container-high`,     [Palette.Neutral92.toCSSValue(),        Palette.Neutral17.toCSSValue()], true)
    public static readonly SurfaceContainerHighest = ColorValue.of(`--md-sys-color-surface-container-highest`,  [Palette.Neutral90.toCSSValue(),        Palette.Neutral22.toCSSValue()], true)
    public static readonly SurfaceContainerLow     = ColorValue.of(`--md-sys-color-surface-container-low`,      [Palette.Neutral96.toCSSValue(),        Palette.Neutral10.toCSSValue()], true)
    public static readonly SurfaceContainerLowest  = ColorValue.of(`--md-sys-color-surface-container-lowest`,   [Palette.Neutral100.toCSSValue(),       Palette.Neutral4.toCSSValue()], true)
    public static readonly SurfaceDim              = ColorValue.of(`--md-sys-color-surface-dim`,                [Palette.Neutral87.toCSSValue(),        Palette.Neutral6.toCSSValue()], true)
    public static readonly SurfaceTint             = ColorValue.of(`--md-sys-color-surface-tint`,               [Palette.Primary40.toCSSValue(),        Palette.Primary80.toCSSValue()], true)
    public static readonly SurfaceVariant          = ColorValue.of(`--md-sys-color-surface-variant`,            [Palette.NeutralVariant90.toCSSValue(), Palette.NeutralVariant30.toCSSValue()], true)
    public static readonly Tertiary                = ColorValue.of(`--md-sys-color-tertiary`,                   [Palette.Tertiary40.toCSSValue(),       Palette.Tertiary80.toCSSValue()], true)
    public static readonly TertiaryContainer       = ColorValue.of(`--md-sys-color-tertiary-container`,         [Palette.Tertiary90.toCSSValue(),       Palette.Tertiary30.toCSSValue()], true)
    public static readonly TertiaryFixed           = ColorValue.of(`--md-sys-color-tertiary-fixed`,             [Palette.Tertiary90.toCSSValue(),       Palette.Tertiary90.toCSSValue()], true)
    public static readonly TertiaryFixedDim        = ColorValue.of(`--md-sys-color-tertiary-fixed-dim`,         [Palette.Tertiary80.toCSSValue(),       Palette.Tertiary80.toCSSValue()], true)
}

export class ColorLight {
    public static readonly Background              = ColorValue.of(`--md-sys-color-background`, Palette.Neutral98.toCSSValue(), true)
    public static readonly Error                   = ColorValue.of(`--md-sys-color-error`, Palette.Error40.toCSSValue(), true)
    public static readonly ErrorContainer          = ColorValue.of(`--md-sys-color-error-container`, Palette.Error90.toCSSValue(), true)
    public static readonly InverseOnSurface        = ColorValue.of(`--md-sys-color-inverse-on-surface`, Palette.Neutral95.toCSSValue(), true)
    public static readonly InversePrimary          = ColorValue.of(`--md-sys-color-inverse-primary`, Palette.Primary80.toCSSValue(), true)
    public static readonly InverseSurface          = ColorValue.of(`--md-sys-color-inverse-surface`, Palette.Neutral20.toCSSValue(), true)
    public static readonly OnBackground            = ColorValue.of(`--md-sys-color-on-background`, Palette.Neutral10.toCSSValue(), true)
    public static readonly OnError                 = ColorValue.of(`--md-sys-color-on-error`, Palette.Error100.toCSSValue(), true)
    public static readonly OnErrorContainer        = ColorValue.of(`--md-sys-color-on-error-container`, Palette.Error10.toCSSValue(), true)
    public static readonly OnPrimary               = ColorValue.of(`--md-sys-color-on-primary`, Palette.Primary100.toCSSValue(), true)
    public static readonly OnPrimaryContainer      = ColorValue.of(`--md-sys-color-on-primary-container`, Palette.Primary10.toCSSValue(), true)
    public static readonly OnPrimaryFixed          = ColorValue.of(`--md-sys-color-on-primary-fixed`, Palette.Primary10.toCSSValue(), true)
    public static readonly OnPrimaryFixedVariant   = ColorValue.of(`--md-sys-color-on-primary-fixed-variant`, Palette.Primary30.toCSSValue(), true)
    public static readonly OnSecondary             = ColorValue.of(`--md-sys-color-on-secondary`, Palette.Secondary100.toCSSValue(), true)
    public static readonly OnSecondaryContainer    = ColorValue.of(`--md-sys-color-on-secondary-container`, Palette.Secondary10.toCSSValue(), true)
    public static readonly OnSecondaryFixed        = ColorValue.of(`--md-sys-color-on-secondary-fixed`, Palette.Secondary10.toCSSValue(), true)
    public static readonly OnSecondaryFixedVariant = ColorValue.of(`--md-sys-color-on-secondary-fixed-variant`, Palette.Secondary30.toCSSValue(), true)
    public static readonly OnSurface               = ColorValue.of(`--md-sys-color-on-surface`, Palette.Neutral10.toCSSValue(), true)
    public static readonly OnSurfaceVariant        = ColorValue.of(`--md-sys-color-on-surface-variant`, Palette.NeutralVariant30.toCSSValue(), true)
    public static readonly OnTertiary              = ColorValue.of(`--md-sys-color-on-tertiary`, Palette.Tertiary100.toCSSValue(), true)
    public static readonly OnTertiaryContainer     = ColorValue.of(`--md-sys-color-on-tertiary-container`, Palette.Tertiary10.toCSSValue(), true)
    public static readonly OnTertiaryFixed         = ColorValue.of(`--md-sys-color-on-tertiary-fixed`, Palette.Tertiary10.toCSSValue(), true)
    public static readonly OnTertiaryFixedVariant  = ColorValue.of(`--md-sys-color-on-tertiary-fixed-variant`, Palette.Tertiary30.toCSSValue(), true)
    public static readonly Outline                 = ColorValue.of(`--md-sys-color-outline`, Palette.Neutral50.toCSSValue(), true)
    public static readonly OutlineVariant          = ColorValue.of(`--md-sys-color-outline-variant`, Palette.NeutralVariant80.toCSSValue(), true)
    public static readonly Primary                 = ColorValue.of(`--md-sys-color-primary`, Palette.Primary40.toCSSValue(), true)
    public static readonly PrimaryContainer        = ColorValue.of(`--md-sys-color-primary-container`, Palette.Primary90.toCSSValue(), true)
    public static readonly PrimaryFixed            = ColorValue.of(`--md-sys-color-primary-fixed`, Palette.Primary90.toCSSValue(), true)
    public static readonly PrimaryFixedDim         = ColorValue.of(`--md-sys-color-primary-fixed-dim`, Palette.Primary80.toCSSValue(), true)
    public static readonly Scrim                   = ColorValue.of(`--md-sys-color-scrim`, Palette.Neutral0.toCSSValue(), true)
    public static readonly Secondary               = ColorValue.of(`--md-sys-color-secondary`, Palette.Secondary40.toCSSValue(), true)
    public static readonly SecondaryContainer      = ColorValue.of(`--md-sys-color-secondary-container`, Palette.Secondary90.toCSSValue(), true)
    public static readonly SecondaryFixed          = ColorValue.of(`--md-sys-color-secondary-fixed`, Palette.Secondary90.toCSSValue(), true)
    public static readonly SecondaryFixedDim       = ColorValue.of(`--md-sys-color-secondary-fixed-dim`, Palette.Secondary80.toCSSValue(), true)
    public static readonly Shadow                  = ColorValue.of(`--md-sys-color-shadow`, Palette.Neutral0.toCSSValue(), true)
    public static readonly Surface                 = ColorValue.of(`--md-sys-color-surface`, Palette.Neutral98.toCSSValue(), true)
    public static readonly SurfaceBright           = ColorValue.of(`--md-sys-color-surface-bright`, Palette.Neutral98.toCSSValue(), true)
    public static readonly SurfaceContainer        = ColorValue.of(`--md-sys-color-surface-container`, Palette.Neutral94.toCSSValue(), true)
    public static readonly SurfaceContainerHigh    = ColorValue.of(`--md-sys-color-surface-container-high`, Palette.Neutral92.toCSSValue(), true)
    public static readonly SurfaceContainerHighest = ColorValue.of(`--md-sys-color-surface-container-highest`, Palette.Neutral90.toCSSValue(), true)
    public static readonly SurfaceContainerLow     = ColorValue.of(`--md-sys-color-surface-container-low`, Palette.Neutral96.toCSSValue(), true)
    public static readonly SurfaceContainerLowest  = ColorValue.of(`--md-sys-color-surface-container-lowest`, Palette.Neutral100.toCSSValue(), true)
    public static readonly SurfaceDim              = ColorValue.of(`--md-sys-color-surface-dim`, Palette.Neutral87.toCSSValue(), true)
    public static readonly SurfaceTint             = ColorValue.of(`--md-sys-color-surface-tint`, Palette.Primary40.toCSSValue(), true)
    public static readonly SurfaceVariant          = ColorValue.of(`--md-sys-color-surface-variant`, Palette.NeutralVariant90.toCSSValue(), true)
    public static readonly Tertiary                = ColorValue.of(`--md-sys-color-tertiary`, Palette.Tertiary40.toCSSValue(), true)
    public static readonly TertiaryContainer       = ColorValue.of(`--md-sys-color-tertiary-container`, Palette.Tertiary90.toCSSValue(), true)
    public static readonly TertiaryFixed           = ColorValue.of(`--md-sys-color-tertiary-fixed`, Palette.Tertiary90.toCSSValue(), true)
    public static readonly TertiaryFixedDim        = ColorValue.of(`--md-sys-color-tertiary-fixed-dim`, Palette.Tertiary80.toCSSValue(), true)
}

export class ColorDark {
    public static readonly Background              = ColorValue.of(`--md-sys-color-background`, Palette.Neutral6.toCSSValue(), true)
    public static readonly Error                   = ColorValue.of(`--md-sys-color-error`, Palette.Error80.toCSSValue(), true)
    public static readonly ErrorContainer          = ColorValue.of(`--md-sys-color-error-container`, Palette.Error30.toCSSValue(), true)
    public static readonly InverseOnSurface        = ColorValue.of(`--md-sys-color-inverse-on-surface`, Palette.Neutral20.toCSSValue(), true)
    public static readonly InversePrimary          = ColorValue.of(`--md-sys-color-inverse-primary`, Palette.Primary40.toCSSValue(), true)
    public static readonly InverseSurface          = ColorValue.of(`--md-sys-color-inverse-surface`, Palette.Neutral90.toCSSValue(), true)
    public static readonly OnBackground            = ColorValue.of(`--md-sys-color-on-background`, Palette.Neutral90.toCSSValue(), true)
    public static readonly OnError                 = ColorValue.of(`--md-sys-color-on-error`, Palette.Error20.toCSSValue(), true)
    public static readonly OnErrorContainer        = ColorValue.of(`--md-sys-color-on-error-container`, Palette.Error90.toCSSValue(), true)
    public static readonly OnPrimary               = ColorValue.of(`--md-sys-color-on-primary`, Palette.Primary20.toCSSValue(), true)
    public static readonly OnPrimaryContainer      = ColorValue.of(`--md-sys-color-on-primary-container`, Palette.Primary90.toCSSValue(), true)
    public static readonly OnPrimaryFixed          = ColorValue.of(`--md-sys-color-on-primary-fixed`, Palette.Primary10.toCSSValue(), true)
    public static readonly OnPrimaryFixedVariant   = ColorValue.of(`--md-sys-color-on-primary-fixed-variant`, Palette.Primary30.toCSSValue(), true)
    public static readonly OnSecondary             = ColorValue.of(`--md-sys-color-on-secondary`, Palette.Secondary20.toCSSValue(), true)
    public static readonly OnSecondaryContainer    = ColorValue.of(`--md-sys-color-on-secondary-container`, Palette.Secondary90.toCSSValue(), true)
    public static readonly OnSecondaryFixed        = ColorValue.of(`--md-sys-color-on-secondary-fixed`, Palette.Secondary10.toCSSValue(), true)
    public static readonly OnSecondaryFixedVariant = ColorValue.of(`--md-sys-color-on-secondary-fixed-variant`, Palette.Secondary30.toCSSValue(), true)
    public static readonly OnSurface               = ColorValue.of(`--md-sys-color-on-surface`, Palette.Neutral90.toCSSValue(), true)
    public static readonly OnSurfaceVariant        = ColorValue.of(`--md-sys-color-on-surface-variant`, Palette.NeutralVariant80.toCSSValue(), true)
    public static readonly OnTertiary              = ColorValue.of(`--md-sys-color-on-tertiary`, Palette.Tertiary20.toCSSValue(), true)
    public static readonly OnTertiaryContainer     = ColorValue.of(`--md-sys-color-on-tertiary-container`, Palette.Tertiary90.toCSSValue(), true)
    public static readonly OnTertiaryFixed         = ColorValue.of(`--md-sys-color-on-tertiary-fixed`, Palette.Tertiary10.toCSSValue(), true)
    public static readonly OnTertiaryFixedVariant  = ColorValue.of(`--md-sys-color-on-tertiary-fixed-variant`, Palette.Tertiary30.toCSSValue(), true)
    public static readonly Outline                 = ColorValue.of(`--md-sys-color-outline`, Palette.Neutral60.toCSSValue(), true)
    public static readonly OutlineVariant          = ColorValue.of(`--md-sys-color-outline-variant`, Palette.NeutralVariant30.toCSSValue(), true)
    public static readonly Primary                 = ColorValue.of(`--md-sys-color-primary`, Palette.Primary80.toCSSValue(), true)
    public static readonly PrimaryContainer        = ColorValue.of(`--md-sys-color-primary-container`, Palette.Primary30.toCSSValue(), true)
    public static readonly PrimaryFixed            = ColorValue.of(`--md-sys-color-primary-fixed`, Palette.Primary90.toCSSValue(), true)
    public static readonly PrimaryFixedDim         = ColorValue.of(`--md-sys-color-primary-fixed-dim`, Palette.Primary80.toCSSValue(), true)
    public static readonly Scrim                   = ColorValue.of(`--md-sys-color-scrim`, Palette.Neutral0.toCSSValue(), true)
    public static readonly Secondary               = ColorValue.of(`--md-sys-color-secondary`, Palette.Secondary80.toCSSValue(), true)
    public static readonly SecondaryContainer      = ColorValue.of(`--md-sys-color-secondary-container`, Palette.Secondary30.toCSSValue(), true)
    public static readonly SecondaryFixed          = ColorValue.of(`--md-sys-color-secondary-fixed`, Palette.Secondary90.toCSSValue(), true)
    public static readonly SecondaryFixedDim       = ColorValue.of(`--md-sys-color-secondary-fixed-dim`, Palette.Secondary80.toCSSValue(), true)
    public static readonly Shadow                  = ColorValue.of(`--md-sys-color-shadow`, Palette.Neutral0.toCSSValue(), true)
    public static readonly Surface                 = ColorValue.of(`--md-sys-color-surface`, Palette.Neutral6.toCSSValue(), true)
    public static readonly SurfaceBright           = ColorValue.of(`--md-sys-color-surface-bright`, Palette.Neutral24.toCSSValue(), true)
    public static readonly SurfaceContainer        = ColorValue.of(`--md-sys-color-surface-container`, Palette.Neutral12.toCSSValue(), true)
    public static readonly SurfaceContainerHigh    = ColorValue.of(`--md-sys-color-surface-container-high`, Palette.Neutral17.toCSSValue(), true)
    public static readonly SurfaceContainerHighest = ColorValue.of(`--md-sys-color-surface-container-highest`, Palette.Neutral22.toCSSValue(), true)
    public static readonly SurfaceContainerLow     = ColorValue.of(`--md-sys-color-surface-container-low`, Palette.Neutral10.toCSSValue(), true)
    public static readonly SurfaceContainerLowest  = ColorValue.of(`--md-sys-color-surface-container-lowest`, Palette.Neutral4.toCSSValue(), true)
    public static readonly SurfaceDim              = ColorValue.of(`--md-sys-color-surface-dim`, Palette.Neutral6.toCSSValue(), true)
    public static readonly SurfaceTint             = ColorValue.of(`--md-sys-color-surface-tint`, Palette.Primary80.toCSSValue(), true)
    public static readonly SurfaceVariant          = ColorValue.of(`--md-sys-color-surface-variant`, Palette.NeutralVariant30.toCSSValue(), true)
    public static readonly Tertiary                = ColorValue.of(`--md-sys-color-tertiary`, Palette.Tertiary80.toCSSValue(), true)
    public static readonly TertiaryContainer       = ColorValue.of(`--md-sys-color-tertiary-container`, Palette.Tertiary30.toCSSValue(), true)
    public static readonly TertiaryFixed           = ColorValue.of(`--md-sys-color-tertiary-fixed`, Palette.Tertiary90.toCSSValue(), true)
    public static readonly TertiaryFixedDim        = ColorValue.of(`--md-sys-color-tertiary-fixed-dim`, Palette.Tertiary80.toCSSValue(), true)
}
