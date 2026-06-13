import { Typeface } from './typeface'
import type { ICSSDeclaration } from '../types'

class FontCSSDeclaration<K extends string, V extends number, U extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${U}${';' | ''}`> {
    public readonly key: K
    public readonly value: V
    public readonly unit: U

    public toJSON() { return { key: this.key, value: this.value, unit: this.unit } }
    public toCSSDeclaration({ semicolon = false, wrapVariable = false }: { semicolon?: boolean, wrapVariable?: boolean } = {}): string {
        return wrapVariable
            ? `var(${this.key}, ${this.value}${this.unit})`
            : `${this.key}: ${this.value}${this.unit}${semicolon ? ';' : ''}`
    }
    public toString() { return this.toCSSDeclaration() }

    public constructor(key: K, value: V, unit: U) {
        this.key = key
        this.value = value
        this.unit = unit
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

    public static readonly DisplayLarge = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('--md-sys-typescale-display-large-font-size', 57, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-display-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-display-large-font-line-height', 64, 'px'),
        Typeface.WeightRegular
    )
    public static readonly DisplayMedium = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('--md-sys-typescale-display-medium-font-size', 45, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-display-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-display-medium-font-line-height', 52, 'px'),
        Typeface.WeightRegular
    )
    public static readonly DisplaySmall = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('--md-sys-typescale-display-small-font-size', 36, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-display-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-display-small-font-line-height', 44, 'px'),
        Typeface.WeightRegular
    )

    public static readonly HeadlineLarge = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('headline-large-font-size', 32, 'px'),
        new FontCSSDeclaration('headline-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('headline-large-font-line-height', 40, 'px'),
        Typeface.WeightRegular
    )
    public static readonly HeadlineMedium = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('headline-medium-font-size', 28, 'px'),
        new FontCSSDeclaration('headline-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('headline-medium-font-line-height', 36, 'px'),
        Typeface.WeightRegular
    )
    public static readonly HeadlineSmall = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('headline-small-font-size', 24, 'px'),
        new FontCSSDeclaration('headline-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('headline-small-font-line-height', 32, 'px'),
        Typeface.WeightRegular
    )

    public static readonly TitleLarge = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('title-large-font-size', 22, 'px'),
        new FontCSSDeclaration('title-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('title-large-font-line-height', 28, 'px'),
        Typeface.WeightRegular
    )
    public static readonly TitleMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('title-medium-font-size', 16, 'px'),
        new FontCSSDeclaration('title-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('title-medium-font-line-height', 24, 'px'),
        Typeface.WeightMedium
    )
    public static readonly TitleSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('title-small-font-size', 14, 'px'),
        new FontCSSDeclaration('title-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('title-small-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )

    public static readonly BodyLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('body-large-font-size', 16, 'px'),
        new FontCSSDeclaration('body-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('body-large-font-line-height', 24, 'px'),
        Typeface.WeightRegular
    )
    public static readonly BodyMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('body-medium-font-size', 14, 'px'),
        new FontCSSDeclaration('body-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('body-medium-font-line-height', 20, 'px'),
        Typeface.WeightRegular
    )
    public static readonly BodySmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('body-small-font-size', 12, 'px'),
        new FontCSSDeclaration('body-small-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('body-small-font-line-height', 16, 'px'),
        Typeface.WeightRegular
    )

    public static readonly LabelLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('label-large-font-size', 14, 'px'),
        new FontCSSDeclaration('label-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('label-large-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )
    public static readonly LabelMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('label-medium-font-size', 12, 'px'),
        new FontCSSDeclaration('label-medium-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('label-medium-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )
    public static readonly LabelSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('label-small-font-size', 11, 'px'),
        new FontCSSDeclaration('label-small-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('label-small-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedDisplayLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-display-large-font-size', 57, 'px'),
        new FontCSSDeclaration('emphasized-display-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-display-large-font-line-height', 64, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedDisplayMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-display-medium-font-size', 45, 'px'),
        new FontCSSDeclaration('emphasized-display-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-display-medium-font-line-height', 52, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedDisplaySmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-display-small-font-size', 36, 'px'),
        new FontCSSDeclaration('emphasized-display-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-display-small-font-line-height', 44, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedHeadlineLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-headline-large-font-size', 32, 'px'),
        new FontCSSDeclaration('emphasized-headline-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-headline-large-font-line-height', 40, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedHeadlineMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-headline-medium-font-size', 28, 'px'),
        new FontCSSDeclaration('emphasized-headline-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-headline-medium-font-line-height', 36, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedHeadlineSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-headline-small-font-size', 24, 'px'),
        new FontCSSDeclaration('emphasized-headline-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-headline-small-font-line-height', 32, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedTitleLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-title-large-font-size', 22, 'px'),
        new FontCSSDeclaration('emphasized-title-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-title-large-font-line-height', 28, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedTitleMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-title-medium-font-size', 16, 'px'),
        new FontCSSDeclaration('emphasized-title-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-title-medium-font-line-height', 24, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedTitleSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-title-small-font-size', 14, 'px'),
        new FontCSSDeclaration('emphasized-title-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-title-small-font-line-height', 20, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedBodyLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-body-large-font-size', 16, 'px'),
        new FontCSSDeclaration('emphasized-body-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-body-large-font-line-height', 24, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedBodyMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-body-medium-font-size', 14, 'px'),
        new FontCSSDeclaration('emphasized-body-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-body-medium-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedBodySmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-body-small-font-size', 12, 'px'),
        new FontCSSDeclaration('emphasized-body-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-body-small-font-line-height', 16, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedLabelLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-label-large-font-size', 14, 'px'),
        new FontCSSDeclaration('emphasized-label-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('emphasized-label-large-font-line-height', 20, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedLabelMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-label-medium-font-size', 12, 'px'),
        new FontCSSDeclaration('emphasized-label-medium-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('emphasized-label-medium-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedLabelSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('emphasized-label-small-font-size', 11, 'px'),
        new FontCSSDeclaration('emphasized-label-small-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('emphasized-label-small-font-line-height', 16, 'px'),
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

}
