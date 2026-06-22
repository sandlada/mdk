import { DefaultColorContract } from '../consts/default-color-contract.const';
import type { SemanticColorContract } from '../interfaces/semantic-color-contract.interface';
import type { SemanticColorNames } from '../interfaces/semantic-color-names.interface';
import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

class _Color<K extends string, V extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`, `var(${K}, ${V})`> {

    public readonly Key: K
    public readonly Value: V

    public toJSON() { return { Key: this.Key, Value: this.Value } }
    public toString() { return this.Value }

    public ToCSSDeclaration(): `${K}: ${V}`
    public ToCSSDeclaration(options: { Semicolon: true }): `${K}: ${V};`
    public ToCSSDeclaration(options?: { Semicolon?: boolean }): `${K}: ${V}${';' | ''}`
    public ToCSSDeclaration({ Semicolon = false }: { Semicolon?: boolean } = {}): `${K}: ${V}${';' | ''}` {
        return `${this.Key}: ${this.Value}${Semicolon ? ';' : ''}`
    }

    public ToCSSVariable(): `var(${K}, ${V})`
    public ToCSSVariable(): `var(${K}, ${V})` {
        return `var(${this.Key}, ${this.Value})`
    }

    public constructor(Key: K, Value: V) {
        this.Key = Key
        this.Value = Value
    }

}

type MergeContracts<
    Base extends Record<SemanticColorNames, SemanticColorContract>,
    Override extends Partial<Record<SemanticColorNames, SemanticColorContract>>
> = { [K in keyof Base]: K extends keyof Override ? Override[K] extends SemanticColorContract ? Override[K] : Base[K] : Base[K] }

type ToColorContract<T extends Record<SemanticColorNames, SemanticColorContract>> = { [K in keyof T]: T[K] extends {
    readonly Key: infer K2 extends string;
    readonly Value: infer V2 extends string
} ? _Color<K2, V2> : never }

/**
 * @example
 * Useage:
 * ```ts
 * const YourAppColor = Color.From({
 *     // Optionally, you can override the default color contract by providing a partial contract object to the `From` method.
 *     Primary: { Key: `--hum-hum`, Value: `abcdefgHumHumHum` },
 * })
 *
 * console.log(YourAppColor.Primary.Value) // abcdefgHumHumHum
 * console.log(YourAppColor.Primary.Key) // --hum-hum
 * ```
 */
export class Color<
    CONTRACT extends Record<SemanticColorNames, _Color<string, string>>
> {

    /**
     * {
     *     OnPrimary: _Color({ Key: `--md-sys-color-on-primary`, Value: `light-dark(#ffffff, #00391a)` }),
     *     ...
     * }
     */
    private readonly contract: CONTRACT

    private constructor(contract: CONTRACT) {
        this.contract = contract
    }
    public static From<
        const C extends Partial<Record<SemanticColorNames, SemanticColorContract>>
    >(
        contract: C = {} as C
    ): Color<ToColorContract<MergeContracts<typeof DefaultColorContract, C>>> {
        const raw = {
            ...DefaultColorContract,
            ...contract
        } as const

        const colors = Object.fromEntries(
            Object.entries(raw).map(([property, Value]) => [
                property,
                new _Color(Value.Key, Value.Value)
            ])
        ) as unknown as ToColorContract<MergeContracts<typeof DefaultColorContract, C>>

        return new Color(colors)
    }

    public get PrimaryKeyColor()        : CONTRACT['PrimaryKeyColor'] { return this.contract.PrimaryKeyColor }
    public get SecondaryKeyColor()      : CONTRACT['SecondaryKeyColor'] { return this.contract.SecondaryKeyColor }
    public get TertiaryKeyColor()       : CONTRACT['TertiaryKeyColor'] { return this.contract.TertiaryKeyColor }
    public get ErrorKeyColor()          : CONTRACT['ErrorKeyColor'] { return this.contract.ErrorKeyColor }
    public get NeutralKeyColor()        : CONTRACT['NeutralKeyColor'] { return this.contract.NeutralKeyColor }
    public get NeutralVariantKeyColor() : CONTRACT['NeutralVariantKeyColor'] { return this.contract.NeutralVariantKeyColor }
    public get Background()             : CONTRACT['Background'] { return this.contract.Background }
    public get Error()                  : CONTRACT['Error'] { return this.contract.Error }
    public get ErrorContainer()         : CONTRACT['ErrorContainer'] { return this.contract.ErrorContainer }
    public get ErrorDim()               : CONTRACT['ErrorDim'] { return this.contract.ErrorDim }
    public get InverseOnSurface()       : CONTRACT['InverseOnSurface'] { return this.contract.InverseOnSurface }
    public get InversePrimary()         : CONTRACT['InversePrimary'] { return this.contract.InversePrimary }
    public get InverseSurface()         : CONTRACT['InverseSurface'] { return this.contract.InverseSurface }
    public get OnBackground()           : CONTRACT['OnBackground'] { return this.contract.OnBackground }
    public get OnError()                : CONTRACT['OnError'] { return this.contract.OnError }
    public get OnErrorContainer()       : CONTRACT['OnErrorContainer'] { return this.contract.OnErrorContainer }
    public get OnPrimary()              : CONTRACT['OnPrimary'] { return this.contract.OnPrimary }
    public get OnPrimaryContainer()     : CONTRACT['OnPrimaryContainer'] { return this.contract.OnPrimaryContainer }
    public get OnPrimaryFixed()         : CONTRACT['OnPrimaryFixed'] { return this.contract.OnPrimaryFixed }
    public get OnPrimaryFixedVariant()  : CONTRACT['OnPrimaryFixedVariant'] { return this.contract.OnPrimaryFixedVariant }
    public get OnSecondary()            : CONTRACT['OnSecondary'] { return this.contract.OnSecondary }
    public get OnSecondaryContainer()   : CONTRACT['OnSecondaryContainer'] { return this.contract.OnSecondaryContainer }
    public get OnSecondaryFixed()       : CONTRACT['OnSecondaryFixed'] { return this.contract.OnSecondaryFixed }
    public get OnSecondaryFixedVariant(): CONTRACT['OnSecondaryFixedVariant'] { return this.contract.OnSecondaryFixedVariant }
    public get OnSurface()              : CONTRACT['OnSurface'] { return this.contract.OnSurface }
    public get OnSurfaceVariant()       : CONTRACT['OnSurfaceVariant'] { return this.contract.OnSurfaceVariant }
    public get OnTertiary()             : CONTRACT['OnTertiary'] { return this.contract.OnTertiary }
    public get OnTertiaryContainer()    : CONTRACT['OnTertiaryContainer'] { return this.contract.OnTertiaryContainer }
    public get OnTertiaryFixed()        : CONTRACT['OnTertiaryFixed'] { return this.contract.OnTertiaryFixed }
    public get OnTertiaryFixedVariant() : CONTRACT['OnTertiaryFixedVariant'] { return this.contract.OnTertiaryFixedVariant }
    public get Outline()                : CONTRACT['Outline'] { return this.contract.Outline }
    public get OutlineVariant()         : CONTRACT['OutlineVariant'] { return this.contract.OutlineVariant }
    public get Primary()                : CONTRACT['Primary'] { return this.contract.Primary }
    public get PrimaryContainer()       : CONTRACT['PrimaryContainer'] { return this.contract.PrimaryContainer }
    public get PrimaryDim()             : CONTRACT['PrimaryDim'] { return this.contract.PrimaryDim }
    public get PrimaryFixed()           : CONTRACT['PrimaryFixed'] { return this.contract.PrimaryFixed }
    public get PrimaryFixedDim()        : CONTRACT['PrimaryFixedDim'] { return this.contract.PrimaryFixedDim }
    public get Scrim()                  : CONTRACT['Scrim'] { return this.contract.Scrim }
    public get Secondary()              : CONTRACT['Secondary'] { return this.contract.Secondary }
    public get SecondaryContainer()     : CONTRACT['SecondaryContainer'] { return this.contract.SecondaryContainer }
    public get SecondaryDim()           : CONTRACT['SecondaryDim'] { return this.contract.SecondaryDim }
    public get SecondaryFixed()         : CONTRACT['SecondaryFixed'] { return this.contract.SecondaryFixed }
    public get SecondaryFixedDim()      : CONTRACT['SecondaryFixedDim'] { return this.contract.SecondaryFixedDim }
    public get Shadow()                 : CONTRACT['Shadow'] { return this.contract.Shadow }
    public get Surface()                : CONTRACT['Surface'] { return this.contract.Surface }
    public get SurfaceBright()          : CONTRACT['SurfaceBright'] { return this.contract.SurfaceBright }
    public get SurfaceContainer()       : CONTRACT['SurfaceContainer'] { return this.contract.SurfaceContainer }
    public get SurfaceContainerHigh()   : CONTRACT['SurfaceContainerHigh'] { return this.contract.SurfaceContainerHigh }
    public get SurfaceContainerHighest(): CONTRACT['SurfaceContainerHighest'] { return this.contract.SurfaceContainerHighest }
    public get SurfaceContainerLow()    : CONTRACT['SurfaceContainerLow'] { return this.contract.SurfaceContainerLow }
    public get SurfaceContainerLowest() : CONTRACT['SurfaceContainerLowest'] { return this.contract.SurfaceContainerLowest }
    public get SurfaceDim()             : CONTRACT['SurfaceDim'] { return this.contract.SurfaceDim }
    public get SurfaceTint()            : CONTRACT['SurfaceTint'] { return this.contract.SurfaceTint }
    public get SurfaceVariant()         : CONTRACT['SurfaceVariant'] { return this.contract.SurfaceVariant }
    public get Tertiary()               : CONTRACT['Tertiary'] { return this.contract.Tertiary }
    public get TertiaryContainer()      : CONTRACT['TertiaryContainer'] { return this.contract.TertiaryContainer }
    public get TertiaryDim()            : CONTRACT['TertiaryDim'] { return this.contract.TertiaryDim }
    public get TertiaryFixed()          : CONTRACT['TertiaryFixed'] { return this.contract.TertiaryFixed }
    public get TertiaryFixedDim()       : CONTRACT['TertiaryFixedDim'] { return this.contract.TertiaryFixedDim }


    public get AllEnums() {
        return {
            PrimaryKeyColor: this.PrimaryKeyColor, SecondaryKeyColor: this.SecondaryKeyColor,
            TertiaryKeyColor: this.TertiaryKeyColor, ErrorKeyColor: this.ErrorKeyColor,
            NeutralKeyColor: this.NeutralKeyColor, NeutralVariantKeyColor: this.NeutralVariantKeyColor,
            Background: this.Background, Error: this.Error,
            ErrorContainer: this.ErrorContainer, ErrorDim: this.ErrorDim,
            InverseOnSurface: this.InverseOnSurface, InversePrimary: this.InversePrimary,
            InverseSurface: this.InverseSurface, OnBackground: this.OnBackground,
            OnError: this.OnError, OnErrorContainer: this.OnErrorContainer,
            OnPrimary: this.OnPrimary, OnPrimaryContainer: this.OnPrimaryContainer,
            OnPrimaryFixed: this.OnPrimaryFixed, OnPrimaryFixedVariant: this.OnPrimaryFixedVariant,
            OnSecondary: this.OnSecondary, OnSecondaryContainer: this.OnSecondaryContainer,
            OnSecondaryFixed: this.OnSecondaryFixed, OnSecondaryFixedVariant: this.OnSecondaryFixedVariant,
            OnSurface: this.OnSurface, OnSurfaceVariant: this.OnSurfaceVariant,
            OnTertiary: this.OnTertiary, OnTertiaryContainer: this.OnTertiaryContainer,
            OnTertiaryFixed: this.OnTertiaryFixed, OnTertiaryFixedVariant: this.OnTertiaryFixedVariant,
            Outline: this.Outline, OutlineVariant: this.OutlineVariant,
            Primary: this.Primary, PrimaryContainer: this.PrimaryContainer,
            PrimaryDim: this.PrimaryDim, PrimaryFixed: this.PrimaryFixed,
            PrimaryFixedDim: this.PrimaryFixedDim, Scrim: this.Scrim,
            Secondary: this.Secondary, SecondaryContainer: this.SecondaryContainer,
            SecondaryDim: this.SecondaryDim, SecondaryFixed: this.SecondaryFixed,
            SecondaryFixedDim: this.SecondaryFixedDim, Shadow: this.Shadow,
            Surface: this.Surface, SurfaceBright: this.SurfaceBright,
            SurfaceContainer: this.SurfaceContainer, SurfaceContainerHigh: this.SurfaceContainerHigh,
            SurfaceContainerHighest: this.SurfaceContainerHighest, SurfaceContainerLow: this.SurfaceContainerLow,
            SurfaceContainerLowest: this.SurfaceContainerLowest, SurfaceDim: this.SurfaceDim,
            SurfaceTint: this.SurfaceTint, SurfaceVariant: this.SurfaceVariant,
            Tertiary: this.Tertiary, TertiaryContainer: this.TertiaryContainer,
            TertiaryDim: this.TertiaryDim, TertiaryFixed: this.TertiaryFixed,
            TertiaryFixedDim: this.TertiaryFixedDim,
        } as const
    }


}
