import type { ICSSValue } from "../primitives/ICSSValue";

type PaletteCSSFallback = `--md-sys-palette-${string}-${number}` | `--md-sys-palette-${string}`
type PaletteValue       = `#${string}`

export class Palette<
    K extends PaletteCSSFallback,
    V extends PaletteValue,
    HasFallback extends boolean
> implements ICSSValue {

    public readonly key        : K
    public readonly value      : V
    public readonly hasFallback: HasFallback

    private constructor(key: K, value: V, hasFallback: HasFallback) {
        this.key         = key
        this.value       = value
        this.hasFallback = hasFallback
    }

    private static of<
        K extends PaletteCSSFallback, 
        V extends PaletteValue, 
        HasFallback extends boolean
    >(key: K, value: V, hasFallback: HasFallback) {
        return new Palette(key, value, hasFallback)
    }

    public toCSSValue(): HasFallback extends true ? `var(${K}, ${V})` : `${V}` {
        return (
            this.hasFallback 
            ? `var(${this.key}, ${this.value})` as `var(${K}, ${V})` 
            : this.value as `${V}`
        ) as any
    }

    public toString() {
        return this.toCSSValue()
    }

    public static readonly Black             = Palette.of(`--md-sys-palette-black`, `#000`, true)
    public static readonly Error0            = Palette.of(`--md-sys-palette-error-0`, `#000`, true)
    public static readonly Error10           = Palette.of(`--md-sys-palette-error-10`, `#410e0b`, true)
    public static readonly Error20           = Palette.of(`--md-sys-palette-error-20`, `#601410`, true)
    public static readonly Error30           = Palette.of(`--md-sys-palette-error-30`, `#8c1d18`, true)
    public static readonly Error40           = Palette.of(`--md-sys-palette-error-40`, `#b3261e`, true)
    public static readonly Error50           = Palette.of(`--md-sys-palette-error-50`, `#dc362e`, true)
    public static readonly Error60           = Palette.of(`--md-sys-palette-error-60`, `#e46962`, true)
    public static readonly Error70           = Palette.of(`--md-sys-palette-error-70`, `#ec928e`, true)
    public static readonly Error80           = Palette.of(`--md-sys-palette-error-80`, `#f2b8b5`, true)
    public static readonly Error90           = Palette.of(`--md-sys-palette-error-90`, `#f9dedc`, true)
    public static readonly Error95           = Palette.of(`--md-sys-palette-error-95`, `#fceeee`, true)
    public static readonly Error99           = Palette.of(`--md-sys-palette-error-99`, `#fffbf9`, true)
    public static readonly Error100          = Palette.of(`--md-sys-palette-error-100`, `#fff`, true)
    public static readonly NeutralVariant0   = Palette.of(`--md-sys-palette-neutral-variant-0`, `#000`, true)
    public static readonly NeutralVariant10  = Palette.of(`--md-sys-palette-neutral-variant-10`, `#1d1a22`, true)
    public static readonly NeutralVariant20  = Palette.of(`--md-sys-palette-neutral-variant-20`, `#322f37`, true)
    public static readonly NeutralVariant30  = Palette.of(`--md-sys-palette-neutral-variant-30`, `#49454f`, true)
    public static readonly NeutralVariant40  = Palette.of(`--md-sys-palette-neutral-variant-40`, `#605d66`, true)
    public static readonly NeutralVariant50  = Palette.of(`--md-sys-palette-neutral-variant-50`, `#79747e`, true)
    public static readonly NeutralVariant60  = Palette.of(`--md-sys-palette-neutral-variant-60`, `#938f99`, true)
    public static readonly NeutralVariant70  = Palette.of(`--md-sys-palette-neutral-variant-70`, `#aea9b4`, true)
    public static readonly NeutralVariant80  = Palette.of(`--md-sys-palette-neutral-variant-80`, `#cac4d0`, true)
    public static readonly NeutralVariant90  = Palette.of(`--md-sys-palette-neutral-variant-90`, `#e7e0ec`, true)
    public static readonly NeutralVariant95  = Palette.of(`--md-sys-palette-neutral-variant-95`, `#f5eefa`, true)
    public static readonly NeutralVariant99  = Palette.of(`--md-sys-palette-neutral-variant-99`, `#fffbfe`, true)
    public static readonly NeutralVariant100 = Palette.of(`--md-sys-palette-neutral-variant-100`, `#fff`, true)
    public static readonly Neutral0          = Palette.of(`--md-sys-palette-neutral-0`, `#000`, true)
    public static readonly Neutral4          = Palette.of(`--md-sys-palette-neutral-4`, `#0f0d13`, true)
    public static readonly Neutral6          = Palette.of(`--md-sys-palette-neutral-6`, `#141218`, true)
    public static readonly Neutral10         = Palette.of(`--md-sys-palette-neutral-10`, `#1d1b20`, true)
    public static readonly Neutral12         = Palette.of(`--md-sys-palette-neutral-12`, `#211f26`, true)
    public static readonly Neutral17         = Palette.of(`--md-sys-palette-neutral-17`, `#2b2930`, true)
    public static readonly Neutral20         = Palette.of(`--md-sys-palette-neutral-20`, `#322f35`, true)
    public static readonly Neutral22         = Palette.of(`--md-sys-palette-neutral-22`, `#36343b`, true)
    public static readonly Neutral24         = Palette.of(`--md-sys-palette-neutral-24`, `#3b383e`, true)
    public static readonly Neutral30         = Palette.of(`--md-sys-palette-neutral-30`, `#48464c`, true)
    public static readonly Neutral40         = Palette.of(`--md-sys-palette-neutral-40`, `#605d64`, true)
    public static readonly Neutral50         = Palette.of(`--md-sys-palette-neutral-50`, `#79767d`, true)
    public static readonly Neutral60         = Palette.of(`--md-sys-palette-neutral-60`, `#938f96`, true)
    public static readonly Neutral70         = Palette.of(`--md-sys-palette-neutral-70`, `#aea9b1`, true)
    public static readonly Neutral80         = Palette.of(`--md-sys-palette-neutral-80`, `#cac5cd`, true)
    public static readonly Neutral87         = Palette.of(`--md-sys-palette-neutral-87`, `#ded8e1`, true)
    public static readonly Neutral90         = Palette.of(`--md-sys-palette-neutral-90`, `#e6e0e9`, true)
    public static readonly Neutral92         = Palette.of(`--md-sys-palette-neutral-92`, `#ece6f0`, true)
    public static readonly Neutral94         = Palette.of(`--md-sys-palette-neutral-94`, `#f3edf7`, true)
    public static readonly Neutral95         = Palette.of(`--md-sys-palette-neutral-95`, `#f5eff7`, true)
    public static readonly Neutral96         = Palette.of(`--md-sys-palette-neutral-96`, `#f7f2fa`, true)
    public static readonly Neutral98         = Palette.of(`--md-sys-palette-neutral-98`, `#fef7ff`, true)
    public static readonly Neutral99         = Palette.of(`--md-sys-palette-neutral-99`, `#fffbff`, true)
    public static readonly Neutral100        = Palette.of(`--md-sys-palette-neutral-100`, `#fff`, true)
    public static readonly Primary0          = Palette.of(`--md-sys-palette-primary-0`, `#000`, true)
    public static readonly Primary10         = Palette.of(`--md-sys-palette-primary-10`, `#21005d`, true)
    public static readonly Primary20         = Palette.of(`--md-sys-palette-primary-20`, `#381e72`, true)
    public static readonly Primary30         = Palette.of(`--md-sys-palette-primary-30`, `#4f378b`, true)
    public static readonly Primary40         = Palette.of(`--md-sys-palette-primary-40`, `#6750a4`, true)
    public static readonly Primary50         = Palette.of(`--md-sys-palette-primary-50`, `#7f67be`, true)
    public static readonly Primary60         = Palette.of(`--md-sys-palette-primary-60`, `#9a82db`, true)
    public static readonly Primary70         = Palette.of(`--md-sys-palette-primary-70`, `#b69df8`, true)
    public static readonly Primary80         = Palette.of(`--md-sys-palette-primary-80`, `#d0bcff`, true)
    public static readonly Primary90         = Palette.of(`--md-sys-palette-primary-90`, `#eaddff`, true)
    public static readonly Primary95         = Palette.of(`--md-sys-palette-primary-95`, `#f6edff`, true)
    public static readonly Primary99         = Palette.of(`--md-sys-palette-primary-99`, `#fffbfe`, true)
    public static readonly Primary100        = Palette.of(`--md-sys-palette-primary-100`, `#fff`, true)
    public static readonly Secondary0        = Palette.of(`--md-sys-palette-secondary-0`, `#000`, true)
    public static readonly Secondary10       = Palette.of(`--md-sys-palette-secondary-10`, `#1d192b`, true)
    public static readonly Secondary20       = Palette.of(`--md-sys-palette-secondary-20`, `#332d41`, true)
    public static readonly Secondary30       = Palette.of(`--md-sys-palette-secondary-30`, `#4a4458`, true)
    public static readonly Secondary40       = Palette.of(`--md-sys-palette-secondary-40`, `#625b71`, true)
    public static readonly Secondary50       = Palette.of(`--md-sys-palette-secondary-50`, `#7a7289`, true)
    public static readonly Secondary60       = Palette.of(`--md-sys-palette-secondary-60`, `#958da5`, true)
    public static readonly Secondary70       = Palette.of(`--md-sys-palette-secondary-70`, `#b0a7c0`, true)
    public static readonly Secondary80       = Palette.of(`--md-sys-palette-secondary-80`, `#ccc2dc`, true)
    public static readonly Secondary90       = Palette.of(`--md-sys-palette-secondary-90`, `#e8def8`, true)
    public static readonly Secondary95       = Palette.of(`--md-sys-palette-secondary-95`, `#f6edff`, true)
    public static readonly Secondary99       = Palette.of(`--md-sys-palette-secondary-99`, `#fffbfe`, true)
    public static readonly Secondary100      = Palette.of(`--md-sys-palette-secondary-100`, `#fff`, true)
    public static readonly Tertiary0         = Palette.of(`--md-sys-palette-tertiary-0`, `#000`, true)
    public static readonly Tertiary10        = Palette.of(`--md-sys-palette-tertiary-10`, `#31111d`, true)
    public static readonly Tertiary20        = Palette.of(`--md-sys-palette-tertiary-20`, `#492532`, true)
    public static readonly Tertiary30        = Palette.of(`--md-sys-palette-tertiary-30`, `#633b48`, true)
    public static readonly Tertiary40        = Palette.of(`--md-sys-palette-tertiary-40`, `#7d5260`, true)
    public static readonly Tertiary50        = Palette.of(`--md-sys-palette-tertiary-50`, `#986977`, true)
    public static readonly Tertiary60        = Palette.of(`--md-sys-palette-tertiary-60`, `#b58392`, true)
    public static readonly Tertiary70        = Palette.of(`--md-sys-palette-tertiary-70`, `#d29dac`, true)
    public static readonly Tertiary80        = Palette.of(`--md-sys-palette-tertiary-80`, `#efb8c8`, true)
    public static readonly Tertiary90        = Palette.of(`--md-sys-palette-tertiary-90`, `#ffd8e4`, true)
    public static readonly Tertiary95        = Palette.of(`--md-sys-palette-tertiary-95`, `#ffecf1`, true)
    public static readonly Tertiary99        = Palette.of(`--md-sys-palette-tertiary-99`, `#fffbfa`, true)
    public static readonly Tertiary100       = Palette.of(`--md-sys-palette-tertiary-100`, `#fff`, true)
    public static readonly White             = Palette.of(`--md-sys-palette-white`, `#fff`, true)
}
