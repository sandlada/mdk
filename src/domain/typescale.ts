import type { ICSSValue } from '../primitives/ICSSValue'
import { Typeface } from './typeface'

class FontCSSValue<K extends string, V extends number, U extends string> implements ICSSValue {
    private constructor(
        public readonly key: K, 
        public readonly value: V,
        public readonly unit: U
    ) {}

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
    private constructor(
        public readonly font: F,
        public readonly fontSize: S,
        public readonly tracking: T,
        public readonly lineHeight: L,
        public readonly fontWeight: W
    ) {}

    private static of<F, S, T, L, W>(
        font: F,
        fontSize: S,
        tracking: T,
        lineHeight: L,
        fontWeight: W
    ) {
        return new Typescale(font, fontSize, tracking, lineHeight, fontWeight)
    }

    public static readonly DisplayLarge = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('display-large-font-size', 57, 'px'),
        FontCSSValue.of('display-large-font-tracking', -0.25, 'px'),
        FontCSSValue.of('display-large-font-line-height', 64, 'px'),
        Typeface.WeightRegular
    )
    public static readonly DisplayMedium = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('display-medium', 45, 'px'),
        FontCSSValue.of('display-medium', 0, 'px'),
        FontCSSValue.of('display-medium', 52, 'px'),
        Typeface.WeightRegular
    )
    public static readonly DisplaySmall = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('display-small', 36, 'px'),
        FontCSSValue.of('display-small', 0, 'px'),
        FontCSSValue.of('display-small', 44, 'px'),
        Typeface.WeightRegular,
    )

    public static readonly HeadlineLarge = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('headline-large', 32, 'px'),
        FontCSSValue.of('headline-large', 0, 'px'),
        FontCSSValue.of('headline-large', 40, 'px'),
        Typeface.WeightRegular
    )

    public static readonly HeadlineMedium = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('headline-medium', 28, 'px'),
        FontCSSValue.of('headline-medium', 0, 'px'),
        FontCSSValue.of('headline-medium', 36, 'px'),
        Typeface.WeightRegular
    )

    public static readonly HeadlineSmall = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('headline-small', 24, 'px'),
        FontCSSValue.of('headline-small', 0, 'px'),
        FontCSSValue.of('headline-small', 32, 'px'),
        Typeface.WeightRegular
    )

    public static readonly TitleLarge = Typescale.of(
        Typeface.FontBrand,
        FontCSSValue.of('title-large', 22, 'px'),
        FontCSSValue.of('title-large', 0, 'px'),
        FontCSSValue.of('title-large', 28, 'px'),
        Typeface.WeightRegular
    )

    public static readonly TitleMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('title-medium', 16, 'px'),
        FontCSSValue.of('title-medium', 0.15, 'px'),
        FontCSSValue.of('title-medium', 24, 'px'),
        Typeface.WeightMedium
    )

    public static readonly TitleSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('title-small', 14, 'px'),
        FontCSSValue.of('title-small', 0.1, 'px'),
        FontCSSValue.of('title-small', 20, 'px'),
        Typeface.WeightMedium
    )

    public static readonly BodyLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('body-large', 16, 'px'),
        FontCSSValue.of('body-large', 0.5, 'px'),
        FontCSSValue.of('body-large', 24, 'px'),
        Typeface.WeightRegular
    )

    public static readonly BodyMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('body-medium', 14, 'px'),
        FontCSSValue.of('body-medium', 0.25, 'px'),
        FontCSSValue.of('body-medium', 20, 'px'),
        Typeface.WeightRegular
    )

    public static readonly BodySmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('body-small', 12, 'px'),
        FontCSSValue.of('body-small', 0.4, 'px'),
        FontCSSValue.of('body-small', 16, 'px'),
        Typeface.WeightRegular
    )

    public static readonly LabelLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('label-large', 14, 'px'),
        FontCSSValue.of('label-large', 0.1, 'px'),
        FontCSSValue.of('label-large', 20, 'px'),
        Typeface.WeightMedium
    )

    public static readonly LabelMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('label-medium', 12, 'px'),
        FontCSSValue.of('label-medium', 0.5, 'px'),
        FontCSSValue.of('label-medium', 16, 'px'),
        Typeface.WeightMedium
    )

    public static readonly LabelSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('label-small', 11, 'px'),
        FontCSSValue.of('label-small', 0.5, 'px'),
        FontCSSValue.of('label-small', 16, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedDisplayLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-display-large', 57, 'px'),
        FontCSSValue.of('emphasized-display-large', -0.25, 'px'),
        FontCSSValue.of('emphasized-display-large', 64, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedDisplayMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-display-medium', 45, 'px'),
        FontCSSValue.of('emphasized-display-medium', 0, 'px'),
        FontCSSValue.of('emphasized-display-medium', 52, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedDisplaySmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-display-small', 36, 'px'),
        FontCSSValue.of('emphasized-display-small', 0, 'px'),
        FontCSSValue.of('emphasized-display-small', 44, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedHeadlineLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-headline-large', 32, 'px'),
        FontCSSValue.of('emphasized-headline-large', 0, 'px'),
        FontCSSValue.of('emphasized-headline-large', 40, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedHeadlineMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-headline-medium', 28, 'px'),
        FontCSSValue.of('emphasized-headline-medium', 0, 'px'),
        FontCSSValue.of('emphasized-headline-medium', 36, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedHeadlineSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-headline-small', 24, 'px'),
        FontCSSValue.of('emphasized-headline-small', 0, 'px'),
        FontCSSValue.of('emphasized-headline-small', 32, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedTitleLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-title-large', 22, 'px'),
        FontCSSValue.of('emphasized-title-large', 0, 'px'),
        FontCSSValue.of('emphasized-title-large', 28, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedTitleMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-title-medium', 16, 'px'),
        FontCSSValue.of('emphasized-title-medium', 0.15, 'px'),
        FontCSSValue.of('emphasized-title-medium', 24, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedTitleSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-title-small', 14, 'px'),
        FontCSSValue.of('emphasized-title-small', 0.1, 'px'),
        FontCSSValue.of('emphasized-title-small', 20, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedBodyLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-body-large', 16, 'px'),
        FontCSSValue.of('emphasized-body-large', 0.5, 'px'),
        FontCSSValue.of('emphasized-body-large', 24, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedBodyMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-body-medium', 14, 'px'),
        FontCSSValue.of('emphasized-body-medium', 0.25, 'px'),
        FontCSSValue.of('emphasized-body-medium', 20, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedBodySmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-body-small', 12, 'px'),
        FontCSSValue.of('emphasized-body-small', 0.4, 'px'),
        FontCSSValue.of('emphasized-body-small', 16, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedLabelLarge = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-label-large', 14, 'px'),
        FontCSSValue.of('emphasized-label-large', 0.1, 'px'),
        FontCSSValue.of('emphasized-label-large', 20, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedLabelMedium = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-label-medium', 12, 'px'),
        FontCSSValue.of('emphasized-label-medium', 0.5, 'px'),
        FontCSSValue.of('emphasized-label-medium', 16, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedLabelSmall = Typescale.of(
        Typeface.FontPlain,
        FontCSSValue.of('emphasized-label-small', 11, 'px'),
        FontCSSValue.of('emphasized-label-small', 0.5, 'px'),
        FontCSSValue.of('emphasized-label-small', 16, 'px'),
        Typeface.WeightBold
    )
}
