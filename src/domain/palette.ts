import { DefaultPaletteContract } from '../consts/default-palette-contract.const'
import type { PaletteContract } from '../interfaces/palette-contract.interface'
import type { PaletteNames } from '../interfaces/palette-names.interface'
import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

class _Palette<K extends string, V extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`, `var(${K}, ${V})`> {
    public readonly Key  : K
    public readonly Value: V

    public toJSON() { return ({ Key: this.Key, Value: this.Value }) }
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
    public toString() { return this.ToCSSDeclaration() }

    public constructor(Key: K, Value: V) {
        this.Key   = Key
        this.Value = Value
    }
}

type MergeContracts<
    Base extends Record<PaletteNames, PaletteContract>,
    Override extends Partial<Record<PaletteNames, PaletteContract>>
> = { [K in keyof Base]: K extends keyof Override ? Override[K] extends PaletteContract ? Override[K] : Base[K] : Base[K] }

type ToPaletteContract<T extends Record<PaletteNames, PaletteContract>> = { [K in keyof T]: T[K] extends {
    readonly Key: infer K2 extends string;
    readonly Value: infer V2 extends string
} ? _Palette<K2, V2> : never }

/**
 * @example
 * Useage:
 * ```ts
 * const YourAppPalette = Palette.From({
 *     // Optionally, you can override the default palette contract by providing a partial contract object to the `From` method.
 *     Primary40: { Key: `--custom-primary-40`, Value: `#abcdef` },
 * })
 *
 * console.log(YourAppPalette.Primary40.Value) // #abcdef
 * console.log(YourAppPalette.Primary40.Key) // --custom-primary-40
 * ```
 */
export class Palette<
    CONTRACT extends Record<PaletteNames, _Palette<string, string>>
> {

    private readonly contract: CONTRACT

    private constructor(contract: CONTRACT) {
        this.contract = contract
    }

    public static From<
        const C extends Partial<Record<PaletteNames, PaletteContract>>
    >(
        contract: C = {} as C
    ): Palette<ToPaletteContract<MergeContracts<typeof DefaultPaletteContract, C>>> {
        const raw = {
            ...DefaultPaletteContract,
            ...contract
        } as const

        const palettes = Object.fromEntries(
            Object.entries(raw).map(([property, Value]) => [
                property,
                new _Palette(Value.Key, Value.Value)
            ])
        ) as unknown as ToPaletteContract<MergeContracts<typeof DefaultPaletteContract, C>>

        return new Palette(palettes)
    }


    public get Primary0(): CONTRACT['Primary0'] { return this.contract.Primary0 }
    public get Primary1(): CONTRACT['Primary1'] { return this.contract.Primary1 }
    public get Primary2(): CONTRACT['Primary2'] { return this.contract.Primary2 }
    public get Primary3(): CONTRACT['Primary3'] { return this.contract.Primary3 }
    public get Primary4(): CONTRACT['Primary4'] { return this.contract.Primary4 }
    public get Primary5(): CONTRACT['Primary5'] { return this.contract.Primary5 }
    public get Primary6(): CONTRACT['Primary6'] { return this.contract.Primary6 }
    public get Primary7(): CONTRACT['Primary7'] { return this.contract.Primary7 }
    public get Primary8(): CONTRACT['Primary8'] { return this.contract.Primary8 }
    public get Primary9(): CONTRACT['Primary9'] { return this.contract.Primary9 }
    public get Primary10(): CONTRACT['Primary10'] { return this.contract.Primary10 }
    public get Primary11(): CONTRACT['Primary11'] { return this.contract.Primary11 }
    public get Primary12(): CONTRACT['Primary12'] { return this.contract.Primary12 }
    public get Primary13(): CONTRACT['Primary13'] { return this.contract.Primary13 }
    public get Primary14(): CONTRACT['Primary14'] { return this.contract.Primary14 }
    public get Primary15(): CONTRACT['Primary15'] { return this.contract.Primary15 }
    public get Primary16(): CONTRACT['Primary16'] { return this.contract.Primary16 }
    public get Primary17(): CONTRACT['Primary17'] { return this.contract.Primary17 }
    public get Primary18(): CONTRACT['Primary18'] { return this.contract.Primary18 }
    public get Primary19(): CONTRACT['Primary19'] { return this.contract.Primary19 }
    public get Primary20(): CONTRACT['Primary20'] { return this.contract.Primary20 }
    public get Primary21(): CONTRACT['Primary21'] { return this.contract.Primary21 }
    public get Primary22(): CONTRACT['Primary22'] { return this.contract.Primary22 }
    public get Primary23(): CONTRACT['Primary23'] { return this.contract.Primary23 }
    public get Primary24(): CONTRACT['Primary24'] { return this.contract.Primary24 }
    public get Primary25(): CONTRACT['Primary25'] { return this.contract.Primary25 }
    public get Primary26(): CONTRACT['Primary26'] { return this.contract.Primary26 }
    public get Primary27(): CONTRACT['Primary27'] { return this.contract.Primary27 }
    public get Primary28(): CONTRACT['Primary28'] { return this.contract.Primary28 }
    public get Primary29(): CONTRACT['Primary29'] { return this.contract.Primary29 }
    public get Primary30(): CONTRACT['Primary30'] { return this.contract.Primary30 }
    public get Primary31(): CONTRACT['Primary31'] { return this.contract.Primary31 }
    public get Primary32(): CONTRACT['Primary32'] { return this.contract.Primary32 }
    public get Primary33(): CONTRACT['Primary33'] { return this.contract.Primary33 }
    public get Primary34(): CONTRACT['Primary34'] { return this.contract.Primary34 }
    public get Primary35(): CONTRACT['Primary35'] { return this.contract.Primary35 }
    public get Primary36(): CONTRACT['Primary36'] { return this.contract.Primary36 }
    public get Primary37(): CONTRACT['Primary37'] { return this.contract.Primary37 }
    public get Primary38(): CONTRACT['Primary38'] { return this.contract.Primary38 }
    public get Primary39(): CONTRACT['Primary39'] { return this.contract.Primary39 }
    public get Primary40(): CONTRACT['Primary40'] { return this.contract.Primary40 }
    public get Primary41(): CONTRACT['Primary41'] { return this.contract.Primary41 }
    public get Primary42(): CONTRACT['Primary42'] { return this.contract.Primary42 }
    public get Primary43(): CONTRACT['Primary43'] { return this.contract.Primary43 }
    public get Primary44(): CONTRACT['Primary44'] { return this.contract.Primary44 }
    public get Primary45(): CONTRACT['Primary45'] { return this.contract.Primary45 }
    public get Primary46(): CONTRACT['Primary46'] { return this.contract.Primary46 }
    public get Primary47(): CONTRACT['Primary47'] { return this.contract.Primary47 }
    public get Primary48(): CONTRACT['Primary48'] { return this.contract.Primary48 }
    public get Primary49(): CONTRACT['Primary49'] { return this.contract.Primary49 }
    public get Primary50(): CONTRACT['Primary50'] { return this.contract.Primary50 }
    public get Primary51(): CONTRACT['Primary51'] { return this.contract.Primary51 }
    public get Primary52(): CONTRACT['Primary52'] { return this.contract.Primary52 }
    public get Primary53(): CONTRACT['Primary53'] { return this.contract.Primary53 }
    public get Primary54(): CONTRACT['Primary54'] { return this.contract.Primary54 }
    public get Primary55(): CONTRACT['Primary55'] { return this.contract.Primary55 }
    public get Primary56(): CONTRACT['Primary56'] { return this.contract.Primary56 }
    public get Primary57(): CONTRACT['Primary57'] { return this.contract.Primary57 }
    public get Primary58(): CONTRACT['Primary58'] { return this.contract.Primary58 }
    public get Primary59(): CONTRACT['Primary59'] { return this.contract.Primary59 }
    public get Primary60(): CONTRACT['Primary60'] { return this.contract.Primary60 }
    public get Primary61(): CONTRACT['Primary61'] { return this.contract.Primary61 }
    public get Primary62(): CONTRACT['Primary62'] { return this.contract.Primary62 }
    public get Primary63(): CONTRACT['Primary63'] { return this.contract.Primary63 }
    public get Primary64(): CONTRACT['Primary64'] { return this.contract.Primary64 }
    public get Primary65(): CONTRACT['Primary65'] { return this.contract.Primary65 }
    public get Primary66(): CONTRACT['Primary66'] { return this.contract.Primary66 }
    public get Primary67(): CONTRACT['Primary67'] { return this.contract.Primary67 }
    public get Primary68(): CONTRACT['Primary68'] { return this.contract.Primary68 }
    public get Primary69(): CONTRACT['Primary69'] { return this.contract.Primary69 }
    public get Primary70(): CONTRACT['Primary70'] { return this.contract.Primary70 }
    public get Primary71(): CONTRACT['Primary71'] { return this.contract.Primary71 }
    public get Primary72(): CONTRACT['Primary72'] { return this.contract.Primary72 }
    public get Primary73(): CONTRACT['Primary73'] { return this.contract.Primary73 }
    public get Primary74(): CONTRACT['Primary74'] { return this.contract.Primary74 }
    public get Primary75(): CONTRACT['Primary75'] { return this.contract.Primary75 }
    public get Primary76(): CONTRACT['Primary76'] { return this.contract.Primary76 }
    public get Primary77(): CONTRACT['Primary77'] { return this.contract.Primary77 }
    public get Primary78(): CONTRACT['Primary78'] { return this.contract.Primary78 }
    public get Primary79(): CONTRACT['Primary79'] { return this.contract.Primary79 }
    public get Primary80(): CONTRACT['Primary80'] { return this.contract.Primary80 }
    public get Primary81(): CONTRACT['Primary81'] { return this.contract.Primary81 }
    public get Primary82(): CONTRACT['Primary82'] { return this.contract.Primary82 }
    public get Primary83(): CONTRACT['Primary83'] { return this.contract.Primary83 }
    public get Primary84(): CONTRACT['Primary84'] { return this.contract.Primary84 }
    public get Primary85(): CONTRACT['Primary85'] { return this.contract.Primary85 }
    public get Primary86(): CONTRACT['Primary86'] { return this.contract.Primary86 }
    public get Primary87(): CONTRACT['Primary87'] { return this.contract.Primary87 }
    public get Primary88(): CONTRACT['Primary88'] { return this.contract.Primary88 }
    public get Primary89(): CONTRACT['Primary89'] { return this.contract.Primary89 }
    public get Primary90(): CONTRACT['Primary90'] { return this.contract.Primary90 }
    public get Primary91(): CONTRACT['Primary91'] { return this.contract.Primary91 }
    public get Primary92(): CONTRACT['Primary92'] { return this.contract.Primary92 }
    public get Primary93(): CONTRACT['Primary93'] { return this.contract.Primary93 }
    public get Primary94(): CONTRACT['Primary94'] { return this.contract.Primary94 }
    public get Primary95(): CONTRACT['Primary95'] { return this.contract.Primary95 }
    public get Primary96(): CONTRACT['Primary96'] { return this.contract.Primary96 }
    public get Primary97(): CONTRACT['Primary97'] { return this.contract.Primary97 }
    public get Primary98(): CONTRACT['Primary98'] { return this.contract.Primary98 }
    public get Primary99(): CONTRACT['Primary99'] { return this.contract.Primary99 }
    public get Primary100(): CONTRACT['Primary100'] { return this.contract.Primary100 }
    public get Secondary0(): CONTRACT['Secondary0'] { return this.contract.Secondary0 }
    public get Secondary1(): CONTRACT['Secondary1'] { return this.contract.Secondary1 }
    public get Secondary2(): CONTRACT['Secondary2'] { return this.contract.Secondary2 }
    public get Secondary3(): CONTRACT['Secondary3'] { return this.contract.Secondary3 }
    public get Secondary4(): CONTRACT['Secondary4'] { return this.contract.Secondary4 }
    public get Secondary5(): CONTRACT['Secondary5'] { return this.contract.Secondary5 }
    public get Secondary6(): CONTRACT['Secondary6'] { return this.contract.Secondary6 }
    public get Secondary7(): CONTRACT['Secondary7'] { return this.contract.Secondary7 }
    public get Secondary8(): CONTRACT['Secondary8'] { return this.contract.Secondary8 }
    public get Secondary9(): CONTRACT['Secondary9'] { return this.contract.Secondary9 }
    public get Secondary10(): CONTRACT['Secondary10'] { return this.contract.Secondary10 }
    public get Secondary11(): CONTRACT['Secondary11'] { return this.contract.Secondary11 }
    public get Secondary12(): CONTRACT['Secondary12'] { return this.contract.Secondary12 }
    public get Secondary13(): CONTRACT['Secondary13'] { return this.contract.Secondary13 }
    public get Secondary14(): CONTRACT['Secondary14'] { return this.contract.Secondary14 }
    public get Secondary15(): CONTRACT['Secondary15'] { return this.contract.Secondary15 }
    public get Secondary16(): CONTRACT['Secondary16'] { return this.contract.Secondary16 }
    public get Secondary17(): CONTRACT['Secondary17'] { return this.contract.Secondary17 }
    public get Secondary18(): CONTRACT['Secondary18'] { return this.contract.Secondary18 }
    public get Secondary19(): CONTRACT['Secondary19'] { return this.contract.Secondary19 }
    public get Secondary20(): CONTRACT['Secondary20'] { return this.contract.Secondary20 }
    public get Secondary21(): CONTRACT['Secondary21'] { return this.contract.Secondary21 }
    public get Secondary22(): CONTRACT['Secondary22'] { return this.contract.Secondary22 }
    public get Secondary23(): CONTRACT['Secondary23'] { return this.contract.Secondary23 }
    public get Secondary24(): CONTRACT['Secondary24'] { return this.contract.Secondary24 }
    public get Secondary25(): CONTRACT['Secondary25'] { return this.contract.Secondary25 }
    public get Secondary26(): CONTRACT['Secondary26'] { return this.contract.Secondary26 }
    public get Secondary27(): CONTRACT['Secondary27'] { return this.contract.Secondary27 }
    public get Secondary28(): CONTRACT['Secondary28'] { return this.contract.Secondary28 }
    public get Secondary29(): CONTRACT['Secondary29'] { return this.contract.Secondary29 }
    public get Secondary30(): CONTRACT['Secondary30'] { return this.contract.Secondary30 }
    public get Secondary31(): CONTRACT['Secondary31'] { return this.contract.Secondary31 }
    public get Secondary32(): CONTRACT['Secondary32'] { return this.contract.Secondary32 }
    public get Secondary33(): CONTRACT['Secondary33'] { return this.contract.Secondary33 }
    public get Secondary34(): CONTRACT['Secondary34'] { return this.contract.Secondary34 }
    public get Secondary35(): CONTRACT['Secondary35'] { return this.contract.Secondary35 }
    public get Secondary36(): CONTRACT['Secondary36'] { return this.contract.Secondary36 }
    public get Secondary37(): CONTRACT['Secondary37'] { return this.contract.Secondary37 }
    public get Secondary38(): CONTRACT['Secondary38'] { return this.contract.Secondary38 }
    public get Secondary39(): CONTRACT['Secondary39'] { return this.contract.Secondary39 }
    public get Secondary40(): CONTRACT['Secondary40'] { return this.contract.Secondary40 }
    public get Secondary41(): CONTRACT['Secondary41'] { return this.contract.Secondary41 }
    public get Secondary42(): CONTRACT['Secondary42'] { return this.contract.Secondary42 }
    public get Secondary43(): CONTRACT['Secondary43'] { return this.contract.Secondary43 }
    public get Secondary44(): CONTRACT['Secondary44'] { return this.contract.Secondary44 }
    public get Secondary45(): CONTRACT['Secondary45'] { return this.contract.Secondary45 }
    public get Secondary46(): CONTRACT['Secondary46'] { return this.contract.Secondary46 }
    public get Secondary47(): CONTRACT['Secondary47'] { return this.contract.Secondary47 }
    public get Secondary48(): CONTRACT['Secondary48'] { return this.contract.Secondary48 }
    public get Secondary49(): CONTRACT['Secondary49'] { return this.contract.Secondary49 }
    public get Secondary50(): CONTRACT['Secondary50'] { return this.contract.Secondary50 }
    public get Secondary51(): CONTRACT['Secondary51'] { return this.contract.Secondary51 }
    public get Secondary52(): CONTRACT['Secondary52'] { return this.contract.Secondary52 }
    public get Secondary53(): CONTRACT['Secondary53'] { return this.contract.Secondary53 }
    public get Secondary54(): CONTRACT['Secondary54'] { return this.contract.Secondary54 }
    public get Secondary55(): CONTRACT['Secondary55'] { return this.contract.Secondary55 }
    public get Secondary56(): CONTRACT['Secondary56'] { return this.contract.Secondary56 }
    public get Secondary57(): CONTRACT['Secondary57'] { return this.contract.Secondary57 }
    public get Secondary58(): CONTRACT['Secondary58'] { return this.contract.Secondary58 }
    public get Secondary59(): CONTRACT['Secondary59'] { return this.contract.Secondary59 }
    public get Secondary60(): CONTRACT['Secondary60'] { return this.contract.Secondary60 }
    public get Secondary61(): CONTRACT['Secondary61'] { return this.contract.Secondary61 }
    public get Secondary62(): CONTRACT['Secondary62'] { return this.contract.Secondary62 }
    public get Secondary63(): CONTRACT['Secondary63'] { return this.contract.Secondary63 }
    public get Secondary64(): CONTRACT['Secondary64'] { return this.contract.Secondary64 }
    public get Secondary65(): CONTRACT['Secondary65'] { return this.contract.Secondary65 }
    public get Secondary66(): CONTRACT['Secondary66'] { return this.contract.Secondary66 }
    public get Secondary67(): CONTRACT['Secondary67'] { return this.contract.Secondary67 }
    public get Secondary68(): CONTRACT['Secondary68'] { return this.contract.Secondary68 }
    public get Secondary69(): CONTRACT['Secondary69'] { return this.contract.Secondary69 }
    public get Secondary70(): CONTRACT['Secondary70'] { return this.contract.Secondary70 }
    public get Secondary71(): CONTRACT['Secondary71'] { return this.contract.Secondary71 }
    public get Secondary72(): CONTRACT['Secondary72'] { return this.contract.Secondary72 }
    public get Secondary73(): CONTRACT['Secondary73'] { return this.contract.Secondary73 }
    public get Secondary74(): CONTRACT['Secondary74'] { return this.contract.Secondary74 }
    public get Secondary75(): CONTRACT['Secondary75'] { return this.contract.Secondary75 }
    public get Secondary76(): CONTRACT['Secondary76'] { return this.contract.Secondary76 }
    public get Secondary77(): CONTRACT['Secondary77'] { return this.contract.Secondary77 }
    public get Secondary78(): CONTRACT['Secondary78'] { return this.contract.Secondary78 }
    public get Secondary79(): CONTRACT['Secondary79'] { return this.contract.Secondary79 }
    public get Secondary80(): CONTRACT['Secondary80'] { return this.contract.Secondary80 }
    public get Secondary81(): CONTRACT['Secondary81'] { return this.contract.Secondary81 }
    public get Secondary82(): CONTRACT['Secondary82'] { return this.contract.Secondary82 }
    public get Secondary83(): CONTRACT['Secondary83'] { return this.contract.Secondary83 }
    public get Secondary84(): CONTRACT['Secondary84'] { return this.contract.Secondary84 }
    public get Secondary85(): CONTRACT['Secondary85'] { return this.contract.Secondary85 }
    public get Secondary86(): CONTRACT['Secondary86'] { return this.contract.Secondary86 }
    public get Secondary87(): CONTRACT['Secondary87'] { return this.contract.Secondary87 }
    public get Secondary88(): CONTRACT['Secondary88'] { return this.contract.Secondary88 }
    public get Secondary89(): CONTRACT['Secondary89'] { return this.contract.Secondary89 }
    public get Secondary90(): CONTRACT['Secondary90'] { return this.contract.Secondary90 }
    public get Secondary91(): CONTRACT['Secondary91'] { return this.contract.Secondary91 }
    public get Secondary92(): CONTRACT['Secondary92'] { return this.contract.Secondary92 }
    public get Secondary93(): CONTRACT['Secondary93'] { return this.contract.Secondary93 }
    public get Secondary94(): CONTRACT['Secondary94'] { return this.contract.Secondary94 }
    public get Secondary95(): CONTRACT['Secondary95'] { return this.contract.Secondary95 }
    public get Secondary96(): CONTRACT['Secondary96'] { return this.contract.Secondary96 }
    public get Secondary97(): CONTRACT['Secondary97'] { return this.contract.Secondary97 }
    public get Secondary98(): CONTRACT['Secondary98'] { return this.contract.Secondary98 }
    public get Secondary99(): CONTRACT['Secondary99'] { return this.contract.Secondary99 }
    public get Secondary100(): CONTRACT['Secondary100'] { return this.contract.Secondary100 }
    public get Tertiary0(): CONTRACT['Tertiary0'] { return this.contract.Tertiary0 }
    public get Tertiary1(): CONTRACT['Tertiary1'] { return this.contract.Tertiary1 }
    public get Tertiary2(): CONTRACT['Tertiary2'] { return this.contract.Tertiary2 }
    public get Tertiary3(): CONTRACT['Tertiary3'] { return this.contract.Tertiary3 }
    public get Tertiary4(): CONTRACT['Tertiary4'] { return this.contract.Tertiary4 }
    public get Tertiary5(): CONTRACT['Tertiary5'] { return this.contract.Tertiary5 }
    public get Tertiary6(): CONTRACT['Tertiary6'] { return this.contract.Tertiary6 }
    public get Tertiary7(): CONTRACT['Tertiary7'] { return this.contract.Tertiary7 }
    public get Tertiary8(): CONTRACT['Tertiary8'] { return this.contract.Tertiary8 }
    public get Tertiary9(): CONTRACT['Tertiary9'] { return this.contract.Tertiary9 }
    public get Tertiary10(): CONTRACT['Tertiary10'] { return this.contract.Tertiary10 }
    public get Tertiary11(): CONTRACT['Tertiary11'] { return this.contract.Tertiary11 }
    public get Tertiary12(): CONTRACT['Tertiary12'] { return this.contract.Tertiary12 }
    public get Tertiary13(): CONTRACT['Tertiary13'] { return this.contract.Tertiary13 }
    public get Tertiary14(): CONTRACT['Tertiary14'] { return this.contract.Tertiary14 }
    public get Tertiary15(): CONTRACT['Tertiary15'] { return this.contract.Tertiary15 }
    public get Tertiary16(): CONTRACT['Tertiary16'] { return this.contract.Tertiary16 }
    public get Tertiary17(): CONTRACT['Tertiary17'] { return this.contract.Tertiary17 }
    public get Tertiary18(): CONTRACT['Tertiary18'] { return this.contract.Tertiary18 }
    public get Tertiary19(): CONTRACT['Tertiary19'] { return this.contract.Tertiary19 }
    public get Tertiary20(): CONTRACT['Tertiary20'] { return this.contract.Tertiary20 }
    public get Tertiary21(): CONTRACT['Tertiary21'] { return this.contract.Tertiary21 }
    public get Tertiary22(): CONTRACT['Tertiary22'] { return this.contract.Tertiary22 }
    public get Tertiary23(): CONTRACT['Tertiary23'] { return this.contract.Tertiary23 }
    public get Tertiary24(): CONTRACT['Tertiary24'] { return this.contract.Tertiary24 }
    public get Tertiary25(): CONTRACT['Tertiary25'] { return this.contract.Tertiary25 }
    public get Tertiary26(): CONTRACT['Tertiary26'] { return this.contract.Tertiary26 }
    public get Tertiary27(): CONTRACT['Tertiary27'] { return this.contract.Tertiary27 }
    public get Tertiary28(): CONTRACT['Tertiary28'] { return this.contract.Tertiary28 }
    public get Tertiary29(): CONTRACT['Tertiary29'] { return this.contract.Tertiary29 }
    public get Tertiary30(): CONTRACT['Tertiary30'] { return this.contract.Tertiary30 }
    public get Tertiary31(): CONTRACT['Tertiary31'] { return this.contract.Tertiary31 }
    public get Tertiary32(): CONTRACT['Tertiary32'] { return this.contract.Tertiary32 }
    public get Tertiary33(): CONTRACT['Tertiary33'] { return this.contract.Tertiary33 }
    public get Tertiary34(): CONTRACT['Tertiary34'] { return this.contract.Tertiary34 }
    public get Tertiary35(): CONTRACT['Tertiary35'] { return this.contract.Tertiary35 }
    public get Tertiary36(): CONTRACT['Tertiary36'] { return this.contract.Tertiary36 }
    public get Tertiary37(): CONTRACT['Tertiary37'] { return this.contract.Tertiary37 }
    public get Tertiary38(): CONTRACT['Tertiary38'] { return this.contract.Tertiary38 }
    public get Tertiary39(): CONTRACT['Tertiary39'] { return this.contract.Tertiary39 }
    public get Tertiary40(): CONTRACT['Tertiary40'] { return this.contract.Tertiary40 }
    public get Tertiary41(): CONTRACT['Tertiary41'] { return this.contract.Tertiary41 }
    public get Tertiary42(): CONTRACT['Tertiary42'] { return this.contract.Tertiary42 }
    public get Tertiary43(): CONTRACT['Tertiary43'] { return this.contract.Tertiary43 }
    public get Tertiary44(): CONTRACT['Tertiary44'] { return this.contract.Tertiary44 }
    public get Tertiary45(): CONTRACT['Tertiary45'] { return this.contract.Tertiary45 }
    public get Tertiary46(): CONTRACT['Tertiary46'] { return this.contract.Tertiary46 }
    public get Tertiary47(): CONTRACT['Tertiary47'] { return this.contract.Tertiary47 }
    public get Tertiary48(): CONTRACT['Tertiary48'] { return this.contract.Tertiary48 }
    public get Tertiary49(): CONTRACT['Tertiary49'] { return this.contract.Tertiary49 }
    public get Tertiary50(): CONTRACT['Tertiary50'] { return this.contract.Tertiary50 }
    public get Tertiary51(): CONTRACT['Tertiary51'] { return this.contract.Tertiary51 }
    public get Tertiary52(): CONTRACT['Tertiary52'] { return this.contract.Tertiary52 }
    public get Tertiary53(): CONTRACT['Tertiary53'] { return this.contract.Tertiary53 }
    public get Tertiary54(): CONTRACT['Tertiary54'] { return this.contract.Tertiary54 }
    public get Tertiary55(): CONTRACT['Tertiary55'] { return this.contract.Tertiary55 }
    public get Tertiary56(): CONTRACT['Tertiary56'] { return this.contract.Tertiary56 }
    public get Tertiary57(): CONTRACT['Tertiary57'] { return this.contract.Tertiary57 }
    public get Tertiary58(): CONTRACT['Tertiary58'] { return this.contract.Tertiary58 }
    public get Tertiary59(): CONTRACT['Tertiary59'] { return this.contract.Tertiary59 }
    public get Tertiary60(): CONTRACT['Tertiary60'] { return this.contract.Tertiary60 }
    public get Tertiary61(): CONTRACT['Tertiary61'] { return this.contract.Tertiary61 }
    public get Tertiary62(): CONTRACT['Tertiary62'] { return this.contract.Tertiary62 }
    public get Tertiary63(): CONTRACT['Tertiary63'] { return this.contract.Tertiary63 }
    public get Tertiary64(): CONTRACT['Tertiary64'] { return this.contract.Tertiary64 }
    public get Tertiary65(): CONTRACT['Tertiary65'] { return this.contract.Tertiary65 }
    public get Tertiary66(): CONTRACT['Tertiary66'] { return this.contract.Tertiary66 }
    public get Tertiary67(): CONTRACT['Tertiary67'] { return this.contract.Tertiary67 }
    public get Tertiary68(): CONTRACT['Tertiary68'] { return this.contract.Tertiary68 }
    public get Tertiary69(): CONTRACT['Tertiary69'] { return this.contract.Tertiary69 }
    public get Tertiary70(): CONTRACT['Tertiary70'] { return this.contract.Tertiary70 }
    public get Tertiary71(): CONTRACT['Tertiary71'] { return this.contract.Tertiary71 }
    public get Tertiary72(): CONTRACT['Tertiary72'] { return this.contract.Tertiary72 }
    public get Tertiary73(): CONTRACT['Tertiary73'] { return this.contract.Tertiary73 }
    public get Tertiary74(): CONTRACT['Tertiary74'] { return this.contract.Tertiary74 }
    public get Tertiary75(): CONTRACT['Tertiary75'] { return this.contract.Tertiary75 }
    public get Tertiary76(): CONTRACT['Tertiary76'] { return this.contract.Tertiary76 }
    public get Tertiary77(): CONTRACT['Tertiary77'] { return this.contract.Tertiary77 }
    public get Tertiary78(): CONTRACT['Tertiary78'] { return this.contract.Tertiary78 }
    public get Tertiary79(): CONTRACT['Tertiary79'] { return this.contract.Tertiary79 }
    public get Tertiary80(): CONTRACT['Tertiary80'] { return this.contract.Tertiary80 }
    public get Tertiary81(): CONTRACT['Tertiary81'] { return this.contract.Tertiary81 }
    public get Tertiary82(): CONTRACT['Tertiary82'] { return this.contract.Tertiary82 }
    public get Tertiary83(): CONTRACT['Tertiary83'] { return this.contract.Tertiary83 }
    public get Tertiary84(): CONTRACT['Tertiary84'] { return this.contract.Tertiary84 }
    public get Tertiary85(): CONTRACT['Tertiary85'] { return this.contract.Tertiary85 }
    public get Tertiary86(): CONTRACT['Tertiary86'] { return this.contract.Tertiary86 }
    public get Tertiary87(): CONTRACT['Tertiary87'] { return this.contract.Tertiary87 }
    public get Tertiary88(): CONTRACT['Tertiary88'] { return this.contract.Tertiary88 }
    public get Tertiary89(): CONTRACT['Tertiary89'] { return this.contract.Tertiary89 }
    public get Tertiary90(): CONTRACT['Tertiary90'] { return this.contract.Tertiary90 }
    public get Tertiary91(): CONTRACT['Tertiary91'] { return this.contract.Tertiary91 }
    public get Tertiary92(): CONTRACT['Tertiary92'] { return this.contract.Tertiary92 }
    public get Tertiary93(): CONTRACT['Tertiary93'] { return this.contract.Tertiary93 }
    public get Tertiary94(): CONTRACT['Tertiary94'] { return this.contract.Tertiary94 }
    public get Tertiary95(): CONTRACT['Tertiary95'] { return this.contract.Tertiary95 }
    public get Tertiary96(): CONTRACT['Tertiary96'] { return this.contract.Tertiary96 }
    public get Tertiary97(): CONTRACT['Tertiary97'] { return this.contract.Tertiary97 }
    public get Tertiary98(): CONTRACT['Tertiary98'] { return this.contract.Tertiary98 }
    public get Tertiary99(): CONTRACT['Tertiary99'] { return this.contract.Tertiary99 }
    public get Tertiary100(): CONTRACT['Tertiary100'] { return this.contract.Tertiary100 }
    public get Error0(): CONTRACT['Error0'] { return this.contract.Error0 }
    public get Error1(): CONTRACT['Error1'] { return this.contract.Error1 }
    public get Error2(): CONTRACT['Error2'] { return this.contract.Error2 }
    public get Error3(): CONTRACT['Error3'] { return this.contract.Error3 }
    public get Error4(): CONTRACT['Error4'] { return this.contract.Error4 }
    public get Error5(): CONTRACT['Error5'] { return this.contract.Error5 }
    public get Error6(): CONTRACT['Error6'] { return this.contract.Error6 }
    public get Error7(): CONTRACT['Error7'] { return this.contract.Error7 }
    public get Error8(): CONTRACT['Error8'] { return this.contract.Error8 }
    public get Error9(): CONTRACT['Error9'] { return this.contract.Error9 }
    public get Error10(): CONTRACT['Error10'] { return this.contract.Error10 }
    public get Error11(): CONTRACT['Error11'] { return this.contract.Error11 }
    public get Error12(): CONTRACT['Error12'] { return this.contract.Error12 }
    public get Error13(): CONTRACT['Error13'] { return this.contract.Error13 }
    public get Error14(): CONTRACT['Error14'] { return this.contract.Error14 }
    public get Error15(): CONTRACT['Error15'] { return this.contract.Error15 }
    public get Error16(): CONTRACT['Error16'] { return this.contract.Error16 }
    public get Error17(): CONTRACT['Error17'] { return this.contract.Error17 }
    public get Error18(): CONTRACT['Error18'] { return this.contract.Error18 }
    public get Error19(): CONTRACT['Error19'] { return this.contract.Error19 }
    public get Error20(): CONTRACT['Error20'] { return this.contract.Error20 }
    public get Error21(): CONTRACT['Error21'] { return this.contract.Error21 }
    public get Error22(): CONTRACT['Error22'] { return this.contract.Error22 }
    public get Error23(): CONTRACT['Error23'] { return this.contract.Error23 }
    public get Error24(): CONTRACT['Error24'] { return this.contract.Error24 }
    public get Error25(): CONTRACT['Error25'] { return this.contract.Error25 }
    public get Error26(): CONTRACT['Error26'] { return this.contract.Error26 }
    public get Error27(): CONTRACT['Error27'] { return this.contract.Error27 }
    public get Error28(): CONTRACT['Error28'] { return this.contract.Error28 }
    public get Error29(): CONTRACT['Error29'] { return this.contract.Error29 }
    public get Error30(): CONTRACT['Error30'] { return this.contract.Error30 }
    public get Error31(): CONTRACT['Error31'] { return this.contract.Error31 }
    public get Error32(): CONTRACT['Error32'] { return this.contract.Error32 }
    public get Error33(): CONTRACT['Error33'] { return this.contract.Error33 }
    public get Error34(): CONTRACT['Error34'] { return this.contract.Error34 }
    public get Error35(): CONTRACT['Error35'] { return this.contract.Error35 }
    public get Error36(): CONTRACT['Error36'] { return this.contract.Error36 }
    public get Error37(): CONTRACT['Error37'] { return this.contract.Error37 }
    public get Error38(): CONTRACT['Error38'] { return this.contract.Error38 }
    public get Error39(): CONTRACT['Error39'] { return this.contract.Error39 }
    public get Error40(): CONTRACT['Error40'] { return this.contract.Error40 }
    public get Error41(): CONTRACT['Error41'] { return this.contract.Error41 }
    public get Error42(): CONTRACT['Error42'] { return this.contract.Error42 }
    public get Error43(): CONTRACT['Error43'] { return this.contract.Error43 }
    public get Error44(): CONTRACT['Error44'] { return this.contract.Error44 }
    public get Error45(): CONTRACT['Error45'] { return this.contract.Error45 }
    public get Error46(): CONTRACT['Error46'] { return this.contract.Error46 }
    public get Error47(): CONTRACT['Error47'] { return this.contract.Error47 }
    public get Error48(): CONTRACT['Error48'] { return this.contract.Error48 }
    public get Error49(): CONTRACT['Error49'] { return this.contract.Error49 }
    public get Error50(): CONTRACT['Error50'] { return this.contract.Error50 }
    public get Error51(): CONTRACT['Error51'] { return this.contract.Error51 }
    public get Error52(): CONTRACT['Error52'] { return this.contract.Error52 }
    public get Error53(): CONTRACT['Error53'] { return this.contract.Error53 }
    public get Error54(): CONTRACT['Error54'] { return this.contract.Error54 }
    public get Error55(): CONTRACT['Error55'] { return this.contract.Error55 }
    public get Error56(): CONTRACT['Error56'] { return this.contract.Error56 }
    public get Error57(): CONTRACT['Error57'] { return this.contract.Error57 }
    public get Error58(): CONTRACT['Error58'] { return this.contract.Error58 }
    public get Error59(): CONTRACT['Error59'] { return this.contract.Error59 }
    public get Error60(): CONTRACT['Error60'] { return this.contract.Error60 }
    public get Error61(): CONTRACT['Error61'] { return this.contract.Error61 }
    public get Error62(): CONTRACT['Error62'] { return this.contract.Error62 }
    public get Error63(): CONTRACT['Error63'] { return this.contract.Error63 }
    public get Error64(): CONTRACT['Error64'] { return this.contract.Error64 }
    public get Error65(): CONTRACT['Error65'] { return this.contract.Error65 }
    public get Error66(): CONTRACT['Error66'] { return this.contract.Error66 }
    public get Error67(): CONTRACT['Error67'] { return this.contract.Error67 }
    public get Error68(): CONTRACT['Error68'] { return this.contract.Error68 }
    public get Error69(): CONTRACT['Error69'] { return this.contract.Error69 }
    public get Error70(): CONTRACT['Error70'] { return this.contract.Error70 }
    public get Error71(): CONTRACT['Error71'] { return this.contract.Error71 }
    public get Error72(): CONTRACT['Error72'] { return this.contract.Error72 }
    public get Error73(): CONTRACT['Error73'] { return this.contract.Error73 }
    public get Error74(): CONTRACT['Error74'] { return this.contract.Error74 }
    public get Error75(): CONTRACT['Error75'] { return this.contract.Error75 }
    public get Error76(): CONTRACT['Error76'] { return this.contract.Error76 }
    public get Error77(): CONTRACT['Error77'] { return this.contract.Error77 }
    public get Error78(): CONTRACT['Error78'] { return this.contract.Error78 }
    public get Error79(): CONTRACT['Error79'] { return this.contract.Error79 }
    public get Error80(): CONTRACT['Error80'] { return this.contract.Error80 }
    public get Error81(): CONTRACT['Error81'] { return this.contract.Error81 }
    public get Error82(): CONTRACT['Error82'] { return this.contract.Error82 }
    public get Error83(): CONTRACT['Error83'] { return this.contract.Error83 }
    public get Error84(): CONTRACT['Error84'] { return this.contract.Error84 }
    public get Error85(): CONTRACT['Error85'] { return this.contract.Error85 }
    public get Error86(): CONTRACT['Error86'] { return this.contract.Error86 }
    public get Error87(): CONTRACT['Error87'] { return this.contract.Error87 }
    public get Error88(): CONTRACT['Error88'] { return this.contract.Error88 }
    public get Error89(): CONTRACT['Error89'] { return this.contract.Error89 }
    public get Error90(): CONTRACT['Error90'] { return this.contract.Error90 }
    public get Error91(): CONTRACT['Error91'] { return this.contract.Error91 }
    public get Error92(): CONTRACT['Error92'] { return this.contract.Error92 }
    public get Error93(): CONTRACT['Error93'] { return this.contract.Error93 }
    public get Error94(): CONTRACT['Error94'] { return this.contract.Error94 }
    public get Error95(): CONTRACT['Error95'] { return this.contract.Error95 }
    public get Error96(): CONTRACT['Error96'] { return this.contract.Error96 }
    public get Error97(): CONTRACT['Error97'] { return this.contract.Error97 }
    public get Error98(): CONTRACT['Error98'] { return this.contract.Error98 }
    public get Error99(): CONTRACT['Error99'] { return this.contract.Error99 }
    public get Error100(): CONTRACT['Error100'] { return this.contract.Error100 }
    public get Neutral0(): CONTRACT['Neutral0'] { return this.contract.Neutral0 }
    public get Neutral1(): CONTRACT['Neutral1'] { return this.contract.Neutral1 }
    public get Neutral2(): CONTRACT['Neutral2'] { return this.contract.Neutral2 }
    public get Neutral3(): CONTRACT['Neutral3'] { return this.contract.Neutral3 }
    public get Neutral4(): CONTRACT['Neutral4'] { return this.contract.Neutral4 }
    public get Neutral5(): CONTRACT['Neutral5'] { return this.contract.Neutral5 }
    public get Neutral6(): CONTRACT['Neutral6'] { return this.contract.Neutral6 }
    public get Neutral7(): CONTRACT['Neutral7'] { return this.contract.Neutral7 }
    public get Neutral8(): CONTRACT['Neutral8'] { return this.contract.Neutral8 }
    public get Neutral9(): CONTRACT['Neutral9'] { return this.contract.Neutral9 }
    public get Neutral10(): CONTRACT['Neutral10'] { return this.contract.Neutral10 }
    public get Neutral11(): CONTRACT['Neutral11'] { return this.contract.Neutral11 }
    public get Neutral12(): CONTRACT['Neutral12'] { return this.contract.Neutral12 }
    public get Neutral13(): CONTRACT['Neutral13'] { return this.contract.Neutral13 }
    public get Neutral14(): CONTRACT['Neutral14'] { return this.contract.Neutral14 }
    public get Neutral15(): CONTRACT['Neutral15'] { return this.contract.Neutral15 }
    public get Neutral16(): CONTRACT['Neutral16'] { return this.contract.Neutral16 }
    public get Neutral17(): CONTRACT['Neutral17'] { return this.contract.Neutral17 }
    public get Neutral18(): CONTRACT['Neutral18'] { return this.contract.Neutral18 }
    public get Neutral19(): CONTRACT['Neutral19'] { return this.contract.Neutral19 }
    public get Neutral20(): CONTRACT['Neutral20'] { return this.contract.Neutral20 }
    public get Neutral21(): CONTRACT['Neutral21'] { return this.contract.Neutral21 }
    public get Neutral22(): CONTRACT['Neutral22'] { return this.contract.Neutral22 }
    public get Neutral23(): CONTRACT['Neutral23'] { return this.contract.Neutral23 }
    public get Neutral24(): CONTRACT['Neutral24'] { return this.contract.Neutral24 }
    public get Neutral25(): CONTRACT['Neutral25'] { return this.contract.Neutral25 }
    public get Neutral26(): CONTRACT['Neutral26'] { return this.contract.Neutral26 }
    public get Neutral27(): CONTRACT['Neutral27'] { return this.contract.Neutral27 }
    public get Neutral28(): CONTRACT['Neutral28'] { return this.contract.Neutral28 }
    public get Neutral29(): CONTRACT['Neutral29'] { return this.contract.Neutral29 }
    public get Neutral30(): CONTRACT['Neutral30'] { return this.contract.Neutral30 }
    public get Neutral31(): CONTRACT['Neutral31'] { return this.contract.Neutral31 }
    public get Neutral32(): CONTRACT['Neutral32'] { return this.contract.Neutral32 }
    public get Neutral33(): CONTRACT['Neutral33'] { return this.contract.Neutral33 }
    public get Neutral34(): CONTRACT['Neutral34'] { return this.contract.Neutral34 }
    public get Neutral35(): CONTRACT['Neutral35'] { return this.contract.Neutral35 }
    public get Neutral36(): CONTRACT['Neutral36'] { return this.contract.Neutral36 }
    public get Neutral37(): CONTRACT['Neutral37'] { return this.contract.Neutral37 }
    public get Neutral38(): CONTRACT['Neutral38'] { return this.contract.Neutral38 }
    public get Neutral39(): CONTRACT['Neutral39'] { return this.contract.Neutral39 }
    public get Neutral40(): CONTRACT['Neutral40'] { return this.contract.Neutral40 }
    public get Neutral41(): CONTRACT['Neutral41'] { return this.contract.Neutral41 }
    public get Neutral42(): CONTRACT['Neutral42'] { return this.contract.Neutral42 }
    public get Neutral43(): CONTRACT['Neutral43'] { return this.contract.Neutral43 }
    public get Neutral44(): CONTRACT['Neutral44'] { return this.contract.Neutral44 }
    public get Neutral45(): CONTRACT['Neutral45'] { return this.contract.Neutral45 }
    public get Neutral46(): CONTRACT['Neutral46'] { return this.contract.Neutral46 }
    public get Neutral47(): CONTRACT['Neutral47'] { return this.contract.Neutral47 }
    public get Neutral48(): CONTRACT['Neutral48'] { return this.contract.Neutral48 }
    public get Neutral49(): CONTRACT['Neutral49'] { return this.contract.Neutral49 }
    public get Neutral50(): CONTRACT['Neutral50'] { return this.contract.Neutral50 }
    public get Neutral51(): CONTRACT['Neutral51'] { return this.contract.Neutral51 }
    public get Neutral52(): CONTRACT['Neutral52'] { return this.contract.Neutral52 }
    public get Neutral53(): CONTRACT['Neutral53'] { return this.contract.Neutral53 }
    public get Neutral54(): CONTRACT['Neutral54'] { return this.contract.Neutral54 }
    public get Neutral55(): CONTRACT['Neutral55'] { return this.contract.Neutral55 }
    public get Neutral56(): CONTRACT['Neutral56'] { return this.contract.Neutral56 }
    public get Neutral57(): CONTRACT['Neutral57'] { return this.contract.Neutral57 }
    public get Neutral58(): CONTRACT['Neutral58'] { return this.contract.Neutral58 }
    public get Neutral59(): CONTRACT['Neutral59'] { return this.contract.Neutral59 }
    public get Neutral60(): CONTRACT['Neutral60'] { return this.contract.Neutral60 }
    public get Neutral61(): CONTRACT['Neutral61'] { return this.contract.Neutral61 }
    public get Neutral62(): CONTRACT['Neutral62'] { return this.contract.Neutral62 }
    public get Neutral63(): CONTRACT['Neutral63'] { return this.contract.Neutral63 }
    public get Neutral64(): CONTRACT['Neutral64'] { return this.contract.Neutral64 }
    public get Neutral65(): CONTRACT['Neutral65'] { return this.contract.Neutral65 }
    public get Neutral66(): CONTRACT['Neutral66'] { return this.contract.Neutral66 }
    public get Neutral67(): CONTRACT['Neutral67'] { return this.contract.Neutral67 }
    public get Neutral68(): CONTRACT['Neutral68'] { return this.contract.Neutral68 }
    public get Neutral69(): CONTRACT['Neutral69'] { return this.contract.Neutral69 }
    public get Neutral70(): CONTRACT['Neutral70'] { return this.contract.Neutral70 }
    public get Neutral71(): CONTRACT['Neutral71'] { return this.contract.Neutral71 }
    public get Neutral72(): CONTRACT['Neutral72'] { return this.contract.Neutral72 }
    public get Neutral73(): CONTRACT['Neutral73'] { return this.contract.Neutral73 }
    public get Neutral74(): CONTRACT['Neutral74'] { return this.contract.Neutral74 }
    public get Neutral75(): CONTRACT['Neutral75'] { return this.contract.Neutral75 }
    public get Neutral76(): CONTRACT['Neutral76'] { return this.contract.Neutral76 }
    public get Neutral77(): CONTRACT['Neutral77'] { return this.contract.Neutral77 }
    public get Neutral78(): CONTRACT['Neutral78'] { return this.contract.Neutral78 }
    public get Neutral79(): CONTRACT['Neutral79'] { return this.contract.Neutral79 }
    public get Neutral80(): CONTRACT['Neutral80'] { return this.contract.Neutral80 }
    public get Neutral81(): CONTRACT['Neutral81'] { return this.contract.Neutral81 }
    public get Neutral82(): CONTRACT['Neutral82'] { return this.contract.Neutral82 }
    public get Neutral83(): CONTRACT['Neutral83'] { return this.contract.Neutral83 }
    public get Neutral84(): CONTRACT['Neutral84'] { return this.contract.Neutral84 }
    public get Neutral85(): CONTRACT['Neutral85'] { return this.contract.Neutral85 }
    public get Neutral86(): CONTRACT['Neutral86'] { return this.contract.Neutral86 }
    public get Neutral87(): CONTRACT['Neutral87'] { return this.contract.Neutral87 }
    public get Neutral88(): CONTRACT['Neutral88'] { return this.contract.Neutral88 }
    public get Neutral89(): CONTRACT['Neutral89'] { return this.contract.Neutral89 }
    public get Neutral90(): CONTRACT['Neutral90'] { return this.contract.Neutral90 }
    public get Neutral91(): CONTRACT['Neutral91'] { return this.contract.Neutral91 }
    public get Neutral92(): CONTRACT['Neutral92'] { return this.contract.Neutral92 }
    public get Neutral93(): CONTRACT['Neutral93'] { return this.contract.Neutral93 }
    public get Neutral94(): CONTRACT['Neutral94'] { return this.contract.Neutral94 }
    public get Neutral95(): CONTRACT['Neutral95'] { return this.contract.Neutral95 }
    public get Neutral96(): CONTRACT['Neutral96'] { return this.contract.Neutral96 }
    public get Neutral97(): CONTRACT['Neutral97'] { return this.contract.Neutral97 }
    public get Neutral98(): CONTRACT['Neutral98'] { return this.contract.Neutral98 }
    public get Neutral99(): CONTRACT['Neutral99'] { return this.contract.Neutral99 }
    public get Neutral100(): CONTRACT['Neutral100'] { return this.contract.Neutral100 }
    public get NeutralVariant0(): CONTRACT['NeutralVariant0'] { return this.contract.NeutralVariant0 }
    public get NeutralVariant1(): CONTRACT['NeutralVariant1'] { return this.contract.NeutralVariant1 }
    public get NeutralVariant2(): CONTRACT['NeutralVariant2'] { return this.contract.NeutralVariant2 }
    public get NeutralVariant3(): CONTRACT['NeutralVariant3'] { return this.contract.NeutralVariant3 }
    public get NeutralVariant4(): CONTRACT['NeutralVariant4'] { return this.contract.NeutralVariant4 }
    public get NeutralVariant5(): CONTRACT['NeutralVariant5'] { return this.contract.NeutralVariant5 }
    public get NeutralVariant6(): CONTRACT['NeutralVariant6'] { return this.contract.NeutralVariant6 }
    public get NeutralVariant7(): CONTRACT['NeutralVariant7'] { return this.contract.NeutralVariant7 }
    public get NeutralVariant8(): CONTRACT['NeutralVariant8'] { return this.contract.NeutralVariant8 }
    public get NeutralVariant9(): CONTRACT['NeutralVariant9'] { return this.contract.NeutralVariant9 }
    public get NeutralVariant10(): CONTRACT['NeutralVariant10'] { return this.contract.NeutralVariant10 }
    public get NeutralVariant11(): CONTRACT['NeutralVariant11'] { return this.contract.NeutralVariant11 }
    public get NeutralVariant12(): CONTRACT['NeutralVariant12'] { return this.contract.NeutralVariant12 }
    public get NeutralVariant13(): CONTRACT['NeutralVariant13'] { return this.contract.NeutralVariant13 }
    public get NeutralVariant14(): CONTRACT['NeutralVariant14'] { return this.contract.NeutralVariant14 }
    public get NeutralVariant15(): CONTRACT['NeutralVariant15'] { return this.contract.NeutralVariant15 }
    public get NeutralVariant16(): CONTRACT['NeutralVariant16'] { return this.contract.NeutralVariant16 }
    public get NeutralVariant17(): CONTRACT['NeutralVariant17'] { return this.contract.NeutralVariant17 }
    public get NeutralVariant18(): CONTRACT['NeutralVariant18'] { return this.contract.NeutralVariant18 }
    public get NeutralVariant19(): CONTRACT['NeutralVariant19'] { return this.contract.NeutralVariant19 }
    public get NeutralVariant20(): CONTRACT['NeutralVariant20'] { return this.contract.NeutralVariant20 }
    public get NeutralVariant21(): CONTRACT['NeutralVariant21'] { return this.contract.NeutralVariant21 }
    public get NeutralVariant22(): CONTRACT['NeutralVariant22'] { return this.contract.NeutralVariant22 }
    public get NeutralVariant23(): CONTRACT['NeutralVariant23'] { return this.contract.NeutralVariant23 }
    public get NeutralVariant24(): CONTRACT['NeutralVariant24'] { return this.contract.NeutralVariant24 }
    public get NeutralVariant25(): CONTRACT['NeutralVariant25'] { return this.contract.NeutralVariant25 }
    public get NeutralVariant26(): CONTRACT['NeutralVariant26'] { return this.contract.NeutralVariant26 }
    public get NeutralVariant27(): CONTRACT['NeutralVariant27'] { return this.contract.NeutralVariant27 }
    public get NeutralVariant28(): CONTRACT['NeutralVariant28'] { return this.contract.NeutralVariant28 }
    public get NeutralVariant29(): CONTRACT['NeutralVariant29'] { return this.contract.NeutralVariant29 }
    public get NeutralVariant30(): CONTRACT['NeutralVariant30'] { return this.contract.NeutralVariant30 }
    public get NeutralVariant31(): CONTRACT['NeutralVariant31'] { return this.contract.NeutralVariant31 }
    public get NeutralVariant32(): CONTRACT['NeutralVariant32'] { return this.contract.NeutralVariant32 }
    public get NeutralVariant33(): CONTRACT['NeutralVariant33'] { return this.contract.NeutralVariant33 }
    public get NeutralVariant34(): CONTRACT['NeutralVariant34'] { return this.contract.NeutralVariant34 }
    public get NeutralVariant35(): CONTRACT['NeutralVariant35'] { return this.contract.NeutralVariant35 }
    public get NeutralVariant36(): CONTRACT['NeutralVariant36'] { return this.contract.NeutralVariant36 }
    public get NeutralVariant37(): CONTRACT['NeutralVariant37'] { return this.contract.NeutralVariant37 }
    public get NeutralVariant38(): CONTRACT['NeutralVariant38'] { return this.contract.NeutralVariant38 }
    public get NeutralVariant39(): CONTRACT['NeutralVariant39'] { return this.contract.NeutralVariant39 }
    public get NeutralVariant40(): CONTRACT['NeutralVariant40'] { return this.contract.NeutralVariant40 }
    public get NeutralVariant41(): CONTRACT['NeutralVariant41'] { return this.contract.NeutralVariant41 }
    public get NeutralVariant42(): CONTRACT['NeutralVariant42'] { return this.contract.NeutralVariant42 }
    public get NeutralVariant43(): CONTRACT['NeutralVariant43'] { return this.contract.NeutralVariant43 }
    public get NeutralVariant44(): CONTRACT['NeutralVariant44'] { return this.contract.NeutralVariant44 }
    public get NeutralVariant45(): CONTRACT['NeutralVariant45'] { return this.contract.NeutralVariant45 }
    public get NeutralVariant46(): CONTRACT['NeutralVariant46'] { return this.contract.NeutralVariant46 }
    public get NeutralVariant47(): CONTRACT['NeutralVariant47'] { return this.contract.NeutralVariant47 }
    public get NeutralVariant48(): CONTRACT['NeutralVariant48'] { return this.contract.NeutralVariant48 }
    public get NeutralVariant49(): CONTRACT['NeutralVariant49'] { return this.contract.NeutralVariant49 }
    public get NeutralVariant50(): CONTRACT['NeutralVariant50'] { return this.contract.NeutralVariant50 }
    public get NeutralVariant51(): CONTRACT['NeutralVariant51'] { return this.contract.NeutralVariant51 }
    public get NeutralVariant52(): CONTRACT['NeutralVariant52'] { return this.contract.NeutralVariant52 }
    public get NeutralVariant53(): CONTRACT['NeutralVariant53'] { return this.contract.NeutralVariant53 }
    public get NeutralVariant54(): CONTRACT['NeutralVariant54'] { return this.contract.NeutralVariant54 }
    public get NeutralVariant55(): CONTRACT['NeutralVariant55'] { return this.contract.NeutralVariant55 }
    public get NeutralVariant56(): CONTRACT['NeutralVariant56'] { return this.contract.NeutralVariant56 }
    public get NeutralVariant57(): CONTRACT['NeutralVariant57'] { return this.contract.NeutralVariant57 }
    public get NeutralVariant58(): CONTRACT['NeutralVariant58'] { return this.contract.NeutralVariant58 }
    public get NeutralVariant59(): CONTRACT['NeutralVariant59'] { return this.contract.NeutralVariant59 }
    public get NeutralVariant60(): CONTRACT['NeutralVariant60'] { return this.contract.NeutralVariant60 }
    public get NeutralVariant61(): CONTRACT['NeutralVariant61'] { return this.contract.NeutralVariant61 }
    public get NeutralVariant62(): CONTRACT['NeutralVariant62'] { return this.contract.NeutralVariant62 }
    public get NeutralVariant63(): CONTRACT['NeutralVariant63'] { return this.contract.NeutralVariant63 }
    public get NeutralVariant64(): CONTRACT['NeutralVariant64'] { return this.contract.NeutralVariant64 }
    public get NeutralVariant65(): CONTRACT['NeutralVariant65'] { return this.contract.NeutralVariant65 }
    public get NeutralVariant66(): CONTRACT['NeutralVariant66'] { return this.contract.NeutralVariant66 }
    public get NeutralVariant67(): CONTRACT['NeutralVariant67'] { return this.contract.NeutralVariant67 }
    public get NeutralVariant68(): CONTRACT['NeutralVariant68'] { return this.contract.NeutralVariant68 }
    public get NeutralVariant69(): CONTRACT['NeutralVariant69'] { return this.contract.NeutralVariant69 }
    public get NeutralVariant70(): CONTRACT['NeutralVariant70'] { return this.contract.NeutralVariant70 }
    public get NeutralVariant71(): CONTRACT['NeutralVariant71'] { return this.contract.NeutralVariant71 }
    public get NeutralVariant72(): CONTRACT['NeutralVariant72'] { return this.contract.NeutralVariant72 }
    public get NeutralVariant73(): CONTRACT['NeutralVariant73'] { return this.contract.NeutralVariant73 }
    public get NeutralVariant74(): CONTRACT['NeutralVariant74'] { return this.contract.NeutralVariant74 }
    public get NeutralVariant75(): CONTRACT['NeutralVariant75'] { return this.contract.NeutralVariant75 }
    public get NeutralVariant76(): CONTRACT['NeutralVariant76'] { return this.contract.NeutralVariant76 }
    public get NeutralVariant77(): CONTRACT['NeutralVariant77'] { return this.contract.NeutralVariant77 }
    public get NeutralVariant78(): CONTRACT['NeutralVariant78'] { return this.contract.NeutralVariant78 }
    public get NeutralVariant79(): CONTRACT['NeutralVariant79'] { return this.contract.NeutralVariant79 }
    public get NeutralVariant80(): CONTRACT['NeutralVariant80'] { return this.contract.NeutralVariant80 }
    public get NeutralVariant81(): CONTRACT['NeutralVariant81'] { return this.contract.NeutralVariant81 }
    public get NeutralVariant82(): CONTRACT['NeutralVariant82'] { return this.contract.NeutralVariant82 }
    public get NeutralVariant83(): CONTRACT['NeutralVariant83'] { return this.contract.NeutralVariant83 }
    public get NeutralVariant84(): CONTRACT['NeutralVariant84'] { return this.contract.NeutralVariant84 }
    public get NeutralVariant85(): CONTRACT['NeutralVariant85'] { return this.contract.NeutralVariant85 }
    public get NeutralVariant86(): CONTRACT['NeutralVariant86'] { return this.contract.NeutralVariant86 }
    public get NeutralVariant87(): CONTRACT['NeutralVariant87'] { return this.contract.NeutralVariant87 }
    public get NeutralVariant88(): CONTRACT['NeutralVariant88'] { return this.contract.NeutralVariant88 }
    public get NeutralVariant89(): CONTRACT['NeutralVariant89'] { return this.contract.NeutralVariant89 }
    public get NeutralVariant90(): CONTRACT['NeutralVariant90'] { return this.contract.NeutralVariant90 }
    public get NeutralVariant91(): CONTRACT['NeutralVariant91'] { return this.contract.NeutralVariant91 }
    public get NeutralVariant92(): CONTRACT['NeutralVariant92'] { return this.contract.NeutralVariant92 }
    public get NeutralVariant93(): CONTRACT['NeutralVariant93'] { return this.contract.NeutralVariant93 }
    public get NeutralVariant94(): CONTRACT['NeutralVariant94'] { return this.contract.NeutralVariant94 }
    public get NeutralVariant95(): CONTRACT['NeutralVariant95'] { return this.contract.NeutralVariant95 }
    public get NeutralVariant96(): CONTRACT['NeutralVariant96'] { return this.contract.NeutralVariant96 }
    public get NeutralVariant97(): CONTRACT['NeutralVariant97'] { return this.contract.NeutralVariant97 }
    public get NeutralVariant98(): CONTRACT['NeutralVariant98'] { return this.contract.NeutralVariant98 }
    public get NeutralVariant99(): CONTRACT['NeutralVariant99'] { return this.contract.NeutralVariant99 }
    public get NeutralVariant100(): CONTRACT['NeutralVariant100'] { return this.contract.NeutralVariant100 }

    public get AllEnums() {
        return {
            Primary0: this.Primary0, Primary1: this.Primary1, Primary2: this.Primary2, Primary3: this.Primary3, Primary4: this.Primary4,
            Primary5: this.Primary5, Primary6: this.Primary6, Primary7: this.Primary7, Primary8: this.Primary8, Primary9: this.Primary9,
            Primary10: this.Primary10, Primary11: this.Primary11, Primary12: this.Primary12, Primary13: this.Primary13, Primary14: this.Primary14,
            Primary15: this.Primary15, Primary16: this.Primary16, Primary17: this.Primary17, Primary18: this.Primary18, Primary19: this.Primary19,
            Primary20: this.Primary20, Primary21: this.Primary21, Primary22: this.Primary22, Primary23: this.Primary23, Primary24: this.Primary24,
            Primary25: this.Primary25, Primary26: this.Primary26, Primary27: this.Primary27, Primary28: this.Primary28, Primary29: this.Primary29,
            Primary30: this.Primary30, Primary31: this.Primary31, Primary32: this.Primary32, Primary33: this.Primary33, Primary34: this.Primary34,
            Primary35: this.Primary35, Primary36: this.Primary36, Primary37: this.Primary37, Primary38: this.Primary38, Primary39: this.Primary39,
            Primary40: this.Primary40, Primary41: this.Primary41, Primary42: this.Primary42, Primary43: this.Primary43, Primary44: this.Primary44,
            Primary45: this.Primary45, Primary46: this.Primary46, Primary47: this.Primary47, Primary48: this.Primary48, Primary49: this.Primary49,
            Primary50: this.Primary50, Primary51: this.Primary51, Primary52: this.Primary52, Primary53: this.Primary53, Primary54: this.Primary54,
            Primary55: this.Primary55, Primary56: this.Primary56, Primary57: this.Primary57, Primary58: this.Primary58, Primary59: this.Primary59,
            Primary60: this.Primary60, Primary61: this.Primary61, Primary62: this.Primary62, Primary63: this.Primary63, Primary64: this.Primary64,
            Primary65: this.Primary65, Primary66: this.Primary66, Primary67: this.Primary67, Primary68: this.Primary68, Primary69: this.Primary69,
            Primary70: this.Primary70, Primary71: this.Primary71, Primary72: this.Primary72, Primary73: this.Primary73, Primary74: this.Primary74,
            Primary75: this.Primary75, Primary76: this.Primary76, Primary77: this.Primary77, Primary78: this.Primary78, Primary79: this.Primary79,
            Primary80: this.Primary80, Primary81: this.Primary81, Primary82: this.Primary82, Primary83: this.Primary83, Primary84: this.Primary84,
            Primary85: this.Primary85, Primary86: this.Primary86, Primary87: this.Primary87, Primary88: this.Primary88, Primary89: this.Primary89,
            Primary90: this.Primary90, Primary91: this.Primary91, Primary92: this.Primary92, Primary93: this.Primary93, Primary94: this.Primary94,
            Primary95: this.Primary95, Primary96: this.Primary96, Primary97: this.Primary97, Primary98: this.Primary98, Primary99: this.Primary99,
            Primary100: this.Primary100, Secondary0: this.Secondary0, Secondary1: this.Secondary1, Secondary2: this.Secondary2, Secondary3: this.Secondary3,
            Secondary4: this.Secondary4, Secondary5: this.Secondary5, Secondary6: this.Secondary6, Secondary7: this.Secondary7, Secondary8: this.Secondary8,
            Secondary9: this.Secondary9, Secondary10: this.Secondary10, Secondary11: this.Secondary11, Secondary12: this.Secondary12, Secondary13: this.Secondary13,
            Secondary14: this.Secondary14, Secondary15: this.Secondary15, Secondary16: this.Secondary16, Secondary17: this.Secondary17, Secondary18: this.Secondary18,
            Secondary19: this.Secondary19, Secondary20: this.Secondary20, Secondary21: this.Secondary21, Secondary22: this.Secondary22, Secondary23: this.Secondary23,
            Secondary24: this.Secondary24, Secondary25: this.Secondary25, Secondary26: this.Secondary26, Secondary27: this.Secondary27, Secondary28: this.Secondary28,
            Secondary29: this.Secondary29, Secondary30: this.Secondary30, Secondary31: this.Secondary31, Secondary32: this.Secondary32, Secondary33: this.Secondary33,
            Secondary34: this.Secondary34, Secondary35: this.Secondary35, Secondary36: this.Secondary36, Secondary37: this.Secondary37, Secondary38: this.Secondary38,
            Secondary39: this.Secondary39, Secondary40: this.Secondary40, Secondary41: this.Secondary41, Secondary42: this.Secondary42, Secondary43: this.Secondary43,
            Secondary44: this.Secondary44, Secondary45: this.Secondary45, Secondary46: this.Secondary46, Secondary47: this.Secondary47, Secondary48: this.Secondary48,
            Secondary49: this.Secondary49, Secondary50: this.Secondary50, Secondary51: this.Secondary51, Secondary52: this.Secondary52, Secondary53: this.Secondary53,
            Secondary54: this.Secondary54, Secondary55: this.Secondary55, Secondary56: this.Secondary56, Secondary57: this.Secondary57, Secondary58: this.Secondary58,
            Secondary59: this.Secondary59, Secondary60: this.Secondary60, Secondary61: this.Secondary61, Secondary62: this.Secondary62, Secondary63: this.Secondary63,
            Secondary64: this.Secondary64, Secondary65: this.Secondary65, Secondary66: this.Secondary66, Secondary67: this.Secondary67, Secondary68: this.Secondary68,
            Secondary69: this.Secondary69, Secondary70: this.Secondary70, Secondary71: this.Secondary71, Secondary72: this.Secondary72, Secondary73: this.Secondary73,
            Secondary74: this.Secondary74, Secondary75: this.Secondary75, Secondary76: this.Secondary76, Secondary77: this.Secondary77, Secondary78: this.Secondary78,
            Secondary79: this.Secondary79, Secondary80: this.Secondary80, Secondary81: this.Secondary81, Secondary82: this.Secondary82, Secondary83: this.Secondary83,
            Secondary84: this.Secondary84, Secondary85: this.Secondary85, Secondary86: this.Secondary86, Secondary87: this.Secondary87, Secondary88: this.Secondary88,
            Secondary89: this.Secondary89, Secondary90: this.Secondary90, Secondary91: this.Secondary91, Secondary92: this.Secondary92, Secondary93: this.Secondary93,
            Secondary94: this.Secondary94, Secondary95: this.Secondary95, Secondary96: this.Secondary96, Secondary97: this.Secondary97, Secondary98: this.Secondary98,
            Secondary99: this.Secondary99, Secondary100: this.Secondary100, Tertiary0: this.Tertiary0, Tertiary1: this.Tertiary1, Tertiary2: this.Tertiary2,
            Tertiary3: this.Tertiary3, Tertiary4: this.Tertiary4, Tertiary5: this.Tertiary5, Tertiary6: this.Tertiary6, Tertiary7: this.Tertiary7,
            Tertiary8: this.Tertiary8, Tertiary9: this.Tertiary9, Tertiary10: this.Tertiary10, Tertiary11: this.Tertiary11, Tertiary12: this.Tertiary12,
            Tertiary13: this.Tertiary13, Tertiary14: this.Tertiary14, Tertiary15: this.Tertiary15, Tertiary16: this.Tertiary16, Tertiary17: this.Tertiary17,
            Tertiary18: this.Tertiary18, Tertiary19: this.Tertiary19, Tertiary20: this.Tertiary20, Tertiary21: this.Tertiary21, Tertiary22: this.Tertiary22,
            Tertiary23: this.Tertiary23, Tertiary24: this.Tertiary24, Tertiary25: this.Tertiary25, Tertiary26: this.Tertiary26, Tertiary27: this.Tertiary27,
            Tertiary28: this.Tertiary28, Tertiary29: this.Tertiary29, Tertiary30: this.Tertiary30, Tertiary31: this.Tertiary31, Tertiary32: this.Tertiary32,
            Tertiary33: this.Tertiary33, Tertiary34: this.Tertiary34, Tertiary35: this.Tertiary35, Tertiary36: this.Tertiary36, Tertiary37: this.Tertiary37,
            Tertiary38: this.Tertiary38, Tertiary39: this.Tertiary39, Tertiary40: this.Tertiary40, Tertiary41: this.Tertiary41, Tertiary42: this.Tertiary42,
            Tertiary43: this.Tertiary43, Tertiary44: this.Tertiary44, Tertiary45: this.Tertiary45, Tertiary46: this.Tertiary46, Tertiary47: this.Tertiary47,
            Tertiary48: this.Tertiary48, Tertiary49: this.Tertiary49, Tertiary50: this.Tertiary50, Tertiary51: this.Tertiary51, Tertiary52: this.Tertiary52,
            Tertiary53: this.Tertiary53, Tertiary54: this.Tertiary54, Tertiary55: this.Tertiary55, Tertiary56: this.Tertiary56, Tertiary57: this.Tertiary57,
            Tertiary58: this.Tertiary58, Tertiary59: this.Tertiary59, Tertiary60: this.Tertiary60, Tertiary61: this.Tertiary61, Tertiary62: this.Tertiary62,
            Tertiary63: this.Tertiary63, Tertiary64: this.Tertiary64, Tertiary65: this.Tertiary65, Tertiary66: this.Tertiary66, Tertiary67: this.Tertiary67,
            Tertiary68: this.Tertiary68, Tertiary69: this.Tertiary69, Tertiary70: this.Tertiary70, Tertiary71: this.Tertiary71, Tertiary72: this.Tertiary72,
            Tertiary73: this.Tertiary73, Tertiary74: this.Tertiary74, Tertiary75: this.Tertiary75, Tertiary76: this.Tertiary76, Tertiary77: this.Tertiary77,
            Tertiary78: this.Tertiary78, Tertiary79: this.Tertiary79, Tertiary80: this.Tertiary80, Tertiary81: this.Tertiary81, Tertiary82: this.Tertiary82,
            Tertiary83: this.Tertiary83, Tertiary84: this.Tertiary84, Tertiary85: this.Tertiary85, Tertiary86: this.Tertiary86, Tertiary87: this.Tertiary87,
            Tertiary88: this.Tertiary88, Tertiary89: this.Tertiary89, Tertiary90: this.Tertiary90, Tertiary91: this.Tertiary91, Tertiary92: this.Tertiary92,
            Tertiary93: this.Tertiary93, Tertiary94: this.Tertiary94, Tertiary95: this.Tertiary95, Tertiary96: this.Tertiary96, Tertiary97: this.Tertiary97,
            Tertiary98: this.Tertiary98, Tertiary99: this.Tertiary99, Tertiary100: this.Tertiary100, Error0: this.Error0, Error1: this.Error1,
            Error2: this.Error2, Error3: this.Error3, Error4: this.Error4, Error5: this.Error5, Error6: this.Error6,
            Error7: this.Error7, Error8: this.Error8, Error9: this.Error9, Error10: this.Error10, Error11: this.Error11,
            Error12: this.Error12, Error13: this.Error13, Error14: this.Error14, Error15: this.Error15, Error16: this.Error16,
            Error17: this.Error17, Error18: this.Error18, Error19: this.Error19, Error20: this.Error20, Error21: this.Error21,
            Error22: this.Error22, Error23: this.Error23, Error24: this.Error24, Error25: this.Error25, Error26: this.Error26,
            Error27: this.Error27, Error28: this.Error28, Error29: this.Error29, Error30: this.Error30, Error31: this.Error31,
            Error32: this.Error32, Error33: this.Error33, Error34: this.Error34, Error35: this.Error35, Error36: this.Error36,
            Error37: this.Error37, Error38: this.Error38, Error39: this.Error39, Error40: this.Error40, Error41: this.Error41,
            Error42: this.Error42, Error43: this.Error43, Error44: this.Error44, Error45: this.Error45, Error46: this.Error46,
            Error47: this.Error47, Error48: this.Error48, Error49: this.Error49, Error50: this.Error50, Error51: this.Error51,
            Error52: this.Error52, Error53: this.Error53, Error54: this.Error54, Error55: this.Error55, Error56: this.Error56,
            Error57: this.Error57, Error58: this.Error58, Error59: this.Error59, Error60: this.Error60, Error61: this.Error61,
            Error62: this.Error62, Error63: this.Error63, Error64: this.Error64, Error65: this.Error65, Error66: this.Error66,
            Error67: this.Error67, Error68: this.Error68, Error69: this.Error69, Error70: this.Error70, Error71: this.Error71,
            Error72: this.Error72, Error73: this.Error73, Error74: this.Error74, Error75: this.Error75, Error76: this.Error76,
            Error77: this.Error77, Error78: this.Error78, Error79: this.Error79, Error80: this.Error80, Error81: this.Error81,
            Error82: this.Error82, Error83: this.Error83, Error84: this.Error84, Error85: this.Error85, Error86: this.Error86,
            Error87: this.Error87, Error88: this.Error88, Error89: this.Error89, Error90: this.Error90, Error91: this.Error91,
            Error92: this.Error92, Error93: this.Error93, Error94: this.Error94, Error95: this.Error95, Error96: this.Error96,
            Error97: this.Error97, Error98: this.Error98, Error99: this.Error99, Error100: this.Error100, Neutral0: this.Neutral0,
            Neutral1: this.Neutral1, Neutral2: this.Neutral2, Neutral3: this.Neutral3, Neutral4: this.Neutral4, Neutral5: this.Neutral5,
            Neutral6: this.Neutral6, Neutral7: this.Neutral7, Neutral8: this.Neutral8, Neutral9: this.Neutral9, Neutral10: this.Neutral10,
            Neutral11: this.Neutral11, Neutral12: this.Neutral12, Neutral13: this.Neutral13, Neutral14: this.Neutral14, Neutral15: this.Neutral15,
            Neutral16: this.Neutral16, Neutral17: this.Neutral17, Neutral18: this.Neutral18, Neutral19: this.Neutral19, Neutral20: this.Neutral20,
            Neutral21: this.Neutral21, Neutral22: this.Neutral22, Neutral23: this.Neutral23, Neutral24: this.Neutral24, Neutral25: this.Neutral25,
            Neutral26: this.Neutral26, Neutral27: this.Neutral27, Neutral28: this.Neutral28, Neutral29: this.Neutral29, Neutral30: this.Neutral30,
            Neutral31: this.Neutral31, Neutral32: this.Neutral32, Neutral33: this.Neutral33, Neutral34: this.Neutral34, Neutral35: this.Neutral35,
            Neutral36: this.Neutral36, Neutral37: this.Neutral37, Neutral38: this.Neutral38, Neutral39: this.Neutral39, Neutral40: this.Neutral40,
            Neutral41: this.Neutral41, Neutral42: this.Neutral42, Neutral43: this.Neutral43, Neutral44: this.Neutral44, Neutral45: this.Neutral45,
            Neutral46: this.Neutral46, Neutral47: this.Neutral47, Neutral48: this.Neutral48, Neutral49: this.Neutral49, Neutral50: this.Neutral50,
            Neutral51: this.Neutral51, Neutral52: this.Neutral52, Neutral53: this.Neutral53, Neutral54: this.Neutral54, Neutral55: this.Neutral55,
            Neutral56: this.Neutral56, Neutral57: this.Neutral57, Neutral58: this.Neutral58, Neutral59: this.Neutral59, Neutral60: this.Neutral60,
            Neutral61: this.Neutral61, Neutral62: this.Neutral62, Neutral63: this.Neutral63, Neutral64: this.Neutral64, Neutral65: this.Neutral65,
            Neutral66: this.Neutral66, Neutral67: this.Neutral67, Neutral68: this.Neutral68, Neutral69: this.Neutral69, Neutral70: this.Neutral70,
            Neutral71: this.Neutral71, Neutral72: this.Neutral72, Neutral73: this.Neutral73, Neutral74: this.Neutral74, Neutral75: this.Neutral75,
            Neutral76: this.Neutral76, Neutral77: this.Neutral77, Neutral78: this.Neutral78, Neutral79: this.Neutral79, Neutral80: this.Neutral80,
            Neutral81: this.Neutral81, Neutral82: this.Neutral82, Neutral83: this.Neutral83, Neutral84: this.Neutral84, Neutral85: this.Neutral85,
            Neutral86: this.Neutral86, Neutral87: this.Neutral87, Neutral88: this.Neutral88, Neutral89: this.Neutral89, Neutral90: this.Neutral90,
            Neutral91: this.Neutral91, Neutral92: this.Neutral92, Neutral93: this.Neutral93, Neutral94: this.Neutral94, Neutral95: this.Neutral95,
            Neutral96: this.Neutral96, Neutral97: this.Neutral97, Neutral98: this.Neutral98, Neutral99: this.Neutral99, Neutral100: this.Neutral100,
            NeutralVariant0: this.NeutralVariant0, NeutralVariant1: this.NeutralVariant1, NeutralVariant2: this.NeutralVariant2, NeutralVariant3: this.NeutralVariant3, NeutralVariant4: this.NeutralVariant4,
            NeutralVariant5: this.NeutralVariant5, NeutralVariant6: this.NeutralVariant6, NeutralVariant7: this.NeutralVariant7, NeutralVariant8: this.NeutralVariant8, NeutralVariant9: this.NeutralVariant9,
            NeutralVariant10: this.NeutralVariant10, NeutralVariant11: this.NeutralVariant11, NeutralVariant12: this.NeutralVariant12, NeutralVariant13: this.NeutralVariant13, NeutralVariant14: this.NeutralVariant14,
            NeutralVariant15: this.NeutralVariant15, NeutralVariant16: this.NeutralVariant16, NeutralVariant17: this.NeutralVariant17, NeutralVariant18: this.NeutralVariant18, NeutralVariant19: this.NeutralVariant19,
            NeutralVariant20: this.NeutralVariant20, NeutralVariant21: this.NeutralVariant21, NeutralVariant22: this.NeutralVariant22, NeutralVariant23: this.NeutralVariant23, NeutralVariant24: this.NeutralVariant24,
            NeutralVariant25: this.NeutralVariant25, NeutralVariant26: this.NeutralVariant26, NeutralVariant27: this.NeutralVariant27, NeutralVariant28: this.NeutralVariant28, NeutralVariant29: this.NeutralVariant29,
            NeutralVariant30: this.NeutralVariant30, NeutralVariant31: this.NeutralVariant31, NeutralVariant32: this.NeutralVariant32, NeutralVariant33: this.NeutralVariant33, NeutralVariant34: this.NeutralVariant34,
            NeutralVariant35: this.NeutralVariant35, NeutralVariant36: this.NeutralVariant36, NeutralVariant37: this.NeutralVariant37, NeutralVariant38: this.NeutralVariant38, NeutralVariant39: this.NeutralVariant39,
            NeutralVariant40: this.NeutralVariant40, NeutralVariant41: this.NeutralVariant41, NeutralVariant42: this.NeutralVariant42, NeutralVariant43: this.NeutralVariant43, NeutralVariant44: this.NeutralVariant44,
            NeutralVariant45: this.NeutralVariant45, NeutralVariant46: this.NeutralVariant46, NeutralVariant47: this.NeutralVariant47, NeutralVariant48: this.NeutralVariant48, NeutralVariant49: this.NeutralVariant49,
            NeutralVariant50: this.NeutralVariant50, NeutralVariant51: this.NeutralVariant51, NeutralVariant52: this.NeutralVariant52, NeutralVariant53: this.NeutralVariant53, NeutralVariant54: this.NeutralVariant54,
            NeutralVariant55: this.NeutralVariant55, NeutralVariant56: this.NeutralVariant56, NeutralVariant57: this.NeutralVariant57, NeutralVariant58: this.NeutralVariant58, NeutralVariant59: this.NeutralVariant59,
            NeutralVariant60: this.NeutralVariant60, NeutralVariant61: this.NeutralVariant61, NeutralVariant62: this.NeutralVariant62, NeutralVariant63: this.NeutralVariant63, NeutralVariant64: this.NeutralVariant64,
            NeutralVariant65: this.NeutralVariant65, NeutralVariant66: this.NeutralVariant66, NeutralVariant67: this.NeutralVariant67, NeutralVariant68: this.NeutralVariant68, NeutralVariant69: this.NeutralVariant69,
            NeutralVariant70: this.NeutralVariant70, NeutralVariant71: this.NeutralVariant71, NeutralVariant72: this.NeutralVariant72, NeutralVariant73: this.NeutralVariant73, NeutralVariant74: this.NeutralVariant74,
            NeutralVariant75: this.NeutralVariant75, NeutralVariant76: this.NeutralVariant76, NeutralVariant77: this.NeutralVariant77, NeutralVariant78: this.NeutralVariant78, NeutralVariant79: this.NeutralVariant79,
            NeutralVariant80: this.NeutralVariant80, NeutralVariant81: this.NeutralVariant81, NeutralVariant82: this.NeutralVariant82, NeutralVariant83: this.NeutralVariant83, NeutralVariant84: this.NeutralVariant84,
            NeutralVariant85: this.NeutralVariant85, NeutralVariant86: this.NeutralVariant86, NeutralVariant87: this.NeutralVariant87, NeutralVariant88: this.NeutralVariant88, NeutralVariant89: this.NeutralVariant89,
            NeutralVariant90: this.NeutralVariant90, NeutralVariant91: this.NeutralVariant91, NeutralVariant92: this.NeutralVariant92, NeutralVariant93: this.NeutralVariant93, NeutralVariant94: this.NeutralVariant94,
            NeutralVariant95: this.NeutralVariant95, NeutralVariant96: this.NeutralVariant96, NeutralVariant97: this.NeutralVariant97, NeutralVariant98: this.NeutralVariant98, NeutralVariant99: this.NeutralVariant99,
            NeutralVariant100: this.NeutralVariant100,
        } as const
    }

}
