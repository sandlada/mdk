import { Typeface } from './typeface'
import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

class FontCSSDeclaration<K extends string, V extends number, U extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${U}${';' | ''}`, `var(${K}, ${V}${U})`> {
    public readonly Key: K
    public readonly Value: V
    public readonly Unit: U

    public toJSON() { return { Key: this.Key, Value: this.Value, Unit: this.Unit } }
    public ToCSSDeclaration(): `${K}: ${V}${U}`
    public ToCSSDeclaration(options: { Semicolon: true }): `${K}: ${V}${U};`
    public ToCSSDeclaration(options?: { Semicolon?: boolean }): `${K}: ${V}${U}${';' | ''}`
    public ToCSSDeclaration({ Semicolon = false }: { Semicolon?: boolean } = {}): `${K}: ${V}${U}${';' | ''}` {
        return `${this.Key}: ${this.Value}${this.Unit}${Semicolon ? ';' : ''}`
    }
    public ToCSSVariable(): `var(${K}, ${V}${U})`
    public ToCSSVariable(): `var(${K}, ${V}${U})` {
        return `var(${this.Key}, ${this.Value}${this.Unit})`
    }
    public ToCSSValue() {
        return `${this.Value}${this.Unit}`
    }
    public toString() { return this.ToCSSDeclaration() }

    public constructor(Key: K, Value: V, Unit: U) {
        this.Key = Key
        this.Value = Value
        this.Unit = Unit
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
        new FontCSSDeclaration('--md-sys-typescale-headline-large-font-size', 32, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-headline-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-headline-large-font-line-height', 40, 'px'),
        Typeface.WeightRegular
    )
    public static readonly HeadlineMedium = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('--md-sys-typescale-headline-medium-font-size', 28, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-headline-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-headline-medium-font-line-height', 36, 'px'),
        Typeface.WeightRegular
    )
    public static readonly HeadlineSmall = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('--md-sys-typescale-headline-small-font-size', 24, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-headline-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-headline-small-font-line-height', 32, 'px'),
        Typeface.WeightRegular
    )

    public static readonly TitleLarge = new Typescale(
        Typeface.FontBrand,
        new FontCSSDeclaration('--md-sys-typescale-title-large-font-size', 22, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-title-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-title-large-font-line-height', 28, 'px'),
        Typeface.WeightRegular
    )
    public static readonly TitleMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-title-medium-font-size', 16, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-title-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-title-medium-font-line-height', 24, 'px'),
        Typeface.WeightMedium
    )
    public static readonly TitleSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-title-small-font-size', 14, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-title-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-title-small-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )

    public static readonly BodyLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-body-large-font-size', 16, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-body-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-body-large-font-line-height', 24, 'px'),
        Typeface.WeightRegular
    )
    public static readonly BodyMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-body-medium-font-size', 14, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-body-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-body-medium-font-line-height', 20, 'px'),
        Typeface.WeightRegular
    )
    public static readonly BodySmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-body-small-font-size', 12, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-body-small-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-body-small-font-line-height', 16, 'px'),
        Typeface.WeightRegular
    )

    public static readonly LabelLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-label-large-font-size', 14, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-label-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-label-large-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )
    public static readonly LabelMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-label-medium-font-size', 12, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-label-medium-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-label-medium-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )
    public static readonly LabelSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-label-small-font-size', 11, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-label-small-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-label-small-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedDisplayLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-large-font-size', 57, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-large-font-line-height', 64, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedDisplayMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-medium-font-size', 45, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-medium-font-line-height', 52, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedDisplaySmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-small-font-size', 36, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-display-small-font-line-height', 44, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedHeadlineLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-large-font-size', 32, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-large-font-line-height', 40, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedHeadlineMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-medium-font-size', 28, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-medium-font-line-height', 36, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedHeadlineSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-small-font-size', 24, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-headline-small-font-line-height', 32, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedTitleLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-large-font-size', 22, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-large-font-line-height', 28, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedTitleMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-medium-font-size', 16, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-medium-font-line-height', 24, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedTitleSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-small-font-size', 14, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-title-small-font-line-height', 20, 'px'),
        Typeface.WeightBold
    )

    public static readonly EmphasizedBodyLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-large-font-size', 16, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-large-font-line-height', 24, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedBodyMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-medium-font-size', 14, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-medium-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-medium-font-line-height', 20, 'px'),
        Typeface.WeightMedium
    )
    public static readonly EmphasizedBodySmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-small-font-size', 12, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-small-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-body-small-font-line-height', 16, 'px'),
        Typeface.WeightMedium
    )

    public static readonly EmphasizedLabelLarge = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-large-font-size', 14, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-large-font-tracking', 0, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-large-font-line-height', 20, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedLabelMedium = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-medium-font-size', 12, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-medium-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-medium-font-line-height', 16, 'px'),
        Typeface.WeightBold
    )
    public static readonly EmphasizedLabelSmall = new Typescale(
        Typeface.FontPlain,
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-small-font-size', 11, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-small-font-tracking', 0.1, 'px'),
        new FontCSSDeclaration('--md-sys-typescale-emphasized-label-small-font-line-height', 16, 'px'),
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
