import type { SemanticColorNames, SemanticColors } from '../interfaces/color.interface';
import type { ICSSDeclaration } from '../types'

class _Color<K extends string, V extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`> {

    public readonly key  : K
    public readonly value: V

    public toJSON() { return { key: this.key, value: this.value } }
    public toString() { return this.value }
    public toCSSDeclaration({ semicolon = false, wrapVariable = false }: { semicolon?: boolean, wrapVariable?: boolean } = {}): string {
        return wrapVariable
            ? `var(${this.key}, ${this.value})`
            : `${this.key}: ${this.value}${semicolon ? ';' : ''}`
    }

    public constructor(key: K, value: V) {
        this.key = key
        this.value = value
    }
}

const DefaultColorContract = {
    PrimaryKeyColor        : { key: `--md-sys-color-primary-key-color`,          value: `#039d54`},
    SecondaryKeyColor      : { key: `--md-sys-color-secondary-key-color`,        value: `#54815f`},
    TertiaryKeyColor       : { key: `--md-sys-color-tertiary-key-color`,         value: `#ffa97f`},
    ErrorKeyColor          : { key: `--md-sys-color-error-key-color`,            value: `#de3730`},
    NeutralKeyColor        : { key: `--md-sys-color-neutral-key-color`,          value: `#727971`},
    NeutralVariantKeyColor : { key: `--md-sys-color-neutral-variant-key-color`,  value: `#6d7a6e`},
    Background             : { key: `--md-sys-color-background`,                 value: `light-dark(#f4fbf1, #0e150f)`},
    Error                  : { key: `--md-sys-color-error`,                      value: `light-dark(#ba1a1a, #ffb4ab)`},
    ErrorContainer         : { key: `--md-sys-color-error-container`,            value: `light-dark(#ffdad6, #93000a)`},
    ErrorDim               : { key: `--md-sys-color-error-dim`,                  value: `light-dark(#a80710, #ff554a)`},
    InverseOnSurface       : { key: `--md-sys-color-inverse-on-surface`,         value: `light-dark(#ecf3e9, #2b322c)`},
    InversePrimary         : { key: `--md-sys-color-inverse-primary`,            value: `light-dark(#61de8c, #006d38)`},
    InverseSurface         : { key: `--md-sys-color-inverse-surface`,            value: `light-dark(#2b322c, #dde4db)`},
    OnBackground           : { key: `--md-sys-color-on-background`,              value: `light-dark(#171d17, #dde4db)`},
    OnError                : { key: `--md-sys-color-on-error`,                   value: `light-dark(#ffffff, #690005)`},
    OnErrorContainer       : { key: `--md-sys-color-on-error-container`,         value: `light-dark(#93000a, #ffdad6)`},
    OnPrimary              : { key: `--md-sys-color-on-primary`,                 value: `light-dark(#ffffff, #00391a)`},
    OnPrimaryContainer     : { key: `--md-sys-color-on-primary-container`,       value: `light-dark(#00592c, #00592c)`},
    OnPrimaryFixed         : { key: `--md-sys-color-on-primary-fixed`,           value: `light-dark(#00210d, #00210d)`},
    OnPrimaryFixedVariant  : { key: `--md-sys-color-on-primary-fixed-variant`,   value: `light-dark(#005229, #005229)`},
    OnSecondary            : { key: `--md-sys-color-on-secondary`,               value: `light-dark(#ffffff, #0a381c)`},
    OnSecondaryContainer   : { key: `--md-sys-color-on-secondary-container`,     value: `light-dark(#406c4b, #97c7a0)`},
    OnSecondaryFixed       : { key: `--md-sys-color-on-secondary-fixed`,         value: `light-dark(#00210d, #00210d)`},
    OnSecondaryFixedVariant: { key: `--md-sys-color-on-secondary-fixed-variant`, value: `light-dark(#244f31, #244f31)`},
    OnSurface              : { key: `--md-sys-color-on-surface`,                 value: `light-dark(#171d17, #dde4db)`},
    OnSurfaceVariant       : { key: `--md-sys-color-on-surface-variant`,         value: `light-dark(#3d4a3f, #bccabc)`},
    OnTertiary             : { key: `--md-sys-color-on-tertiary`,                value: `light-dark(#ffffff, #552002)`},
    OnTertiaryContainer    : { key: `--md-sys-color-on-tertiary-container`,      value: `light-dark(#793c1a, #793c1a)`},
    OnTertiaryFixed        : { key: `--md-sys-color-on-tertiary-fixed`,          value: `light-dark(#351000, #351000)`},
    OnTertiaryFixedVariant : { key: `--md-sys-color-on-tertiary-fixed-variant`,  value: `light-dark(#723615, #723615)`},
    Outline                : { key: `--md-sys-color-outline`,                    value: `light-dark(#6d7a6e, #879487)`},
    OutlineVariant         : { key: `--md-sys-color-outline-variant`,            value: `light-dark(#bccabc, #3d4a3f)`},
    Primary                : { key: `--md-sys-color-primary`,                    value: `light-dark(#006d38, #76f29e)`},
    PrimaryContainer       : { key: `--md-sys-color-primary-container`,          value: `light-dark(#58d584, #58d584)`},
    PrimaryDim             : { key: `--md-sys-color-primary-dim`,                value: `light-dark(#006030, #82fea8)`},
    PrimaryFixed           : { key: `--md-sys-color-primary-fixed`,              value: `light-dark(#7ffba6, #7ffba6)`},
    PrimaryFixedDim        : { key: `--md-sys-color-primary-fixed-dim`,          value: `light-dark(#61de8c, #61de8c)`},
    Scrim                  : { key: `--md-sys-color-scrim`,                      value: `light-dark(#000000, #000000)`},
    Secondary              : { key: `--md-sys-color-secondary`,                  value: `light-dark(#3c6847, #a2d2ab)`},
    SecondaryContainer     : { key: `--md-sys-color-secondary-container`,        value: `light-dark(#bbecc3, #295436)`},
    SecondaryDim           : { key: `--md-sys-color-secondary-dim`,              value: `light-dark(#305b3c, #bdeec5)`},
    SecondaryFixed         : { key: `--md-sys-color-secondary-fixed`,            value: `light-dark(#bdeec5, #bdeec5)`},
    SecondaryFixedDim      : { key: `--md-sys-color-secondary-fixed-dim`,        value: `light-dark(#a2d2ab, #a2d2ab)`},
    Shadow                 : { key: `--md-sys-color-shadow`,                     value: `light-dark(#000000, #000000)`},
    Surface                : { key: `--md-sys-color-surface`,                    value: `light-dark(#f4fbf1, #0e150f)`},
    SurfaceBright          : { key: `--md-sys-color-surface-bright`,             value: `light-dark(#f4fbf1, #343b34)`},
    SurfaceContainer       : { key: `--md-sys-color-surface-container`,          value: `light-dark(#e9f0e6, #1b211b)`},
    SurfaceContainerHigh   : { key: `--md-sys-color-surface-container-high`,     value: `light-dark(#e3eae1, #252c25)`},
    SurfaceContainerHighest: { key: `--md-sys-color-surface-container-highest`,  value: `light-dark(#dde4db, #303630)`},
    SurfaceContainerLow    : { key: `--md-sys-color-surface-container-low`,      value: `light-dark(#eff6ec, #171d17)`},
    SurfaceContainerLowest : { key: `--md-sys-color-surface-container-lowest`,   value: `light-dark(#ffffff, #09100a)`},
    SurfaceDim             : { key: `--md-sys-color-surface-dim`,                value: `light-dark(#d5dcd3, #0e150f)`},
    SurfaceTint            : { key: `--md-sys-color-surface-tint`,               value: `light-dark(#006d38, #61de8c)`},
    SurfaceVariant         : { key: `--md-sys-color-surface-variant`,            value: `light-dark(#d8e6d7, #3d4a3f)`},
    Tertiary               : { key: `--md-sys-color-tertiary`,                   value: `light-dark(#8f4d2a, #ffcfba)`},
    TertiaryContainer      : { key: `--md-sys-color-tertiary-container`,         value: `light-dark(#ffa97f, #ffa97f)`},
    TertiaryDim            : { key: `--md-sys-color-tertiary-dim`,               value: `light-dark(#804120, #fda77d)`},
    TertiaryFixed          : { key: `--md-sys-color-tertiary-fixed`,             value: `light-dark(#ffdbcc, #ffdbcc)`},
    TertiaryFixedDim       : { key: `--md-sys-color-tertiary-fixed-dim`,         value: `light-dark(#ffb693, #ffb693)`},
} as const satisfies Record<SemanticColorNames, { key: string, value: string }>
type DefaultColorContractValues = typeof DefaultColorContract[keyof typeof DefaultColorContract]['value']

// type SemanticColorContract<K extends string = string, V = string> = { key: K, value: V }
export type SemanticColorContract = {
  key: string;
  value: string;
};
type MergeContracts<
  Base extends Record<string, SemanticColorContract>,
  Override extends Partial<Record<string, SemanticColorContract>>
> = {
  [K in keyof Base]: K extends keyof Override
    ? Override[K] extends SemanticColorContract
      ? Override[K]
      : Base[K]
    : Base[K];
};

type ToColorContract<T extends Record<string, SemanticColorContract>> = {
  [K in keyof T]: T[K] extends { key: infer K2 extends string; value: infer V2 extends string }
    ? _Color<K2, V2>
    : never;
};

/**
 * @example
 * Useage:
 * ```ts
 * const YourAppColor = Color.From({
 *     // Optionally, you can override the default color contract by providing a partial contract object to the `From` method.
 *     Primary: { key: `--your-app-color-primary`, value: `#ff0000` },
 *     Secondary: { key: `--your-app-color-secondary`, value: `#00ff00` },
 * })
 *
 * console.log(YourAppColor.Primary) // #ff0000
 * console.log(YourAppColor.Secondary) // #00ff00
 * ```
 */
export class Color<
  CONTRACT extends Record<SemanticColorNames, _Color<any, any>>
> {

    /**
     * {
     *     OnPrimary: _Color({ key: `--md-sys-color-on-primary`, value: `light-dark(#ffffff, #00391a)` }),
     *     ...
     * }
     */
    private readonly contract: CONTRACT

    private constructor(contract: CONTRACT) {
        this.contract = contract
    }
    public static From<
        C extends Partial<Record<SemanticColorNames, SemanticColorContract>>
    >(
        contract: C = {} as C
    ): Color<ToColorContract<MergeContracts<typeof DefaultColorContract, C>>> {
        const raw = {
        ...DefaultColorContract,
        ...contract
        } as const;

        const colors = Object.fromEntries(
        Object.entries(raw).map(([property, value]) => [
            property,
            new _Color(value.key, value.value)
        ])
        ) as unknown as ToColorContract<MergeContracts<typeof DefaultColorContract, C>>;

        return new Color(colors);
    }

    public get PrimaryKeyColor() { return this.contract.PrimaryKeyColor }
    public get SecondaryKeyColor() { return this.contract.SecondaryKeyColor }
    public get TertiaryKeyColor() { return this.contract.TertiaryKeyColor }
    public get ErrorKeyColor() { return this.contract.ErrorKeyColor }
    public get NeutralKeyColor() { return this.contract.NeutralKeyColor }
    public get NeutralVariantKeyColor() { return this.contract.NeutralVariantKeyColor }
    public get Background() { return this.contract.Background }
    public get Error() { return this.contract.Error }
    public get ErrorContainer() { return this.contract.ErrorContainer }
    public get ErrorDim() { return this.contract.ErrorDim }
    public get InverseOnSurface() { return this.contract.InverseOnSurface }
    public get InversePrimary() { return this.contract.InversePrimary }
    public get InverseSurface() { return this.contract.InverseSurface }
    public get OnBackground() { return this.contract.OnBackground }
    public get OnError() { return this.contract.OnError }
    public get OnErrorContainer() { return this.contract.OnErrorContainer }
    public get OnPrimary() { return this.contract.OnPrimary }
    public get OnPrimaryContainer() { return this.contract.OnPrimaryContainer }
    public get OnPrimaryFixed() { return this.contract.OnPrimaryFixed }
    public get OnPrimaryFixedVariant() { return this.contract.OnPrimaryFixedVariant }
    public get OnSecondary() { return this.contract.OnSecondary }
    public get OnSecondaryContainer() { return this.contract.OnSecondaryContainer }
    public get OnSecondaryFixed() { return this.contract.OnSecondaryFixed }
    public get OnSecondaryFixedVariant() { return this.contract.OnSecondaryFixedVariant }
    public get OnSurface() { return this.contract.OnSurface }
    public get OnSurfaceVariant() { return this.contract.OnSurfaceVariant }
    public get OnTertiary() { return this.contract.OnTertiary }
    public get OnTertiaryContainer() { return this.contract.OnTertiaryContainer }
    public get OnTertiaryFixed() { return this.contract.OnTertiaryFixed }
    public get OnTertiaryFixedVariant() { return this.contract.OnTertiaryFixedVariant }
    public get Outline() { return this.contract.Outline }
    public get OutlineVariant() { return this.contract.OutlineVariant }
    public get Primary() { return this.contract.Primary }
    public get PrimaryContainer() { return this.contract.PrimaryContainer }
    public get PrimaryDim() { return this.contract.PrimaryDim }
    public get PrimaryFixed() { return this.contract.PrimaryFixed }
    public get PrimaryFixedDim() { return this.contract.PrimaryFixedDim }
    public get Scrim() { return this.contract.Scrim }
    public get Secondary() { return this.contract.Secondary }
    public get SecondaryContainer() { return this.contract.SecondaryContainer }
    public get SecondaryDim() { return this.contract.SecondaryDim }
    public get SecondaryFixed() { return this.contract.SecondaryFixed }
    public get SecondaryFixedDim() { return this.contract.SecondaryFixedDim }
    public get Shadow() { return this.contract.Shadow }
    public get Surface() { return this.contract.Surface }
    public get SurfaceBright() { return this.contract.SurfaceBright }
    public get SurfaceContainer() { return this.contract.SurfaceContainer }
    public get SurfaceContainerHigh() { return this.contract.SurfaceContainerHigh }
    public get SurfaceContainerHighest() { return this.contract.SurfaceContainerHighest }
    public get SurfaceContainerLow() { return this.contract.SurfaceContainerLow }
    public get SurfaceContainerLowest() { return this.contract.SurfaceContainerLowest }
    public get SurfaceDim() { return this.contract.SurfaceDim }
    public get SurfaceTint() { return this.contract.SurfaceTint }
    public get SurfaceVariant() { return this.contract.SurfaceVariant }
    public get Tertiary() { return this.contract.Tertiary }
    public get TertiaryContainer() { return this.contract.TertiaryContainer }
    public get TertiaryDim() { return this.contract.TertiaryDim }
    public get TertiaryFixed() { return this.contract.TertiaryFixed }
    public get TertiaryFixedDim() { return this.contract.TertiaryFixedDim }

    public readonly AllEnums = {
        PrimaryKeyColor        : this.PrimaryKeyColor,         SecondaryKeyColor      : this.SecondaryKeyColor,
        TertiaryKeyColor       : this.TertiaryKeyColor,        ErrorKeyColor          : this.ErrorKeyColor,
        NeutralKeyColor        : this.NeutralKeyColor,         NeutralVariantKeyColor : this.NeutralVariantKeyColor,
        Background             : this.Background,              Error                  : this.Error,
        ErrorContainer         : this.ErrorContainer,          ErrorDim               : this.ErrorDim,
        InverseOnSurface       : this.InverseOnSurface,        InversePrimary         : this.InversePrimary,
        InverseSurface         : this.InverseSurface,          OnBackground           : this.OnBackground,
        OnError                : this.OnError,                 OnErrorContainer       : this.OnErrorContainer,
        OnPrimary              : this.OnPrimary,               OnPrimaryContainer     : this.OnPrimaryContainer,
        OnPrimaryFixed         : this.OnPrimaryFixed,          OnPrimaryFixedVariant  : this.OnPrimaryFixedVariant,
        OnSecondary            : this.OnSecondary,             OnSecondaryContainer   : this.OnSecondaryContainer,
        OnSecondaryFixed       : this.OnSecondaryFixed,        OnSecondaryFixedVariant: this.OnSecondaryFixedVariant,
        OnSurface              : this.OnSurface,               OnSurfaceVariant       : this.OnSurfaceVariant,
        OnTertiary             : this.OnTertiary,              OnTertiaryContainer    : this.OnTertiaryContainer,
        OnTertiaryFixed        : this.OnTertiaryFixed,         OnTertiaryFixedVariant : this.OnTertiaryFixedVariant,
        Outline                : this.Outline,                 OutlineVariant         : this.OutlineVariant,
        Primary                : this.Primary,                 PrimaryContainer       : this.PrimaryContainer,
        PrimaryDim             : this.PrimaryDim,              PrimaryFixed           : this.PrimaryFixed,
        PrimaryFixedDim        : this.PrimaryFixedDim,         Scrim                  : this.Scrim,
        Secondary              : this.Secondary,               SecondaryContainer     : this.SecondaryContainer,
        SecondaryDim           : this.SecondaryDim,            SecondaryFixed         : this.SecondaryFixed,
        SecondaryFixedDim      : this.SecondaryFixedDim,       Shadow                 : this.Shadow,
        Surface                : this.Surface,                 SurfaceBright          : this.SurfaceBright,
        SurfaceContainer       : this.SurfaceContainer,        SurfaceContainerHigh   : this.SurfaceContainerHigh,
        SurfaceContainerHighest: this.SurfaceContainerHighest, SurfaceContainerLow    : this.SurfaceContainerLow,
        SurfaceContainerLowest : this.SurfaceContainerLowest,  SurfaceDim             : this.SurfaceDim,
        SurfaceTint            : this.SurfaceTint,             SurfaceVariant         : this.SurfaceVariant,
        Tertiary               : this.Tertiary,                TertiaryContainer      : this.TertiaryContainer,
        TertiaryDim            : this.TertiaryDim,             TertiaryFixed          : this.TertiaryFixed,
        TertiaryFixedDim       : this.TertiaryFixedDim,
    } as const


}

const a = Color.From({PrimaryKeyColor:{key: 'a', value: 'b'}})

// Expect type of a.OnTertiaryFixedVariant is _Color<'a', 'b'>
a.OnTertiaryFixedVariant
