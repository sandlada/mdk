import type { ICSSValue } from '../primitives/ICSSValue'
import { Typeface } from './typeface'

class FontCSSValue<K extends string, V extends number, U extends string> implements ICSSValue {
    public readonly key: K
    public readonly value: V
    public readonly unit: U

    private constructor(key: K, value: V, unit: U) {
        this.key = key
        this.value = value
        this.unit = unit
    }

    public static of<K extends string, V extends number, U extends string>(key: K, value: V, unit: U) {
        return new FontCSSValue(key, value, unit)
    }

    public toCSSValue(): `var(--md-sys-typescale-${K}, ${V}${U})` {
        return `var(--md-sys-typescale-${this.key}, ${this.value}${this.unit})`
    }

    public toCSSValueWithoutVariable(): `${V}${U}` {
        return `${this.value}${this.unit}`
    }

    public toString() {
        return this.toCSSValue()
    }
}

export class Typescale<F, S, T, L, W> {
    public readonly Font      : F
    public readonly FontSize  : S
    public readonly Tracking  : T
    public readonly LineHeight: L
    public readonly FontWeight: W

    private constructor(
        font      : F,
        fontSize  : S,
        tracking  : T,
        lineHeight: L,
        fontWeight: W
    ) {
        this.Font       = font
        this.FontSize   = fontSize
        this.Tracking   = tracking
        this.LineHeight = lineHeight
        this.FontWeight = fontWeight
    }

    private static of<F, S, T, L, W>(
        font      : F,
        fontSize  : S,
        tracking  : T,
        lineHeight: L,
        fontWeight: W
    ) {
        return new Typescale(font, fontSize, tracking, lineHeight, fontWeight)
    }

    public static readonly DisplayLarge = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('display-large-font-size', 57, 'px'),
        FontCSSValue.of('display-large-font-tracking', 0, 'px'),
        FontCSSValue.of('display-large-font-line-height', 64, 'px'),
        Typeface.WeightRegular
    )
    public static readonly DisplayMedium = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('display-medium-font-size', 45, 'px'),
        FontCSSValue.of('display-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('display-medium-font-line-height', 52, 'px'),
        Typeface.WeightRegular
    )
    public static readonly DisplaySmall = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('display-small-font-size', 36, 'px'),
        FontCSSValue.of('display-small-font-tracking', 0, 'px'),
        FontCSSValue.of('display-small-font-line-height', 44, 'px'),
        Typeface.WeightRegular,
    )

    public static readonly HeadlineLarge = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('headline-large-font-size', 32, 'px'),
        FontCSSValue.of('headline-large-font-tracking', 0, 'px'),
        FontCSSValue.of('headline-large-font-line-height', 40, 'px'),
        Typeface.WeightRegular
    )
    public static readonly HeadlineMedium = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('headline-medium-font-size', 28, 'px'),
        FontCSSValue.of('headline-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('headline-medium-font-line-height', 36, 'px'),
        Typeface.WeightRegular
    )
    public static readonly HeadlineSmall = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('headline-small-font-size', 24, 'px'),
        FontCSSValue.of('headline-small-font-tracking', 0, 'px'),
        FontCSSValue.of('headline-small-font-line-height', 32, 'px'),
        Typeface.WeightRegular
    )

    public static readonly TitleLarge = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('title-large-font-size', 22, 'px'),
        FontCSSValue.of('title-large-font-tracking', 0, 'px'),
        FontCSSValue.of('title-large-font-line-height', 28, 'px'),
        Typeface.WeightRegular
    )
    public static readonly TitleMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('title-medium-font-size', 16, 'px'),
        FontCSSValue.of('title-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('title-medium-font-line-height', 24, 'px'),
        Typeface.WeightMedium
    )
    public static readonly TitleSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('title-small-font-size', 14, 'px'),
        FontCSSValue.of('title-small-font-tracking', 0, 'px'),
        FontCSSValue.of('title-small-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )

    public static readonly BodyLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('body-large-font-size', 16, 'px'),
        FontCSSValue.of('body-large-font-tracking', 0, 'px'),
        FontCSSValue.of('body-large-font-line-height', 24, 'px'),
        Typeface.WeightRegular
    )
    public static readonly BodyMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('body-medium-font-size', 14, 'px'),
        FontCSSValue.of('body-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('body-medium-font-line-height', 20, 'px'),
        Typeface.WeightRegular
    )
    public static readonly BodySmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('body-small-font-size', 12, 'px'),
        FontCSSValue.of('body-small-font-tracking', 0.1, 'px'),
        FontCSSValue.of('body-small-font-line-height', 16, 'px'),
        Typeface.WeightRegular
    )

    public static readonly LabelLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('label-large-font-size', 14, 'px'),
        FontCSSValue.of('label-large-font-tracking', 0, 'px'),
        FontCSSValue.of('label-large-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )
    public static readonly LabelMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('label-medium-font-size', 12, 'px'),
        FontCSSValue.of('label-medium-font-tracking', 0.1, 'px'),
        FontCSSValue.of('label-medium-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )
    public static readonly LabelSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('label-small-font-size', 11, 'px'),
        FontCSSValue.of('label-small-font-tracking', 0.1, 'px'),
        FontCSSValue.of('label-small-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedDisplayLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-display-large-font-size', 57, 'px'),
        FontCSSValue.of('emphasized-display-large-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-display-large-font-line-height', 64, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedDisplayMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-display-medium-font-size', 45, 'px'),
        FontCSSValue.of('emphasized-display-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-display-medium-font-line-height', 52, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedDisplaySmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-display-small-font-size', 36, 'px'),
        FontCSSValue.of('emphasized-display-small-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-display-small-font-line-height', 44, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedHeadlineLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-headline-large-font-size', 32, 'px'),
        FontCSSValue.of('emphasized-headline-large-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-headline-large-font-line-height', 40, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedHeadlineMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-headline-medium-font-size', 28, 'px'),
        FontCSSValue.of('emphasized-headline-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-headline-medium-font-line-height', 36, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedHeadlineSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-headline-small-font-size', 24, 'px'),
        FontCSSValue.of('emphasized-headline-small-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-headline-small-font-line-height', 32, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedTitleLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-title-large-font-size', 22, 'px'),
        FontCSSValue.of('emphasized-title-large-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-title-large-font-line-height', 28, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedTitleMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-title-medium-font-size', 16, 'px'),
        FontCSSValue.of('emphasized-title-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-title-medium-font-line-height', 24, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedTitleSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-title-small-font-size', 14, 'px'),
        FontCSSValue.of('emphasized-title-small-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-title-small-font-line-height', 20, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedBodyLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-body-large-font-size', 16, 'px'),
        FontCSSValue.of('emphasized-body-large-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-body-large-font-line-height', 24, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedBodyMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-body-medium-font-size', 14, 'px'),
        FontCSSValue.of('emphasized-body-medium-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-body-medium-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedBodySmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-body-small-font-size', 12, 'px'),
        FontCSSValue.of('emphasized-body-small-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-body-small-font-line-height', 16, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedLabelLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-label-large-font-size', 14, 'px'),
        FontCSSValue.of('emphasized-label-large-font-tracking', 0, 'px'),
        FontCSSValue.of('emphasized-label-large-font-line-height', 20, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedLabelMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-label-medium-font-size', 12, 'px'),
        FontCSSValue.of('emphasized-label-medium-font-tracking', 0.1, 'px'),
        FontCSSValue.of('emphasized-label-medium-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedLabelSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-label-small-font-size', 11, 'px'),
        FontCSSValue.of('emphasized-label-small-font-tracking', 0.1, 'px'),
        FontCSSValue.of('emphasized-label-small-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )

    public static readonly AllEnums = {
        DisplayLarge            : Typescale.DisplayLarge,
        DisplayMedium           : Typescale.DisplayMedium,
        DisplaySmall            : Typescale.DisplaySmall,
        HeadlineLarge           : Typescale.HeadlineLarge,
        HeadlineMedium          : Typescale.HeadlineMedium,
        HeadlineSmall           : Typescale.HeadlineSmall,
        TitleLarge              : Typescale.TitleLarge,
        TitleMedium             : Typescale.TitleMedium,
        TitleSmall              : Typescale.TitleSmall,
        BodyLarge               : Typescale.BodyLarge,
        BodyMedium              : Typescale.BodyMedium,
        BodySmall               : Typescale.BodySmall,
        LabelLarge              : Typescale.LabelLarge,
        LabelMedium             : Typescale.LabelMedium,
        LabelSmall              : Typescale.LabelSmall,
        EmphasizedDisplayLarge  : Typescale.EmphasizedDisplayLarge,
        EmphasizedDisplayMedium : Typescale.EmphasizedDisplayMedium,
        EmphasizedDisplaySmall  : Typescale.EmphasizedDisplaySmall,
        EmphasizedHeadlineLarge : Typescale.EmphasizedHeadlineLarge,
        EmphasizedHeadlineMedium: Typescale.EmphasizedHeadlineMedium,
        EmphasizedHeadlineSmall : Typescale.EmphasizedHeadlineSmall,
        EmphasizedTitleLarge    : Typescale.EmphasizedTitleLarge,
        EmphasizedTitleMedium   : Typescale.EmphasizedTitleMedium,
        EmphasizedTitleSmall    : Typescale.EmphasizedTitleSmall,
        EmphasizedBodyLarge     : Typescale.EmphasizedBodyLarge,
        EmphasizedBodyMedium    : Typescale.EmphasizedBodyMedium,
        EmphasizedBodySmall     : Typescale.EmphasizedBodySmall,
        EmphasizedLabelLarge    : Typescale.EmphasizedLabelLarge,
        EmphasizedLabelMedium   : Typescale.EmphasizedLabelMedium,
        EmphasizedLabelSmall    : Typescale.EmphasizedLabelSmall
    } as const

    public static readonly AllValues = [
        Typescale.DisplayLarge,
        Typescale.DisplayMedium,
        Typescale.DisplaySmall,
        Typescale.HeadlineLarge,
        Typescale.HeadlineMedium,
        Typescale.HeadlineSmall,
        Typescale.TitleLarge,
        Typescale.TitleMedium,
        Typescale.TitleSmall,
        Typescale.BodyLarge,
        Typescale.BodyMedium,
        Typescale.BodySmall,
        Typescale.LabelLarge,
        Typescale.LabelMedium,
        Typescale.LabelSmall,
        Typescale.EmphasizedDisplayLarge,
        Typescale.EmphasizedDisplayMedium,
        Typescale.EmphasizedDisplaySmall,
        Typescale.EmphasizedHeadlineLarge,
        Typescale.EmphasizedHeadlineMedium,
        Typescale.EmphasizedHeadlineSmall,
        Typescale.EmphasizedTitleLarge,
        Typescale.EmphasizedTitleMedium,
        Typescale.EmphasizedTitleSmall,
        Typescale.EmphasizedBodyLarge,
        Typescale.EmphasizedBodyMedium,
        Typescale.EmphasizedBodySmall,
        Typescale.EmphasizedLabelLarge,
        Typescale.EmphasizedLabelMedium,
        Typescale.EmphasizedLabelSmall
    ] as const

    public static readonly AllKeys = Typescale.AllValues.map(v => v.FontSize.key)
}
