import type { ICSSValue } from "../primitives/ICSSValue";

type PaletteCSSFallback = `--md-ref-palette-${string}-${number}` | `--md-ref-palette-${string}`
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

    public static readonly Primary0 = Palette.of(`--md-ref-palette-primary-0`, `#000000`, true)
    public static readonly Primary1 = Palette.of(`--md-ref-palette-primary-1`, `#000501`, true)
    public static readonly Primary2 = Palette.of(`--md-ref-palette-primary-2`, `#000a03`, true)
    public static readonly Primary3 = Palette.of(`--md-ref-palette-primary-3`, `#000e04`, true)
    public static readonly Primary4 = Palette.of(`--md-ref-palette-primary-4`, `#001205`, true)
    public static readonly Primary5 = Palette.of(`--md-ref-palette-primary-5`, `#001506`, true)
    public static readonly Primary6 = Palette.of(`--md-ref-palette-primary-6`, `#001808`, true)
    public static readonly Primary7 = Palette.of(`--md-ref-palette-primary-7`, `#001a09`, true)
    public static readonly Primary8 = Palette.of(`--md-ref-palette-primary-8`, `#001d0a`, true)
    public static readonly Primary9 = Palette.of(`--md-ref-palette-primary-9`, `#001f0b`, true)
    public static readonly Primary10 = Palette.of(`--md-ref-palette-primary-10`, `#00210d`, true)
    public static readonly Primary11 = Palette.of(`--md-ref-palette-primary-11`, `#00230e`, true)
    public static readonly Primary12 = Palette.of(`--md-ref-palette-primary-12`, `#00260f`, true)
    public static readonly Primary13 = Palette.of(`--md-ref-palette-primary-13`, `#002811`, true)
    public static readonly Primary14 = Palette.of(`--md-ref-palette-primary-14`, `#002a12`, true)
    public static readonly Primary15 = Palette.of(`--md-ref-palette-primary-15`, `#002d13`, true)
    public static readonly Primary16 = Palette.of(`--md-ref-palette-primary-16`, `#002f15`, true)
    public static readonly Primary17 = Palette.of(`--md-ref-palette-primary-17`, `#003216`, true)
    public static readonly Primary18 = Palette.of(`--md-ref-palette-primary-18`, `#003417`, true)
    public static readonly Primary19 = Palette.of(`--md-ref-palette-primary-19`, `#003619`, true)
    public static readonly Primary20 = Palette.of(`--md-ref-palette-primary-20`, `#00391a`, true)
    public static readonly Primary21 = Palette.of(`--md-ref-palette-primary-21`, `#003b1c`, true)
    public static readonly Primary22 = Palette.of(`--md-ref-palette-primary-22`, `#003e1d`, true)
    public static readonly Primary23 = Palette.of(`--md-ref-palette-primary-23`, `#00401e`, true)
    public static readonly Primary24 = Palette.of(`--md-ref-palette-primary-24`, `#004320`, true)
    public static readonly Primary25 = Palette.of(`--md-ref-palette-primary-25`, `#004521`, true)
    public static readonly Primary26 = Palette.of(`--md-ref-palette-primary-26`, `#004823`, true)
    public static readonly Primary27 = Palette.of(`--md-ref-palette-primary-27`, `#004b24`, true)
    public static readonly Primary28 = Palette.of(`--md-ref-palette-primary-28`, `#004d26`, true)
    public static readonly Primary29 = Palette.of(`--md-ref-palette-primary-29`, `#005027`, true)
    public static readonly Primary30 = Palette.of(`--md-ref-palette-primary-30`, `#005229`, true)
    public static readonly Primary31 = Palette.of(`--md-ref-palette-primary-31`, `#00552a`, true)
    public static readonly Primary32 = Palette.of(`--md-ref-palette-primary-32`, `#00582c`, true)
    public static readonly Primary33 = Palette.of(`--md-ref-palette-primary-33`, `#005a2d`, true)
    public static readonly Primary34 = Palette.of(`--md-ref-palette-primary-34`, `#005d2f`, true)
    public static readonly Primary35 = Palette.of(`--md-ref-palette-primary-35`, `#006030`, true)
    public static readonly Primary36 = Palette.of(`--md-ref-palette-primary-36`, `#006232`, true)
    public static readonly Primary37 = Palette.of(`--md-ref-palette-primary-37`, `#006533`, true)
    public static readonly Primary38 = Palette.of(`--md-ref-palette-primary-38`, `#006835`, true)
    public static readonly Primary39 = Palette.of(`--md-ref-palette-primary-39`, `#006a36`, true)
    public static readonly Primary40 = Palette.of(`--md-ref-palette-primary-40`, `#006d38`, true)
    public static readonly Primary41 = Palette.of(`--md-ref-palette-primary-41`, `#007039`, true)
    public static readonly Primary42 = Palette.of(`--md-ref-palette-primary-42`, `#00733b`, true)
    public static readonly Primary43 = Palette.of(`--md-ref-palette-primary-43`, `#00753d`, true)
    public static readonly Primary44 = Palette.of(`--md-ref-palette-primary-44`, `#00783e`, true)
    public static readonly Primary45 = Palette.of(`--md-ref-palette-primary-45`, `#007b40`, true)
    public static readonly Primary46 = Palette.of(`--md-ref-palette-primary-46`, `#007e41`, true)
    public static readonly Primary47 = Palette.of(`--md-ref-palette-primary-47`, `#008143`, true)
    public static readonly Primary48 = Palette.of(`--md-ref-palette-primary-48`, `#008444`, true)
    public static readonly Primary49 = Palette.of(`--md-ref-palette-primary-49`, `#008646`, true)
    public static readonly Primary50 = Palette.of(`--md-ref-palette-primary-50`, `#008948`, true)
    public static readonly Primary51 = Palette.of(`--md-ref-palette-primary-51`, `#008c49`, true)
    public static readonly Primary52 = Palette.of(`--md-ref-palette-primary-52`, `#008f4b`, true)
    public static readonly Primary53 = Palette.of(`--md-ref-palette-primary-53`, `#00924d`, true)
    public static readonly Primary54 = Palette.of(`--md-ref-palette-primary-54`, `#00954e`, true)
    public static readonly Primary55 = Palette.of(`--md-ref-palette-primary-55`, `#009850`, true)
    public static readonly Primary56 = Palette.of(`--md-ref-palette-primary-56`, `#009b52`, true)
    public static readonly Primary57 = Palette.of(`--md-ref-palette-primary-57`, `#039d54`, true)
    public static readonly Primary58 = Palette.of(`--md-ref-palette-primary-58`, `#0da056`, true)
    public static readonly Primary59 = Palette.of(`--md-ref-palette-primary-59`, `#14a358`, true)
    public static readonly Primary60 = Palette.of(`--md-ref-palette-primary-60`, `#1aa65b`, true)
    public static readonly Primary61 = Palette.of(`--md-ref-palette-primary-61`, `#20a85d`, true)
    public static readonly Primary62 = Palette.of(`--md-ref-palette-primary-62`, `#24ab5f`, true)
    public static readonly Primary63 = Palette.of(`--md-ref-palette-primary-63`, `#29ae62`, true)
    public static readonly Primary64 = Palette.of(`--md-ref-palette-primary-64`, `#2db164`, true)
    public static readonly Primary65 = Palette.of(`--md-ref-palette-primary-65`, `#31b367`, true)
    public static readonly Primary66 = Palette.of(`--md-ref-palette-primary-66`, `#34b669`, true)
    public static readonly Primary67 = Palette.of(`--md-ref-palette-primary-67`, `#38b96b`, true)
    public static readonly Primary68 = Palette.of(`--md-ref-palette-primary-68`, `#3bbc6e`, true)
    public static readonly Primary69 = Palette.of(`--md-ref-palette-primary-69`, `#3fbf70`, true)
    public static readonly Primary70 = Palette.of(`--md-ref-palette-primary-70`, `#42c173`, true)
    public static readonly Primary71 = Palette.of(`--md-ref-palette-primary-71`, `#46c475`, true)
    public static readonly Primary72 = Palette.of(`--md-ref-palette-primary-72`, `#49c778`, true)
    public static readonly Primary73 = Palette.of(`--md-ref-palette-primary-73`, `#4cca7a`, true)
    public static readonly Primary74 = Palette.of(`--md-ref-palette-primary-74`, `#4fcd7d`, true)
    public static readonly Primary75 = Palette.of(`--md-ref-palette-primary-75`, `#52d07f`, true)
    public static readonly Primary76 = Palette.of(`--md-ref-palette-primary-76`, `#55d282`, true)
    public static readonly Primary77 = Palette.of(`--md-ref-palette-primary-77`, `#58d584`, true)
    public static readonly Primary78 = Palette.of(`--md-ref-palette-primary-78`, `#5bd887`, true)
    public static readonly Primary79 = Palette.of(`--md-ref-palette-primary-79`, `#5edb89`, true)
    public static readonly Primary80 = Palette.of(`--md-ref-palette-primary-80`, `#61de8c`, true)
    public static readonly Primary81 = Palette.of(`--md-ref-palette-primary-81`, `#64e18e`, true)
    public static readonly Primary82 = Palette.of(`--md-ref-palette-primary-82`, `#67e491`, true)
    public static readonly Primary83 = Palette.of(`--md-ref-palette-primary-83`, `#6ae794`, true)
    public static readonly Primary84 = Palette.of(`--md-ref-palette-primary-84`, `#6dea96`, true)
    public static readonly Primary85 = Palette.of(`--md-ref-palette-primary-85`, `#70ec99`, true)
    public static readonly Primary86 = Palette.of(`--md-ref-palette-primary-86`, `#73ef9b`, true)
    public static readonly Primary87 = Palette.of(`--md-ref-palette-primary-87`, `#76f29e`, true)
    public static readonly Primary88 = Palette.of(`--md-ref-palette-primary-88`, `#79f5a1`, true)
    public static readonly Primary89 = Palette.of(`--md-ref-palette-primary-89`, `#7cf8a3`, true)
    public static readonly Primary90 = Palette.of(`--md-ref-palette-primary-90`, `#7ffba6`, true)
    public static readonly Primary91 = Palette.of(`--md-ref-palette-primary-91`, `#82fea8`, true)
    public static readonly Primary92 = Palette.of(`--md-ref-palette-primary-92`, `#91ffb0`, true)
    public static readonly Primary93 = Palette.of(`--md-ref-palette-primary-93`, `#a4ffbb`, true)
    public static readonly Primary94 = Palette.of(`--md-ref-palette-primary-94`, `#b4ffc5`, true)
    public static readonly Primary95 = Palette.of(`--md-ref-palette-primary-95`, `#c3ffce`, true)
    public static readonly Primary96 = Palette.of(`--md-ref-palette-primary-96`, `#d1ffd8`, true)
    public static readonly Primary97 = Palette.of(`--md-ref-palette-primary-97`, `#deffe1`, true)
    public static readonly Primary98 = Palette.of(`--md-ref-palette-primary-98`, `#eaffea`, true)
    public static readonly Primary99 = Palette.of(`--md-ref-palette-primary-99`, `#f5fff3`, true)
    public static readonly Primary100 = Palette.of(`--md-ref-palette-primary-100`, `#ffffff`, true)
    public static readonly Secondary0 = Palette.of(`--md-ref-palette-secondary-0`, `#000000`, true)
    public static readonly Secondary1 = Palette.of(`--md-ref-palette-secondary-1`, `#000501`, true)
    public static readonly Secondary2 = Palette.of(`--md-ref-palette-secondary-2`, `#000a03`, true)
    public static readonly Secondary3 = Palette.of(`--md-ref-palette-secondary-3`, `#000e04`, true)
    public static readonly Secondary4 = Palette.of(`--md-ref-palette-secondary-4`, `#001205`, true)
    public static readonly Secondary5 = Palette.of(`--md-ref-palette-secondary-5`, `#001506`, true)
    public static readonly Secondary6 = Palette.of(`--md-ref-palette-secondary-6`, `#001808`, true)
    public static readonly Secondary7 = Palette.of(`--md-ref-palette-secondary-7`, `#001a09`, true)
    public static readonly Secondary8 = Palette.of(`--md-ref-palette-secondary-8`, `#001d0a`, true)
    public static readonly Secondary9 = Palette.of(`--md-ref-palette-secondary-9`, `#001f0b`, true)
    public static readonly Secondary10 = Palette.of(`--md-ref-palette-secondary-10`, `#00210d`, true)
    public static readonly Secondary11 = Palette.of(`--md-ref-palette-secondary-11`, `#00230e`, true)
    public static readonly Secondary12 = Palette.of(`--md-ref-palette-secondary-12`, `#00260f`, true)
    public static readonly Secondary13 = Palette.of(`--md-ref-palette-secondary-13`, `#002811`, true)
    public static readonly Secondary14 = Palette.of(`--md-ref-palette-secondary-14`, `#002a12`, true)
    public static readonly Secondary15 = Palette.of(`--md-ref-palette-secondary-15`, `#002d13`, true)
    public static readonly Secondary16 = Palette.of(`--md-ref-palette-secondary-16`, `#002f15`, true)
    public static readonly Secondary17 = Palette.of(`--md-ref-palette-secondary-17`, `#023116`, true)
    public static readonly Secondary18 = Palette.of(`--md-ref-palette-secondary-18`, `#043418`, true)
    public static readonly Secondary19 = Palette.of(`--md-ref-palette-secondary-19`, `#07361a`, true)
    public static readonly Secondary20 = Palette.of(`--md-ref-palette-secondary-20`, `#0a381c`, true)
    public static readonly Secondary21 = Palette.of(`--md-ref-palette-secondary-21`, `#0d3a1e`, true)
    public static readonly Secondary22 = Palette.of(`--md-ref-palette-secondary-22`, `#0f3d21`, true)
    public static readonly Secondary23 = Palette.of(`--md-ref-palette-secondary-23`, `#123f23`, true)
    public static readonly Secondary24 = Palette.of(`--md-ref-palette-secondary-24`, `#154125`, true)
    public static readonly Secondary25 = Palette.of(`--md-ref-palette-secondary-25`, `#174427`, true)
    public static readonly Secondary26 = Palette.of(`--md-ref-palette-secondary-26`, `#1a4629`, true)
    public static readonly Secondary27 = Palette.of(`--md-ref-palette-secondary-27`, `#1c482b`, true)
    public static readonly Secondary28 = Palette.of(`--md-ref-palette-secondary-28`, `#1f4b2d`, true)
    public static readonly Secondary29 = Palette.of(`--md-ref-palette-secondary-29`, `#214d2f`, true)
    public static readonly Secondary30 = Palette.of(`--md-ref-palette-secondary-30`, `#244f31`, true)
    public static readonly Secondary31 = Palette.of(`--md-ref-palette-secondary-31`, `#265233`, true)
    public static readonly Secondary32 = Palette.of(`--md-ref-palette-secondary-32`, `#295436`, true)
    public static readonly Secondary33 = Palette.of(`--md-ref-palette-secondary-33`, `#2b5738`, true)
    public static readonly Secondary34 = Palette.of(`--md-ref-palette-secondary-34`, `#2d593a`, true)
    public static readonly Secondary35 = Palette.of(`--md-ref-palette-secondary-35`, `#305b3c`, true)
    public static readonly Secondary36 = Palette.of(`--md-ref-palette-secondary-36`, `#325e3e`, true)
    public static readonly Secondary37 = Palette.of(`--md-ref-palette-secondary-37`, `#356041`, true)
    public static readonly Secondary38 = Palette.of(`--md-ref-palette-secondary-38`, `#376343`, true)
    public static readonly Secondary39 = Palette.of(`--md-ref-palette-secondary-39`, `#396545`, true)
    public static readonly Secondary40 = Palette.of(`--md-ref-palette-secondary-40`, `#3c6847`, true)
    public static readonly Secondary41 = Palette.of(`--md-ref-palette-secondary-41`, `#3e6a4a`, true)
    public static readonly Secondary42 = Palette.of(`--md-ref-palette-secondary-42`, `#416d4c`, true)
    public static readonly Secondary43 = Palette.of(`--md-ref-palette-secondary-43`, `#436f4e`, true)
    public static readonly Secondary44 = Palette.of(`--md-ref-palette-secondary-44`, `#467251`, true)
    public static readonly Secondary45 = Palette.of(`--md-ref-palette-secondary-45`, `#487453`, true)
    public static readonly Secondary46 = Palette.of(`--md-ref-palette-secondary-46`, `#4a7755`, true)
    public static readonly Secondary47 = Palette.of(`--md-ref-palette-secondary-47`, `#4d7958`, true)
    public static readonly Secondary48 = Palette.of(`--md-ref-palette-secondary-48`, `#4f7c5a`, true)
    public static readonly Secondary49 = Palette.of(`--md-ref-palette-secondary-49`, `#527e5c`, true)
    public static readonly Secondary50 = Palette.of(`--md-ref-palette-secondary-50`, `#54815f`, true)
    public static readonly Secondary51 = Palette.of(`--md-ref-palette-secondary-51`, `#578461`, true)
    public static readonly Secondary52 = Palette.of(`--md-ref-palette-secondary-52`, `#598664`, true)
    public static readonly Secondary53 = Palette.of(`--md-ref-palette-secondary-53`, `#5c8966`, true)
    public static readonly Secondary54 = Palette.of(`--md-ref-palette-secondary-54`, `#5e8b68`, true)
    public static readonly Secondary55 = Palette.of(`--md-ref-palette-secondary-55`, `#618e6b`, true)
    public static readonly Secondary56 = Palette.of(`--md-ref-palette-secondary-56`, `#63916d`, true)
    public static readonly Secondary57 = Palette.of(`--md-ref-palette-secondary-57`, `#669370`, true)
    public static readonly Secondary58 = Palette.of(`--md-ref-palette-secondary-58`, `#689672`, true)
    public static readonly Secondary59 = Palette.of(`--md-ref-palette-secondary-59`, `#6b9975`, true)
    public static readonly Secondary60 = Palette.of(`--md-ref-palette-secondary-60`, `#6d9b77`, true)
    public static readonly Secondary61 = Palette.of(`--md-ref-palette-secondary-61`, `#709e7a`, true)
    public static readonly Secondary62 = Palette.of(`--md-ref-palette-secondary-62`, `#73a17c`, true)
    public static readonly Secondary63 = Palette.of(`--md-ref-palette-secondary-63`, `#75a37f`, true)
    public static readonly Secondary64 = Palette.of(`--md-ref-palette-secondary-64`, `#78a681`, true)
    public static readonly Secondary65 = Palette.of(`--md-ref-palette-secondary-65`, `#7aa984`, true)
    public static readonly Secondary66 = Palette.of(`--md-ref-palette-secondary-66`, `#7dab86`, true)
    public static readonly Secondary67 = Palette.of(`--md-ref-palette-secondary-67`, `#7fae89`, true)
    public static readonly Secondary68 = Palette.of(`--md-ref-palette-secondary-68`, `#82b18b`, true)
    public static readonly Secondary69 = Palette.of(`--md-ref-palette-secondary-69`, `#85b38e`, true)
    public static readonly Secondary70 = Palette.of(`--md-ref-palette-secondary-70`, `#87b690`, true)
    public static readonly Secondary71 = Palette.of(`--md-ref-palette-secondary-71`, `#8ab993`, true)
    public static readonly Secondary72 = Palette.of(`--md-ref-palette-secondary-72`, `#8dbc96`, true)
    public static readonly Secondary73 = Palette.of(`--md-ref-palette-secondary-73`, `#8fbe98`, true)
    public static readonly Secondary74 = Palette.of(`--md-ref-palette-secondary-74`, `#92c19b`, true)
    public static readonly Secondary75 = Palette.of(`--md-ref-palette-secondary-75`, `#95c49d`, true)
    public static readonly Secondary76 = Palette.of(`--md-ref-palette-secondary-76`, `#97c7a0`, true)
    public static readonly Secondary77 = Palette.of(`--md-ref-palette-secondary-77`, `#9acaa3`, true)
    public static readonly Secondary78 = Palette.of(`--md-ref-palette-secondary-78`, `#9dcca5`, true)
    public static readonly Secondary79 = Palette.of(`--md-ref-palette-secondary-79`, `#9fcfa8`, true)
    public static readonly Secondary80 = Palette.of(`--md-ref-palette-secondary-80`, `#a2d2ab`, true)
    public static readonly Secondary81 = Palette.of(`--md-ref-palette-secondary-81`, `#a5d5ad`, true)
    public static readonly Secondary82 = Palette.of(`--md-ref-palette-secondary-82`, `#a7d8b0`, true)
    public static readonly Secondary83 = Palette.of(`--md-ref-palette-secondary-83`, `#aadab3`, true)
    public static readonly Secondary84 = Palette.of(`--md-ref-palette-secondary-84`, `#adddb5`, true)
    public static readonly Secondary85 = Palette.of(`--md-ref-palette-secondary-85`, `#b0e0b8`, true)
    public static readonly Secondary86 = Palette.of(`--md-ref-palette-secondary-86`, `#b2e3bb`, true)
    public static readonly Secondary87 = Palette.of(`--md-ref-palette-secondary-87`, `#b5e6bd`, true)
    public static readonly Secondary88 = Palette.of(`--md-ref-palette-secondary-88`, `#b8e9c0`, true)
    public static readonly Secondary89 = Palette.of(`--md-ref-palette-secondary-89`, `#bbecc3`, true)
    public static readonly Secondary90 = Palette.of(`--md-ref-palette-secondary-90`, `#bdeec5`, true)
    public static readonly Secondary91 = Palette.of(`--md-ref-palette-secondary-91`, `#c0f1c8`, true)
    public static readonly Secondary92 = Palette.of(`--md-ref-palette-secondary-92`, `#c3f4cb`, true)
    public static readonly Secondary93 = Palette.of(`--md-ref-palette-secondary-93`, `#c6f7ce`, true)
    public static readonly Secondary94 = Palette.of(`--md-ref-palette-secondary-94`, `#c8fad0`, true)
    public static readonly Secondary95 = Palette.of(`--md-ref-palette-secondary-95`, `#cbfdd3`, true)
    public static readonly Secondary96 = Palette.of(`--md-ref-palette-secondary-96`, `#d1ffd8`, true)
    public static readonly Secondary97 = Palette.of(`--md-ref-palette-secondary-97`, `#deffe1`, true)
    public static readonly Secondary98 = Palette.of(`--md-ref-palette-secondary-98`, `#eaffea`, true)
    public static readonly Secondary99 = Palette.of(`--md-ref-palette-secondary-99`, `#f5fff3`, true)
    public static readonly Secondary100 = Palette.of(`--md-ref-palette-secondary-100`, `#ffffff`, true)
    public static readonly Tertiary0 = Palette.of(`--md-ref-palette-tertiary-0`, `#000000`, true)
    public static readonly Tertiary1 = Palette.of(`--md-ref-palette-tertiary-1`, `#0b0200`, true)
    public static readonly Tertiary2 = Palette.of(`--md-ref-palette-tertiary-2`, `#140300`, true)
    public static readonly Tertiary3 = Palette.of(`--md-ref-palette-tertiary-3`, `#1a0500`, true)
    public static readonly Tertiary4 = Palette.of(`--md-ref-palette-tertiary-4`, `#1f0700`, true)
    public static readonly Tertiary5 = Palette.of(`--md-ref-palette-tertiary-5`, `#230900`, true)
    public static readonly Tertiary6 = Palette.of(`--md-ref-palette-tertiary-6`, `#270a00`, true)
    public static readonly Tertiary7 = Palette.of(`--md-ref-palette-tertiary-7`, `#2b0c00`, true)
    public static readonly Tertiary8 = Palette.of(`--md-ref-palette-tertiary-8`, `#2e0d00`, true)
    public static readonly Tertiary9 = Palette.of(`--md-ref-palette-tertiary-9`, `#310f00`, true)
    public static readonly Tertiary10 = Palette.of(`--md-ref-palette-tertiary-10`, `#351000`, true)
    public static readonly Tertiary11 = Palette.of(`--md-ref-palette-tertiary-11`, `#381200`, true)
    public static readonly Tertiary12 = Palette.of(`--md-ref-palette-tertiary-12`, `#3b1300`, true)
    public static readonly Tertiary13 = Palette.of(`--md-ref-palette-tertiary-13`, `#3e1500`, true)
    public static readonly Tertiary14 = Palette.of(`--md-ref-palette-tertiary-14`, `#421600`, true)
    public static readonly Tertiary15 = Palette.of(`--md-ref-palette-tertiary-15`, `#451800`, true)
    public static readonly Tertiary16 = Palette.of(`--md-ref-palette-tertiary-16`, `#481900`, true)
    public static readonly Tertiary17 = Palette.of(`--md-ref-palette-tertiary-17`, `#4c1b00`, true)
    public static readonly Tertiary18 = Palette.of(`--md-ref-palette-tertiary-18`, `#4f1c00`, true)
    public static readonly Tertiary19 = Palette.of(`--md-ref-palette-tertiary-19`, `#521e01`, true)
    public static readonly Tertiary20 = Palette.of(`--md-ref-palette-tertiary-20`, `#552002`, true)
    public static readonly Tertiary21 = Palette.of(`--md-ref-palette-tertiary-21`, `#582303`, true)
    public static readonly Tertiary22 = Palette.of(`--md-ref-palette-tertiary-22`, `#5b2505`, true)
    public static readonly Tertiary23 = Palette.of(`--md-ref-palette-tertiary-23`, `#5d2706`, true)
    public static readonly Tertiary24 = Palette.of(`--md-ref-palette-tertiary-24`, `#602908`, true)
    public static readonly Tertiary25 = Palette.of(`--md-ref-palette-tertiary-25`, `#632b0a`, true)
    public static readonly Tertiary26 = Palette.of(`--md-ref-palette-tertiary-26`, `#662d0d`, true)
    public static readonly Tertiary27 = Palette.of(`--md-ref-palette-tertiary-27`, `#692f0f`, true)
    public static readonly Tertiary28 = Palette.of(`--md-ref-palette-tertiary-28`, `#6c3211`, true)
    public static readonly Tertiary29 = Palette.of(`--md-ref-palette-tertiary-29`, `#6f3413`, true)
    public static readonly Tertiary30 = Palette.of(`--md-ref-palette-tertiary-30`, `#723615`, true)
    public static readonly Tertiary31 = Palette.of(`--md-ref-palette-tertiary-31`, `#743817`, true)
    public static readonly Tertiary32 = Palette.of(`--md-ref-palette-tertiary-32`, `#773a19`, true)
    public static readonly Tertiary33 = Palette.of(`--md-ref-palette-tertiary-33`, `#7a3d1b`, true)
    public static readonly Tertiary34 = Palette.of(`--md-ref-palette-tertiary-34`, `#7d3f1d`, true)
    public static readonly Tertiary35 = Palette.of(`--md-ref-palette-tertiary-35`, `#804120`, true)
    public static readonly Tertiary36 = Palette.of(`--md-ref-palette-tertiary-36`, `#834322`, true)
    public static readonly Tertiary37 = Palette.of(`--md-ref-palette-tertiary-37`, `#864624`, true)
    public static readonly Tertiary38 = Palette.of(`--md-ref-palette-tertiary-38`, `#894826`, true)
    public static readonly Tertiary39 = Palette.of(`--md-ref-palette-tertiary-39`, `#8c4a28`, true)
    public static readonly Tertiary40 = Palette.of(`--md-ref-palette-tertiary-40`, `#8f4d2a`, true)
    public static readonly Tertiary41 = Palette.of(`--md-ref-palette-tertiary-41`, `#924f2c`, true)
    public static readonly Tertiary42 = Palette.of(`--md-ref-palette-tertiary-42`, `#95512e`, true)
    public static readonly Tertiary43 = Palette.of(`--md-ref-palette-tertiary-43`, `#985431`, true)
    public static readonly Tertiary44 = Palette.of(`--md-ref-palette-tertiary-44`, `#9b5633`, true)
    public static readonly Tertiary45 = Palette.of(`--md-ref-palette-tertiary-45`, `#9e5935`, true)
    public static readonly Tertiary46 = Palette.of(`--md-ref-palette-tertiary-46`, `#a05b37`, true)
    public static readonly Tertiary47 = Palette.of(`--md-ref-palette-tertiary-47`, `#a35d39`, true)
    public static readonly Tertiary48 = Palette.of(`--md-ref-palette-tertiary-48`, `#a6603b`, true)
    public static readonly Tertiary49 = Palette.of(`--md-ref-palette-tertiary-49`, `#a9623e`, true)
    public static readonly Tertiary50 = Palette.of(`--md-ref-palette-tertiary-50`, `#ac6540`, true)
    public static readonly Tertiary51 = Palette.of(`--md-ref-palette-tertiary-51`, `#af6742`, true)
    public static readonly Tertiary52 = Palette.of(`--md-ref-palette-tertiary-52`, `#b26944`, true)
    public static readonly Tertiary53 = Palette.of(`--md-ref-palette-tertiary-53`, `#b66c47`, true)
    public static readonly Tertiary54 = Palette.of(`--md-ref-palette-tertiary-54`, `#b96e49`, true)
    public static readonly Tertiary55 = Palette.of(`--md-ref-palette-tertiary-55`, `#bc714b`, true)
    public static readonly Tertiary56 = Palette.of(`--md-ref-palette-tertiary-56`, `#bf734d`, true)
    public static readonly Tertiary57 = Palette.of(`--md-ref-palette-tertiary-57`, `#c27650`, true)
    public static readonly Tertiary58 = Palette.of(`--md-ref-palette-tertiary-58`, `#c57852`, true)
    public static readonly Tertiary59 = Palette.of(`--md-ref-palette-tertiary-59`, `#c87b54`, true)
    public static readonly Tertiary60 = Palette.of(`--md-ref-palette-tertiary-60`, `#cb7d57`, true)
    public static readonly Tertiary61 = Palette.of(`--md-ref-palette-tertiary-61`, `#ce8059`, true)
    public static readonly Tertiary62 = Palette.of(`--md-ref-palette-tertiary-62`, `#d1825b`, true)
    public static readonly Tertiary63 = Palette.of(`--md-ref-palette-tertiary-63`, `#d4855e`, true)
    public static readonly Tertiary64 = Palette.of(`--md-ref-palette-tertiary-64`, `#d78860`, true)
    public static readonly Tertiary65 = Palette.of(`--md-ref-palette-tertiary-65`, `#da8a62`, true)
    public static readonly Tertiary66 = Palette.of(`--md-ref-palette-tertiary-66`, `#dd8d65`, true)
    public static readonly Tertiary67 = Palette.of(`--md-ref-palette-tertiary-67`, `#e08f67`, true)
    public static readonly Tertiary68 = Palette.of(`--md-ref-palette-tertiary-68`, `#e4926a`, true)
    public static readonly Tertiary69 = Palette.of(`--md-ref-palette-tertiary-69`, `#e7946c`, true)
    public static readonly Tertiary70 = Palette.of(`--md-ref-palette-tertiary-70`, `#ea976e`, true)
    public static readonly Tertiary71 = Palette.of(`--md-ref-palette-tertiary-71`, `#ed9a71`, true)
    public static readonly Tertiary72 = Palette.of(`--md-ref-palette-tertiary-72`, `#f09c73`, true)
    public static readonly Tertiary73 = Palette.of(`--md-ref-palette-tertiary-73`, `#f39f76`, true)
    public static readonly Tertiary74 = Palette.of(`--md-ref-palette-tertiary-74`, `#f6a278`, true)
    public static readonly Tertiary75 = Palette.of(`--md-ref-palette-tertiary-75`, `#f9a47b`, true)
    public static readonly Tertiary76 = Palette.of(`--md-ref-palette-tertiary-76`, `#fda77d`, true)
    public static readonly Tertiary77 = Palette.of(`--md-ref-palette-tertiary-77`, `#ffaa80`, true)
    public static readonly Tertiary78 = Palette.of(`--md-ref-palette-tertiary-78`, `#ffae87`, true)
    public static readonly Tertiary79 = Palette.of(`--md-ref-palette-tertiary-79`, `#ffb28d`, true)
    public static readonly Tertiary80 = Palette.of(`--md-ref-palette-tertiary-80`, `#ffb693`, true)
    public static readonly Tertiary81 = Palette.of(`--md-ref-palette-tertiary-81`, `#ffba99`, true)
    public static readonly Tertiary82 = Palette.of(`--md-ref-palette-tertiary-82`, `#ffbd9f`, true)
    public static readonly Tertiary83 = Palette.of(`--md-ref-palette-tertiary-83`, `#ffc1a4`, true)
    public static readonly Tertiary84 = Palette.of(`--md-ref-palette-tertiary-84`, `#ffc5aa`, true)
    public static readonly Tertiary85 = Palette.of(`--md-ref-palette-tertiary-85`, `#ffc9b0`, true)
    public static readonly Tertiary86 = Palette.of(`--md-ref-palette-tertiary-86`, `#ffccb6`, true)
    public static readonly Tertiary87 = Palette.of(`--md-ref-palette-tertiary-87`, `#ffd0bb`, true)
    public static readonly Tertiary88 = Palette.of(`--md-ref-palette-tertiary-88`, `#ffd4c1`, true)
    public static readonly Tertiary89 = Palette.of(`--md-ref-palette-tertiary-89`, `#ffd7c6`, true)
    public static readonly Tertiary90 = Palette.of(`--md-ref-palette-tertiary-90`, `#ffdbcc`, true)
    public static readonly Tertiary91 = Palette.of(`--md-ref-palette-tertiary-91`, `#ffdfd1`, true)
    public static readonly Tertiary92 = Palette.of(`--md-ref-palette-tertiary-92`, `#ffe2d6`, true)
    public static readonly Tertiary93 = Palette.of(`--md-ref-palette-tertiary-93`, `#ffe6dc`, true)
    public static readonly Tertiary94 = Palette.of(`--md-ref-palette-tertiary-94`, `#ffeae1`, true)
    public static readonly Tertiary95 = Palette.of(`--md-ref-palette-tertiary-95`, `#ffede6`, true)
    public static readonly Tertiary96 = Palette.of(`--md-ref-palette-tertiary-96`, `#fff1eb`, true)
    public static readonly Tertiary97 = Palette.of(`--md-ref-palette-tertiary-97`, `#fff4f1`, true)
    public static readonly Tertiary98 = Palette.of(`--md-ref-palette-tertiary-98`, `#fff8f6`, true)
    public static readonly Tertiary99 = Palette.of(`--md-ref-palette-tertiary-99`, `#fffbff`, true)
    public static readonly Tertiary100 = Palette.of(`--md-ref-palette-tertiary-100`, `#ffffff`, true)
    public static readonly Error0 = Palette.of(`--md-ref-palette-error-0`, `#000000`, true)
    public static readonly Error1 = Palette.of(`--md-ref-palette-error-1`, `#100000`, true)
    public static readonly Error2 = Palette.of(`--md-ref-palette-error-2`, `#1a0000`, true)
    public static readonly Error3 = Palette.of(`--md-ref-palette-error-3`, `#210001`, true)
    public static readonly Error4 = Palette.of(`--md-ref-palette-error-4`, `#280001`, true)
    public static readonly Error5 = Palette.of(`--md-ref-palette-error-5`, `#2d0001`, true)
    public static readonly Error6 = Palette.of(`--md-ref-palette-error-6`, `#310001`, true)
    public static readonly Error7 = Palette.of(`--md-ref-palette-error-7`, `#360001`, true)
    public static readonly Error8 = Palette.of(`--md-ref-palette-error-8`, `#390001`, true)
    public static readonly Error9 = Palette.of(`--md-ref-palette-error-9`, `#3d0002`, true)
    public static readonly Error10 = Palette.of(`--md-ref-palette-error-10`, `#410002`, true)
    public static readonly Error11 = Palette.of(`--md-ref-palette-error-11`, `#450002`, true)
    public static readonly Error12 = Palette.of(`--md-ref-palette-error-12`, `#490002`, true)
    public static readonly Error13 = Palette.of(`--md-ref-palette-error-13`, `#4d0002`, true)
    public static readonly Error14 = Palette.of(`--md-ref-palette-error-14`, `#500003`, true)
    public static readonly Error15 = Palette.of(`--md-ref-palette-error-15`, `#540003`, true)
    public static readonly Error16 = Palette.of(`--md-ref-palette-error-16`, `#580003`, true)
    public static readonly Error17 = Palette.of(`--md-ref-palette-error-17`, `#5c0004`, true)
    public static readonly Error18 = Palette.of(`--md-ref-palette-error-18`, `#600004`, true)
    public static readonly Error19 = Palette.of(`--md-ref-palette-error-19`, `#640004`, true)
    public static readonly Error20 = Palette.of(`--md-ref-palette-error-20`, `#690005`, true)
    public static readonly Error21 = Palette.of(`--md-ref-palette-error-21`, `#6d0005`, true)
    public static readonly Error22 = Palette.of(`--md-ref-palette-error-22`, `#710005`, true)
    public static readonly Error23 = Palette.of(`--md-ref-palette-error-23`, `#750006`, true)
    public static readonly Error24 = Palette.of(`--md-ref-palette-error-24`, `#790006`, true)
    public static readonly Error25 = Palette.of(`--md-ref-palette-error-25`, `#7e0007`, true)
    public static readonly Error26 = Palette.of(`--md-ref-palette-error-26`, `#820007`, true)
    public static readonly Error27 = Palette.of(`--md-ref-palette-error-27`, `#860008`, true)
    public static readonly Error28 = Palette.of(`--md-ref-palette-error-28`, `#8a0008`, true)
    public static readonly Error29 = Palette.of(`--md-ref-palette-error-29`, `#8f0009`, true)
    public static readonly Error30 = Palette.of(`--md-ref-palette-error-30`, `#93000a`, true)
    public static readonly Error31 = Palette.of(`--md-ref-palette-error-31`, `#98000a`, true)
    public static readonly Error32 = Palette.of(`--md-ref-palette-error-32`, `#9c000b`, true)
    public static readonly Error33 = Palette.of(`--md-ref-palette-error-33`, `#a0000c`, true)
    public static readonly Error34 = Palette.of(`--md-ref-palette-error-34`, `#a4020d`, true)
    public static readonly Error35 = Palette.of(`--md-ref-palette-error-35`, `#a80710`, true)
    public static readonly Error36 = Palette.of(`--md-ref-palette-error-36`, `#ac0c12`, true)
    public static readonly Error37 = Palette.of(`--md-ref-palette-error-37`, `#af1014`, true)
    public static readonly Error38 = Palette.of(`--md-ref-palette-error-38`, `#b31416`, true)
    public static readonly Error39 = Palette.of(`--md-ref-palette-error-39`, `#b61718`, true)
    public static readonly Error40 = Palette.of(`--md-ref-palette-error-40`, `#ba1a1a`, true)
    public static readonly Error41 = Palette.of(`--md-ref-palette-error-41`, `#bd1e1d`, true)
    public static readonly Error42 = Palette.of(`--md-ref-palette-error-42`, `#c1211f`, true)
    public static readonly Error43 = Palette.of(`--md-ref-palette-error-43`, `#c52421`, true)
    public static readonly Error44 = Palette.of(`--md-ref-palette-error-44`, `#c82623`, true)
    public static readonly Error45 = Palette.of(`--md-ref-palette-error-45`, `#cc2925`, true)
    public static readonly Error46 = Palette.of(`--md-ref-palette-error-46`, `#cf2c27`, true)
    public static readonly Error47 = Palette.of(`--md-ref-palette-error-47`, `#d32f29`, true)
    public static readonly Error48 = Palette.of(`--md-ref-palette-error-48`, `#d7322c`, true)
    public static readonly Error49 = Palette.of(`--md-ref-palette-error-49`, `#da342e`, true)
    public static readonly Error50 = Palette.of(`--md-ref-palette-error-50`, `#de3730`, true)
    public static readonly Error51 = Palette.of(`--md-ref-palette-error-51`, `#e13a32`, true)
    public static readonly Error52 = Palette.of(`--md-ref-palette-error-52`, `#e53c34`, true)
    public static readonly Error53 = Palette.of(`--md-ref-palette-error-53`, `#e93f36`, true)
    public static readonly Error54 = Palette.of(`--md-ref-palette-error-54`, `#ec4139`, true)
    public static readonly Error55 = Palette.of(`--md-ref-palette-error-55`, `#f0443b`, true)
    public static readonly Error56 = Palette.of(`--md-ref-palette-error-56`, `#f3473d`, true)
    public static readonly Error57 = Palette.of(`--md-ref-palette-error-57`, `#f7493f`, true)
    public static readonly Error58 = Palette.of(`--md-ref-palette-error-58`, `#fb4c42`, true)
    public static readonly Error59 = Palette.of(`--md-ref-palette-error-59`, `#fe4e44`, true)
    public static readonly Error60 = Palette.of(`--md-ref-palette-error-60`, `#ff5449`, true)
    public static readonly Error61 = Palette.of(`--md-ref-palette-error-61`, `#ff5b4f`, true)
    public static readonly Error62 = Palette.of(`--md-ref-palette-error-62`, `#ff6154`, true)
    public static readonly Error63 = Palette.of(`--md-ref-palette-error-63`, `#ff665a`, true)
    public static readonly Error64 = Palette.of(`--md-ref-palette-error-64`, `#ff6c5f`, true)
    public static readonly Error65 = Palette.of(`--md-ref-palette-error-65`, `#ff7164`, true)
    public static readonly Error66 = Palette.of(`--md-ref-palette-error-66`, `#ff7669`, true)
    public static readonly Error67 = Palette.of(`--md-ref-palette-error-67`, `#ff7b6e`, true)
    public static readonly Error68 = Palette.of(`--md-ref-palette-error-68`, `#ff8073`, true)
    public static readonly Error69 = Palette.of(`--md-ref-palette-error-69`, `#ff8578`, true)
    public static readonly Error70 = Palette.of(`--md-ref-palette-error-70`, `#ff897d`, true)
    public static readonly Error71 = Palette.of(`--md-ref-palette-error-71`, `#ff8e82`, true)
    public static readonly Error72 = Palette.of(`--md-ref-palette-error-72`, `#ff9286`, true)
    public static readonly Error73 = Palette.of(`--md-ref-palette-error-73`, `#ff978b`, true)
    public static readonly Error74 = Palette.of(`--md-ref-palette-error-74`, `#ff9b90`, true)
    public static readonly Error75 = Palette.of(`--md-ref-palette-error-75`, `#ff9f94`, true)
    public static readonly Error76 = Palette.of(`--md-ref-palette-error-76`, `#ffa399`, true)
    public static readonly Error77 = Palette.of(`--md-ref-palette-error-77`, `#ffa89d`, true)
    public static readonly Error78 = Palette.of(`--md-ref-palette-error-78`, `#ffaca2`, true)
    public static readonly Error79 = Palette.of(`--md-ref-palette-error-79`, `#ffb0a6`, true)
    public static readonly Error80 = Palette.of(`--md-ref-palette-error-80`, `#ffb4ab`, true)
    public static readonly Error81 = Palette.of(`--md-ref-palette-error-81`, `#ffb8af`, true)
    public static readonly Error82 = Palette.of(`--md-ref-palette-error-82`, `#ffbcb3`, true)
    public static readonly Error83 = Palette.of(`--md-ref-palette-error-83`, `#ffbfb8`, true)
    public static readonly Error84 = Palette.of(`--md-ref-palette-error-84`, `#ffc3bc`, true)
    public static readonly Error85 = Palette.of(`--md-ref-palette-error-85`, `#ffc7c0`, true)
    public static readonly Error86 = Palette.of(`--md-ref-palette-error-86`, `#ffcbc5`, true)
    public static readonly Error87 = Palette.of(`--md-ref-palette-error-87`, `#ffcfc9`, true)
    public static readonly Error88 = Palette.of(`--md-ref-palette-error-88`, `#ffd3cd`, true)
    public static readonly Error89 = Palette.of(`--md-ref-palette-error-89`, `#ffd6d1`, true)
    public static readonly Error90 = Palette.of(`--md-ref-palette-error-90`, `#ffdad6`, true)
    public static readonly Error91 = Palette.of(`--md-ref-palette-error-91`, `#ffdeda`, true)
    public static readonly Error92 = Palette.of(`--md-ref-palette-error-92`, `#ffe2de`, true)
    public static readonly Error93 = Palette.of(`--md-ref-palette-error-93`, `#ffe5e2`, true)
    public static readonly Error94 = Palette.of(`--md-ref-palette-error-94`, `#ffe9e6`, true)
    public static readonly Error95 = Palette.of(`--md-ref-palette-error-95`, `#ffedea`, true)
    public static readonly Error96 = Palette.of(`--md-ref-palette-error-96`, `#fff0ee`, true)
    public static readonly Error97 = Palette.of(`--md-ref-palette-error-97`, `#fff4f2`, true)
    public static readonly Error98 = Palette.of(`--md-ref-palette-error-98`, `#fff8f7`, true)
    public static readonly Error99 = Palette.of(`--md-ref-palette-error-99`, `#fffbff`, true)
    public static readonly Error100 = Palette.of(`--md-ref-palette-error-100`, `#ffffff`, true)
    public static readonly Neutral0 = Palette.of(`--md-ref-palette-neutral-0`, `#000000`, true)
    public static readonly Neutral1 = Palette.of(`--md-ref-palette-neutral-1`, `#010402`, true)
    public static readonly Neutral2 = Palette.of(`--md-ref-palette-neutral-2`, `#040905`, true)
    public static readonly Neutral3 = Palette.of(`--md-ref-palette-neutral-3`, `#070c08`, true)
    public static readonly Neutral4 = Palette.of(`--md-ref-palette-neutral-4`, `#09100a`, true)
    public static readonly Neutral5 = Palette.of(`--md-ref-palette-neutral-5`, `#0c120d`, true)
    public static readonly Neutral6 = Palette.of(`--md-ref-palette-neutral-6`, `#0e150f`, true)
    public static readonly Neutral7 = Palette.of(`--md-ref-palette-neutral-7`, `#111712`, true)
    public static readonly Neutral8 = Palette.of(`--md-ref-palette-neutral-8`, `#131914`, true)
    public static readonly Neutral9 = Palette.of(`--md-ref-palette-neutral-9`, `#151b16`, true)
    public static readonly Neutral10 = Palette.of(`--md-ref-palette-neutral-10`, `#171d17`, true)
    public static readonly Neutral11 = Palette.of(`--md-ref-palette-neutral-11`, `#191f19`, true)
    public static readonly Neutral12 = Palette.of(`--md-ref-palette-neutral-12`, `#1b211b`, true)
    public static readonly Neutral13 = Palette.of(`--md-ref-palette-neutral-13`, `#1d231d`, true)
    public static readonly Neutral14 = Palette.of(`--md-ref-palette-neutral-14`, `#1f251f`, true)
    public static readonly Neutral15 = Palette.of(`--md-ref-palette-neutral-15`, `#212721`, true)
    public static readonly Neutral16 = Palette.of(`--md-ref-palette-neutral-16`, `#232a23`, true)
    public static readonly Neutral17 = Palette.of(`--md-ref-palette-neutral-17`, `#252c25`, true)
    public static readonly Neutral18 = Palette.of(`--md-ref-palette-neutral-18`, `#272e28`, true)
    public static readonly Neutral19 = Palette.of(`--md-ref-palette-neutral-19`, `#29302a`, true)
    public static readonly Neutral20 = Palette.of(`--md-ref-palette-neutral-20`, `#2b322c`, true)
    public static readonly Neutral21 = Palette.of(`--md-ref-palette-neutral-21`, `#2d342e`, true)
    public static readonly Neutral22 = Palette.of(`--md-ref-palette-neutral-22`, `#303630`, true)
    public static readonly Neutral23 = Palette.of(`--md-ref-palette-neutral-23`, `#323932`, true)
    public static readonly Neutral24 = Palette.of(`--md-ref-palette-neutral-24`, `#343b34`, true)
    public static readonly Neutral25 = Palette.of(`--md-ref-palette-neutral-25`, `#363d37`, true)
    public static readonly Neutral26 = Palette.of(`--md-ref-palette-neutral-26`, `#383f39`, true)
    public static readonly Neutral27 = Palette.of(`--md-ref-palette-neutral-27`, `#3b423b`, true)
    public static readonly Neutral28 = Palette.of(`--md-ref-palette-neutral-28`, `#3d443d`, true)
    public static readonly Neutral29 = Palette.of(`--md-ref-palette-neutral-29`, `#3f463f`, true)
    public static readonly Neutral30 = Palette.of(`--md-ref-palette-neutral-30`, `#424942`, true)
    public static readonly Neutral31 = Palette.of(`--md-ref-palette-neutral-31`, `#444b44`, true)
    public static readonly Neutral32 = Palette.of(`--md-ref-palette-neutral-32`, `#464d46`, true)
    public static readonly Neutral33 = Palette.of(`--md-ref-palette-neutral-33`, `#485048`, true)
    public static readonly Neutral34 = Palette.of(`--md-ref-palette-neutral-34`, `#4b524b`, true)
    public static readonly Neutral35 = Palette.of(`--md-ref-palette-neutral-35`, `#4d544d`, true)
    public static readonly Neutral36 = Palette.of(`--md-ref-palette-neutral-36`, `#50574f`, true)
    public static readonly Neutral37 = Palette.of(`--md-ref-palette-neutral-37`, `#525952`, true)
    public static readonly Neutral38 = Palette.of(`--md-ref-palette-neutral-38`, `#545b54`, true)
    public static readonly Neutral39 = Palette.of(`--md-ref-palette-neutral-39`, `#575e56`, true)
    public static readonly Neutral40 = Palette.of(`--md-ref-palette-neutral-40`, `#596059`, true)
    public static readonly Neutral41 = Palette.of(`--md-ref-palette-neutral-41`, `#5c635b`, true)
    public static readonly Neutral42 = Palette.of(`--md-ref-palette-neutral-42`, `#5e655e`, true)
    public static readonly Neutral43 = Palette.of(`--md-ref-palette-neutral-43`, `#606860`, true)
    public static readonly Neutral44 = Palette.of(`--md-ref-palette-neutral-44`, `#636a62`, true)
    public static readonly Neutral45 = Palette.of(`--md-ref-palette-neutral-45`, `#656c65`, true)
    public static readonly Neutral46 = Palette.of(`--md-ref-palette-neutral-46`, `#686f67`, true)
    public static readonly Neutral47 = Palette.of(`--md-ref-palette-neutral-47`, `#6a716a`, true)
    public static readonly Neutral48 = Palette.of(`--md-ref-palette-neutral-48`, `#6d746c`, true)
    public static readonly Neutral49 = Palette.of(`--md-ref-palette-neutral-49`, `#6f766f`, true)
    public static readonly Neutral50 = Palette.of(`--md-ref-palette-neutral-50`, `#727971`, true)
    public static readonly Neutral51 = Palette.of(`--md-ref-palette-neutral-51`, `#747b74`, true)
    public static readonly Neutral52 = Palette.of(`--md-ref-palette-neutral-52`, `#777e76`, true)
    public static readonly Neutral53 = Palette.of(`--md-ref-palette-neutral-53`, `#798179`, true)
    public static readonly Neutral54 = Palette.of(`--md-ref-palette-neutral-54`, `#7c837b`, true)
    public static readonly Neutral55 = Palette.of(`--md-ref-palette-neutral-55`, `#7e867e`, true)
    public static readonly Neutral56 = Palette.of(`--md-ref-palette-neutral-56`, `#818880`, true)
    public static readonly Neutral57 = Palette.of(`--md-ref-palette-neutral-57`, `#848b83`, true)
    public static readonly Neutral58 = Palette.of(`--md-ref-palette-neutral-58`, `#868d85`, true)
    public static readonly Neutral59 = Palette.of(`--md-ref-palette-neutral-59`, `#899088`, true)
    public static readonly Neutral60 = Palette.of(`--md-ref-palette-neutral-60`, `#8b938a`, true)
    public static readonly Neutral61 = Palette.of(`--md-ref-palette-neutral-61`, `#8e958d`, true)
    public static readonly Neutral62 = Palette.of(`--md-ref-palette-neutral-62`, `#91988f`, true)
    public static readonly Neutral63 = Palette.of(`--md-ref-palette-neutral-63`, `#939b92`, true)
    public static readonly Neutral64 = Palette.of(`--md-ref-palette-neutral-64`, `#969d95`, true)
    public static readonly Neutral65 = Palette.of(`--md-ref-palette-neutral-65`, `#99a097`, true)
    public static readonly Neutral66 = Palette.of(`--md-ref-palette-neutral-66`, `#9ba29a`, true)
    public static readonly Neutral67 = Palette.of(`--md-ref-palette-neutral-67`, `#9ea59c`, true)
    public static readonly Neutral68 = Palette.of(`--md-ref-palette-neutral-68`, `#a1a89f`, true)
    public static readonly Neutral69 = Palette.of(`--md-ref-palette-neutral-69`, `#a3aaa2`, true)
    public static readonly Neutral70 = Palette.of(`--md-ref-palette-neutral-70`, `#a6ada4`, true)
    public static readonly Neutral71 = Palette.of(`--md-ref-palette-neutral-71`, `#a9b0a7`, true)
    public static readonly Neutral72 = Palette.of(`--md-ref-palette-neutral-72`, `#abb3aa`, true)
    public static readonly Neutral73 = Palette.of(`--md-ref-palette-neutral-73`, `#aeb5ac`, true)
    public static readonly Neutral74 = Palette.of(`--md-ref-palette-neutral-74`, `#b1b8af`, true)
    public static readonly Neutral75 = Palette.of(`--md-ref-palette-neutral-75`, `#b4bbb2`, true)
    public static readonly Neutral76 = Palette.of(`--md-ref-palette-neutral-76`, `#b6bdb4`, true)
    public static readonly Neutral77 = Palette.of(`--md-ref-palette-neutral-77`, `#b9c0b7`, true)
    public static readonly Neutral78 = Palette.of(`--md-ref-palette-neutral-78`, `#bcc3ba`, true)
    public static readonly Neutral79 = Palette.of(`--md-ref-palette-neutral-79`, `#bfc6bd`, true)
    public static readonly Neutral80 = Palette.of(`--md-ref-palette-neutral-80`, `#c1c8bf`, true)
    public static readonly Neutral81 = Palette.of(`--md-ref-palette-neutral-81`, `#c4cbc2`, true)
    public static readonly Neutral82 = Palette.of(`--md-ref-palette-neutral-82`, `#c7cec5`, true)
    public static readonly Neutral83 = Palette.of(`--md-ref-palette-neutral-83`, `#cad1c8`, true)
    public static readonly Neutral84 = Palette.of(`--md-ref-palette-neutral-84`, `#cdd4ca`, true)
    public static readonly Neutral85 = Palette.of(`--md-ref-palette-neutral-85`, `#cfd6cd`, true)
    public static readonly Neutral86 = Palette.of(`--md-ref-palette-neutral-86`, `#d2d9d0`, true)
    public static readonly Neutral87 = Palette.of(`--md-ref-palette-neutral-87`, `#d5dcd3`, true)
    public static readonly Neutral88 = Palette.of(`--md-ref-palette-neutral-88`, `#d8dfd5`, true)
    public static readonly Neutral89 = Palette.of(`--md-ref-palette-neutral-89`, `#dbe2d8`, true)
    public static readonly Neutral90 = Palette.of(`--md-ref-palette-neutral-90`, `#dde4db`, true)
    public static readonly Neutral91 = Palette.of(`--md-ref-palette-neutral-91`, `#e0e7de`, true)
    public static readonly Neutral92 = Palette.of(`--md-ref-palette-neutral-92`, `#e3eae1`, true)
    public static readonly Neutral93 = Palette.of(`--md-ref-palette-neutral-93`, `#e6ede3`, true)
    public static readonly Neutral94 = Palette.of(`--md-ref-palette-neutral-94`, `#e9f0e6`, true)
    public static readonly Neutral95 = Palette.of(`--md-ref-palette-neutral-95`, `#ecf3e9`, true)
    public static readonly Neutral96 = Palette.of(`--md-ref-palette-neutral-96`, `#eff6ec`, true)
    public static readonly Neutral97 = Palette.of(`--md-ref-palette-neutral-97`, `#f2f8ef`, true)
    public static readonly Neutral98 = Palette.of(`--md-ref-palette-neutral-98`, `#f4fbf1`, true)
    public static readonly Neutral99 = Palette.of(`--md-ref-palette-neutral-99`, `#f7fef4`, true)
    public static readonly Neutral100 = Palette.of(`--md-ref-palette-neutral-100`, `#ffffff`, true)
    public static readonly NeutralVariant0 = Palette.of(`--md-ref-palette-neutral-variant-0`, `#000000`, true)
    public static readonly NeutralVariant1 = Palette.of(`--md-ref-palette-neutral-variant-1`, `#000501`, true)
    public static readonly NeutralVariant2 = Palette.of(`--md-ref-palette-neutral-variant-2`, `#020904`, true)
    public static readonly NeutralVariant3 = Palette.of(`--md-ref-palette-neutral-variant-3`, `#040d06`, true)
    public static readonly NeutralVariant4 = Palette.of(`--md-ref-palette-neutral-variant-4`, `#061108`, true)
    public static readonly NeutralVariant5 = Palette.of(`--md-ref-palette-neutral-variant-5`, `#08130b`, true)
    public static readonly NeutralVariant6 = Palette.of(`--md-ref-palette-neutral-variant-6`, `#0b160d`, true)
    public static readonly NeutralVariant7 = Palette.of(`--md-ref-palette-neutral-variant-7`, `#0d180f`, true)
    public static readonly NeutralVariant8 = Palette.of(`--md-ref-palette-neutral-variant-8`, `#0f1a11`, true)
    public static readonly NeutralVariant9 = Palette.of(`--md-ref-palette-neutral-variant-9`, `#111c13`, true)
    public static readonly NeutralVariant10 = Palette.of(`--md-ref-palette-neutral-variant-10`, `#131e15`, true)
    public static readonly NeutralVariant11 = Palette.of(`--md-ref-palette-neutral-variant-11`, `#152017`, true)
    public static readonly NeutralVariant12 = Palette.of(`--md-ref-palette-neutral-variant-12`, `#172219`, true)
    public static readonly NeutralVariant13 = Palette.of(`--md-ref-palette-neutral-variant-13`, `#19241b`, true)
    public static readonly NeutralVariant14 = Palette.of(`--md-ref-palette-neutral-variant-14`, `#1b261d`, true)
    public static readonly NeutralVariant15 = Palette.of(`--md-ref-palette-neutral-variant-15`, `#1d281f`, true)
    public static readonly NeutralVariant16 = Palette.of(`--md-ref-palette-neutral-variant-16`, `#1f2b21`, true)
    public static readonly NeutralVariant17 = Palette.of(`--md-ref-palette-neutral-variant-17`, `#212d23`, true)
    public static readonly NeutralVariant18 = Palette.of(`--md-ref-palette-neutral-variant-18`, `#232f25`, true)
    public static readonly NeutralVariant19 = Palette.of(`--md-ref-palette-neutral-variant-19`, `#253127`, true)
    public static readonly NeutralVariant20 = Palette.of(`--md-ref-palette-neutral-variant-20`, `#273329`, true)
    public static readonly NeutralVariant21 = Palette.of(`--md-ref-palette-neutral-variant-21`, `#2a352b`, true)
    public static readonly NeutralVariant22 = Palette.of(`--md-ref-palette-neutral-variant-22`, `#2c382d`, true)
    public static readonly NeutralVariant23 = Palette.of(`--md-ref-palette-neutral-variant-23`, `#2e3a30`, true)
    public static readonly NeutralVariant24 = Palette.of(`--md-ref-palette-neutral-variant-24`, `#303c32`, true)
    public static readonly NeutralVariant25 = Palette.of(`--md-ref-palette-neutral-variant-25`, `#323e34`, true)
    public static readonly NeutralVariant26 = Palette.of(`--md-ref-palette-neutral-variant-26`, `#344136`, true)
    public static readonly NeutralVariant27 = Palette.of(`--md-ref-palette-neutral-variant-27`, `#374338`, true)
    public static readonly NeutralVariant28 = Palette.of(`--md-ref-palette-neutral-variant-28`, `#39453a`, true)
    public static readonly NeutralVariant29 = Palette.of(`--md-ref-palette-neutral-variant-29`, `#3b473d`, true)
    public static readonly NeutralVariant30 = Palette.of(`--md-ref-palette-neutral-variant-30`, `#3d4a3f`, true)
    public static readonly NeutralVariant31 = Palette.of(`--md-ref-palette-neutral-variant-31`, `#404c41`, true)
    public static readonly NeutralVariant32 = Palette.of(`--md-ref-palette-neutral-variant-32`, `#424e43`, true)
    public static readonly NeutralVariant33 = Palette.of(`--md-ref-palette-neutral-variant-33`, `#445146`, true)
    public static readonly NeutralVariant34 = Palette.of(`--md-ref-palette-neutral-variant-34`, `#475348`, true)
    public static readonly NeutralVariant35 = Palette.of(`--md-ref-palette-neutral-variant-35`, `#49564a`, true)
    public static readonly NeutralVariant36 = Palette.of(`--md-ref-palette-neutral-variant-36`, `#4b584d`, true)
    public static readonly NeutralVariant37 = Palette.of(`--md-ref-palette-neutral-variant-37`, `#4e5a4f`, true)
    public static readonly NeutralVariant38 = Palette.of(`--md-ref-palette-neutral-variant-38`, `#505d51`, true)
    public static readonly NeutralVariant39 = Palette.of(`--md-ref-palette-neutral-variant-39`, `#525f54`, true)
    public static readonly NeutralVariant40 = Palette.of(`--md-ref-palette-neutral-variant-40`, `#556256`, true)
    public static readonly NeutralVariant41 = Palette.of(`--md-ref-palette-neutral-variant-41`, `#576458`, true)
    public static readonly NeutralVariant42 = Palette.of(`--md-ref-palette-neutral-variant-42`, `#5a665b`, true)
    public static readonly NeutralVariant43 = Palette.of(`--md-ref-palette-neutral-variant-43`, `#5c695d`, true)
    public static readonly NeutralVariant44 = Palette.of(`--md-ref-palette-neutral-variant-44`, `#5f6b5f`, true)
    public static readonly NeutralVariant45 = Palette.of(`--md-ref-palette-neutral-variant-45`, `#616e62`, true)
    public static readonly NeutralVariant46 = Palette.of(`--md-ref-palette-neutral-variant-46`, `#637064`, true)
    public static readonly NeutralVariant47 = Palette.of(`--md-ref-palette-neutral-variant-47`, `#667367`, true)
    public static readonly NeutralVariant48 = Palette.of(`--md-ref-palette-neutral-variant-48`, `#687569`, true)
    public static readonly NeutralVariant49 = Palette.of(`--md-ref-palette-neutral-variant-49`, `#6b786c`, true)
    public static readonly NeutralVariant50 = Palette.of(`--md-ref-palette-neutral-variant-50`, `#6d7a6e`, true)
    public static readonly NeutralVariant51 = Palette.of(`--md-ref-palette-neutral-variant-51`, `#707d70`, true)
    public static readonly NeutralVariant52 = Palette.of(`--md-ref-palette-neutral-variant-52`, `#727f73`, true)
    public static readonly NeutralVariant53 = Palette.of(`--md-ref-palette-neutral-variant-53`, `#758275`, true)
    public static readonly NeutralVariant54 = Palette.of(`--md-ref-palette-neutral-variant-54`, `#778578`, true)
    public static readonly NeutralVariant55 = Palette.of(`--md-ref-palette-neutral-variant-55`, `#7a877a`, true)
    public static readonly NeutralVariant56 = Palette.of(`--md-ref-palette-neutral-variant-56`, `#7d8a7d`, true)
    public static readonly NeutralVariant57 = Palette.of(`--md-ref-palette-neutral-variant-57`, `#7f8c7f`, true)
    public static readonly NeutralVariant58 = Palette.of(`--md-ref-palette-neutral-url-variant-58`, `#828f82`, true)
    public static readonly NeutralVariant59 = Palette.of(`--md-ref-palette-neutral-variant-59`, `#849285`, true)
    public static readonly NeutralVariant60 = Palette.of(`--md-ref-palette-neutral-variant-60`, `#879487`, true)
    public static readonly NeutralVariant61 = Palette.of(`--md-ref-palette-neutral-variant-61`, `#89978a`, true)
    public static readonly NeutralVariant62 = Palette.of(`--md-ref-palette-neutral-variant-62`, `#8c998c`, true)
    public static readonly NeutralVariant63 = Palette.of(`--md-ref-palette-neutral-variant-63`, `#8f9c8f`, true)
    public static readonly NeutralVariant64 = Palette.of(`--md-ref-palette-neutral-variant-64`, `#919f91`, true)
    public static readonly NeutralVariant65 = Palette.of(`--md-ref-palette-neutral-variant-65`, `#94a194`, true)
    public static readonly NeutralVariant66 = Palette.of(`--md-ref-palette-neutral-variant-66`, `#97a497`, true)
    public static readonly NeutralVariant67 = Palette.of(`--md-ref-palette-neutral-variant-67`, `#99a799`, true)
    public static readonly NeutralVariant68 = Palette.of(`--md-ref-palette-neutral-variant-68`, `#9ca99c`, true)
    public static readonly NeutralVariant69 = Palette.of(`--md-ref-palette-neutral-variant-69`, `#9fac9e`, true)
    public static readonly NeutralVariant70 = Palette.of(`--md-ref-palette-neutral-variant-70`, `#a1afa1`, true)
    public static readonly NeutralVariant71 = Palette.of(`--md-ref-palette-neutral-variant-71`, `#a4b1a4`, true)
    public static readonly NeutralVariant72 = Palette.of(`--md-ref-palette-neutral-variant-72`, `#a7b4a6`, true)
    public static readonly NeutralVariant73 = Palette.of(`--md-ref-palette-neutral-variant-73`, `#a9b7a9`, true)
    public static readonly NeutralVariant74 = Palette.of(`--md-ref-palette-neutral-variant-74`, `#acbaac`, true)
    public static readonly NeutralVariant75 = Palette.of(`--md-ref-palette-neutral-variant-75`, `#afbcae`, true)
    public static readonly NeutralVariant76 = Palette.of(`--md-ref-palette-neutral-variant-76`, `#b1bfb1`, true)
    public static readonly NeutralVariant77 = Palette.of(`--md-ref-palette-neutral-variant-77`, `#b4c2b4`, true)
    public static readonly NeutralVariant78 = Palette.of(`--md-ref-palette-neutral-variant-78`, `#b7c5b6`, true)
    public static readonly NeutralVariant79 = Palette.of(`--md-ref-palette-neutral-variant-79`, `#bac7b9`, true)
    public static readonly NeutralVariant80 = Palette.of(`--md-ref-palette-neutral-variant-80`, `#bccabc`, true)
    public static readonly NeutralVariant81 = Palette.of(`--md-ref-palette-neutral-variant-81`, `#bfcdbf`, true)
    public static readonly NeutralVariant82 = Palette.of(`--md-ref-palette-neutral-variant-82`, `#c2d0c1`, true)
    public static readonly NeutralVariant83 = Palette.of(`--md-ref-palette-neutral-variant-83`, `#c5d2c4`, true)
    public static readonly NeutralVariant84 = Palette.of(`--md-ref-palette-neutral-variant-84`, `#c8d5c7`, true)
    public static readonly NeutralVariant85 = Palette.of(`--md-ref-palette-neutral-variant-85`, `#cad8c9`, true)
    public static readonly NeutralVariant86 = Palette.of(`--md-ref-palette-neutral-variant-86`, `#cddbcc`, true)
    public static readonly NeutralVariant87 = Palette.of(`--md-ref-palette-neutral-variant-87`, `#d0decf`, true)
    public static readonly NeutralVariant88 = Palette.of(`--md-ref-palette-neutral-variant-88`, `#d3e1d2`, true)
    public static readonly NeutralVariant89 = Palette.of(`--md-ref-palette-neutral-variant-89`, `#d6e3d5`, true)
    public static readonly NeutralVariant90 = Palette.of(`--md-ref-palette-neutral-variant-90`, `#d8e6d7`, true)
    public static readonly NeutralVariant91 = Palette.of(`--md-ref-palette-neutral-variant-91`, `#dbe9da`, true)
    public static readonly NeutralVariant92 = Palette.of(`--md-ref-palette-neutral-variant-92`, `#deecdd`, true)
    public static readonly NeutralVariant93 = Palette.of(`--md-ref-palette-neutral-variant-93`, `#e1efe0`, true)
    public static readonly NeutralVariant94 = Palette.of(`--md-ref-palette-neutral-variant-94`, `#e4f2e3`, true)
    public static readonly NeutralVariant95 = Palette.of(`--md-ref-palette-neutral-variant-95`, `#e7f5e5`, true)
    public static readonly NeutralVariant96 = Palette.of(`--md-ref-palette-neutral-variant-96`, `#eaf7e8`, true)
    public static readonly NeutralVariant97 = Palette.of(`--md-ref-palette-neutral-variant-97`, `#ecfaeb`, true)
    public static readonly NeutralVariant98 = Palette.of(`--md-ref-palette-neutral-variant-98`, `#effdee`, true)
    public static readonly NeutralVariant99 = Palette.of(`--md-ref-palette-neutral-variant-99`, `#f5fff3`, true)
    public static readonly NeutralVariant100 = Palette.of(`--md-ref-palette-neutral-variant-100`, `#ffffff`, true)

    public static readonly AllEnums = {
Primary0: this.Primary0, Primary1: this.Primary1, Primary2: this.Primary2,
Primary3: this.Primary3, Primary4: this.Primary4, Primary5: this.Primary5,
Primary6: this.Primary6, Primary7: this.Primary7, Primary8: this.Primary8,
Primary9: this.Primary9, Primary10: this.Primary10, Primary11: this.Primary11,
Primary12: this.Primary12, Primary13: this.Primary13, Primary14: this.Primary14,
Primary15: this.Primary15, Primary16: this.Primary16, Primary17: this.Primary17,
Primary18: this.Primary18, Primary19: this.Primary19, Primary20: this.Primary20,
Primary21: this.Primary21, Primary22: this.Primary22, Primary23: this.Primary23,
Primary24: this.Primary24, Primary25: this.Primary25, Primary26: this.Primary26,
Primary27: this.Primary27, Primary28: this.Primary28, Primary29: this.Primary29,
Primary30: this.Primary30, Primary31: this.Primary31, Primary32: this.Primary32,
Primary33: this.Primary33, Primary34: this.Primary34, Primary35: this.Primary35,
Primary36: this.Primary36, Primary37: this.Primary37, Primary38: this.Primary38,
Primary39: this.Primary39, Primary40: this.Primary40, Primary41: this.Primary41,
Primary42: this.Primary42, Primary43: this.Primary43, Primary44: this.Primary44,
Primary45: this.Primary45, Primary46: this.Primary46, Primary47: this.Primary47,
Primary48: this.Primary48, Primary49: this.Primary49, Primary50: this.Primary50,
Primary51: this.Primary51, Primary52: this.Primary52, Primary53: this.Primary53,
Primary54: this.Primary54, Primary55: this.Primary55, Primary56: this.Primary56,
Primary57: this.Primary57, Primary58: this.Primary58, Primary59: this.Primary59,
Primary60: this.Primary60, Primary61: this.Primary61, Primary62: this.Primary62,
Primary63: this.Primary63, Primary64: this.Primary64, Primary65: this.Primary65,
Primary66: this.Primary66, Primary67: this.Primary67, Primary68: this.Primary68,
Primary69: this.Primary69, Primary70: this.Primary70, Primary71: this.Primary71,
Primary72: this.Primary72, Primary73: this.Primary73, Primary74: this.Primary74,
Primary75: this.Primary75, Primary76: this.Primary76, Primary77: this.Primary77,
Primary78: this.Primary78, Primary79: this.Primary79, Primary80: this.Primary80,
Primary81: this.Primary81, Primary82: this.Primary82, Primary83: this.Primary83,
Primary84: this.Primary84, Primary85: this.Primary85, Primary86: this.Primary86,
Primary87: this.Primary87, Primary88: this.Primary88, Primary89: this.Primary89,
Primary90: this.Primary90, Primary91: this.Primary91, Primary92: this.Primary92,
Primary93: this.Primary93, Primary94: this.Primary94, Primary95: this.Primary95,
Primary96: this.Primary96, Primary97: this.Primary97, Primary98: this.Primary98,
Primary99: this.Primary99, Primary100: this.Primary100,
Secondary0: this.Secondary0, Secondary1: this.Secondary1, Secondary2: this.Secondary2,
Secondary3: this.Secondary3, Secondary4: this.Secondary4, Secondary5: this.Secondary5,
Secondary6: this.Secondary6, Secondary7: this.Secondary7, Secondary8: this.Secondary8,
Secondary9: this.Secondary9, Secondary10: this.Secondary10, Secondary11: this.Secondary11,
Secondary12: this.Secondary12, Secondary13: this.Secondary13, Secondary14: this.Secondary14,
Secondary15: this.Secondary15, Secondary16: this.Secondary16, Secondary17: this.Secondary17,
Secondary18: this.Secondary18, Secondary19: this.Secondary19, Secondary20: this.Secondary20,
Secondary21: this.Secondary21, Secondary22: this.Secondary22, Secondary23: this.Secondary23,
Secondary24: this.Secondary24, Secondary25: this.Secondary25, Secondary26: this.Secondary26,
Secondary27: this.Secondary27, Secondary28: this.Secondary28, Secondary29: this.Secondary29,
Secondary30: this.Secondary30, Secondary31: this.Secondary31, Secondary32: this.Secondary32,
Secondary33: this.Secondary33, Secondary34: this.Secondary34, Secondary35: this.Secondary35,
Secondary36: this.Secondary36, Secondary37: this.Secondary37, Secondary38: this.Secondary38,
Secondary39: this.Secondary39, Secondary40: this.Secondary40, Secondary41: this.Secondary41,
Secondary42: this.Secondary42, Secondary43: this.Secondary43, Secondary44: this.Secondary44,
Secondary45: this.Secondary45, Secondary46: this.Secondary46, Secondary47: this.Secondary47,
Secondary48: this.Secondary48, Secondary49: this.Secondary49, Secondary50: this.Secondary50, Secondary51: this.Secondary51, Secondary52: this.Secondary52,
Secondary53: this.Secondary53, Secondary54: this.Secondary54, Secondary55: this.Secondary55, Secondary56: this.Secondary56, Secondary57: this.Secondary57,
Secondary58: this.Secondary58, Secondary59: this.Secondary59, Secondary60: this.Secondary60, Secondary61: this.Secondary61, Secondary62: this.Secondary62,
Secondary63: this.Secondary63, Secondary64: this.Secondary64, Secondary65: this.Secondary65, Secondary66: this.Secondary66, Secondary67: this.Secondary67,
Secondary68: this.Secondary68, Secondary69: this.Secondary69, Secondary70: this.Secondary70, Secondary71: this.Secondary71, Secondary72: this.Secondary72,
Secondary73: this.Secondary73, Secondary74: this.Secondary74, Secondary75: this.Secondary75, Secondary76: this.Secondary76, Secondary77: this.Secondary77,
Secondary78: this.Secondary78, Secondary79: this.Secondary79, Secondary80: this.Secondary80, Secondary81: this.Secondary81, Secondary82: this.Secondary82,
Secondary83: this.Secondary83, Secondary84: this.Secondary84, Secondary85: this.Secondary85, Secondary86: this.Secondary86, Secondary87: this.Secondary87,
Secondary88: this.Secondary88, Secondary89: this.Secondary89, Secondary90: this.Secondary90, Secondary91: this.Secondary91, Secondary92: this.Secondary92,
Secondary93: this.Secondary93, Secondary94: this.Secondary94, Secondary95: this.Secondary95, Secondary96: this.Secondary96, Secondary97: this.Secondary97,
Secondary98: this.Secondary98, Secondary99: this.Secondary99, Secondary100: this.Secondary100,
Tertiary0: this.Tertiary0, Tertiary1: this.Tertiary1, Tertiary2: this.Tertiary2, Tertiary3: this.Tertiary3,
Tertiary4: this.Tertiary4, Tertiary5: this.Tertiary5, Tertiary6: this.Tertiary6, Tertiary7: this.Tertiary7,
Tertiary8: this.Tertiary8, Tertiary9: this.Tertiary9, Tertiary10: this.Tertiary10, Tertiary11: this.Tertiary11, Tertiary12: this.Tertiary12,
Tertiary13: this.Tertiary13, Tertiary14: this.Tertiary14, Tertiary15: this.Tertiary15, Tertiary16: this.Tertiary16, Tertiary17: this.Tertiary17,
Tertiary18: this.Tertiary18, Tertiary19: this.Tertiary19, Tertiary20: this.Tertiary20, Tertiary21: this.Tertiary21, Tertiary22: this.Tertiary22,
Tertiary23: this.Tertiary23, Tertiary24: this.Tertiary24, Tertiary25:this.Tertiary25, Tertiary26: this.Tertiary26, Tertiary27: this.Tertiary27,
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
Tertiary98: this.Tertiary98, Tertiary99: this.Tertiary99, Tertiary100: this.Tertiary100, Error0: this.Error0, Error1: this.Error1, Error2: this.Error2,
Error3: this.Error3, Error4: this.Error4, Error5: this.Error5,
Error6: this.Error6, Error7: this.Error7, Error8: this.Error8, Error9: this.Error9,
Error10: this.Error10, Error11: this.Error11, Error12: this.Error12,
Error13: this.Error13, Error14: this.Error14, Error15: this.Error15,
Error16: this.Error16, Error17: this.Error17, Error18: this.Error18,
Error19: this.Error19, Error20: this.Error20, Error21: this.Error21,
Error22: this.Error22, Error23: this.Error23, Error24: this.Error24,
Error25: this.Error25, Error26: this.Error26, Error27: this.Error27,
Error28: this.Error28, Error29: this.Error29, Error30: this.Error30,
Error31: this.Error31, Error32: this.Error32, Error33: this.Error33,
Error34: this.Error34, Error35: this.Error35, Error36: this.Error36,
Error37: this.Error37, Error38: this.Error38, Error39: this.Error39,
Error40: this.Error40, Error41: this.Error41, Error42: this.Error42,
Error43: this.Error43, Error44: this.Error44, Error45: this.Error45,
Error46: this.Error46, Error47: this.Error47, Error48: this.Error48,
Error49: this.Error49, Error50: this.Error50, Error51: this.Error51,
Error52: this.Error52, Error53: this.Error53, Error54: this.Error54,
Error55: this.Error55, Error56: this.Error56, Error57: this.Error57,
Error58: this.Error58, Error59: this.Error59, Error60: this.Error60,
Error61: this.Error61, Error62: this.Error62, Error63: this.Error63,
Error64: this.Error64, Error65: this.Error65, Error66: this.Error66,
Error67: this.Error67, Error68: this.Error68, Error69: this.Error69,
Error70: this.Error70, Error71: this.Error71, Error72: this.Error72,
Error73: this.Error73, Error74: this.Error74, Error75: this.Error75,
Error76: this.Error76, Error77: this.Error77, Error78: this.Error78,
Error79: this.Error79, Error80: this.Error80, Error81: this.Error81,
Error82: this.Error82, Error83: this.Error83, Error84: this.Error84,
Error85: this.Error85, Error86: this.Error86, Error87: this.Error87,
Error88: this.Error88, Error89: this.Error89, Error90: this.Error90,
Error91: this.Error91, Error92: this.Error92, Error93: this.Error93,
Error94: this.Error94, Error95: this.Error95, Error96: this.Error96,
Error97: this.Error97, Error98: this.Error98, Error99: this.Error99,
Error100: this.Error100, Neutral0: this.Neutral0, Neutral1: this.Neutral1,
Neutral2: this.Neutral2, Neutral3: this.Neutral3, Neutral4: this.Neutral4,
Neutral5: this.Neutral5, Neutral6: this.Neutral6, Neutral7: this.Neutral7,
Neutral8: this.Neutral8, Neutral9: this.Neutral9, Neutral10: this.Neutral10,
Neutral11: this.Neutral11, Neutral12: this.Neutral12, Neutral13: this.Neutral13,
Neutral14: this.Neutral14, Neutral15: this.Neutral15, Neutral16: this.Neutral16,
Neutral17: this.Neutral17, Neutral18: this.Neutral18, Neutral19: this.Neutral19,
Neutral20: this.Neutral20, Neutral21: this.Neutral21, Neutral22: this.Neutral22,
Neutral23: this.Neutral23, Neutral24: this.Neutral24, Neutral25: this.Neutral25,
Neutral26: this.Neutral26, Neutral27: this.Neutral27, Neutral28: this.Neutral28,
Neutral29: this.Neutral29, Neutral30: this.Neutral30, Neutral31: this.Neutral31,
Neutral32: this.Neutral32, Neutral33: this.Neutral33, Neutral34: this.Neutral34,
Neutral35: this.Neutral35, Neutral36: this.Neutral36, Neutral37: this.Neutral37,
Neutral38: this.Neutral38, Neutral39: this.Neutral39, Neutral40: this.Neutral40,
Neutral41: this.Neutral41, Neutral42: this.Neutral42, Neutral43: this.Neutral43,
Neutral44: this.Neutral44, Neutral45: this.Neutral45, Neutral46: this.Neutral46,
Neutral47: this.Neutral47, Neutral48: this.Neutral48, Neutral49: this.Neutral49,
Neutral50: this.Neutral50, Neutral51: this.Neutral51, Neutral52: this.Neutral52,
Neutral53: this.Neutral53, Neutral54: this.Neutral54, Neutral55: this.Neutral55,
Neutral56: this.Neutral56, Neutral57: this.Neutral57, Neutral58: this.Neutral58,
Neutral59: this.Neutral59, Neutral60: this.Neutral60, Neutral61: this.Neutral61,
Neutral62: this.Neutral62, Neutral63: this.Neutral63, Neutral64: this.Neutral64,
Neutral65: this.Neutral65, Neutral66: this.Neutral66, Neutral67: this.Neutral67,
Neutral68: this.Neutral68, Neutral69: this.Neutral69, Neutral70: this.Neutral70,
Neutral71: this.Neutral71, Neutral72: this.Neutral72, Neutral73: this.Neutral73,
Neutral74: this.Neutral74, Neutral75: this.Neutral75, Neutral76: this.Neutral76,
Neutral77: this.Neutral77, Neutral78: this.Neutral78, Neutral79: this.Neutral79,
Neutral80: this.Neutral80, Neutral81: this.Neutral81, Neutral82: this.Neutral82,
Neutral83: this.Neutral83, Neutral84: this.Neutral84, Neutral85: this.Neutral85,
Neutral86: this.Neutral86, Neutral87: this.Neutral87, Neutral88: this.Neutral88,
Neutral89: this.Neutral89, Neutral90: this.Neutral90, Neutral91: this.Neutral91,
Neutral92: this.Neutral92, Neutral93: this.Neutral93, Neutral94: this.Neutral94,
Neutral95: this.Neutral95, Neutral96: this.Neutral96, Neutral97: this.Neutral97,
Neutral98: this.Neutral98, Neutral99: this.Neutral99, Neutral100: this. Neutral100,
NeutralVariant0: this.NeutralVariant0, NeutralVariant1: this.NeutralVariant1,
NeutralVariant2: this.NeutralVariant2, NeutralVariant3: this.NeutralVariant3, NeutralVariant4: this.NeutralVariant4,
NeutralVariant5: this.NeutralVariant5, NeutralVariant6: this.NeutralVariant6,
NeutralVariant7: this.NeutralVariant7, NeutralVariant8: this.NeutralVariant8,NeutralVariant9: this.NeutralVariant9,
NeutralVariant10: this.NeutralVariant10, NeutralVariant11: this.NeutralVariant11, NeutralVariant12: this.NeutralVariant12,
NeutralVariant13: this.NeutralVariant13, NeutralVariant14: this.NeutralVariant14, NeutralVariant15: this.NeutralVariant15,
NeutralVariant16: this.NeutralVariant16, NeutralVariant17: this.NeutralVariant17, NeutralVariant18: this.NeutralVariant18,
NeutralVariant19: this.NeutralVariant19, NeutralVariant20: this.NeutralVariant20, NeutralVariant21: this.NeutralVariant21,
NeutralVariant22: this.NeutralVariant22, NeutralVariant23: this.NeutralVariant23, NeutralVariant24: this.NeutralVariant24,
NeutralVariant25: this.NeutralVariant25, NeutralVariant26: this.NeutralVariant26, NeutralVariant27: this.NeutralVariant27,
NeutralVariant28: this.NeutralVariant28, NeutralVariant29: this.NeutralVariant29, NeutralVariant30: this.NeutralVariant30,
NeutralVariant31: this.NeutralVariant31, NeutralVariant32: this.NeutralVariant32, NeutralVariant33: this.NeutralVariant33,
NeutralVariant34: this.NeutralVariant34, NeutralVariant35: this.NeutralVariant35, NeutralVariant36: this.NeutralVariant36,
NeutralVariant37: this.NeutralVariant37, NeutralVariant38: this.NeutralVariant38, NeutralVariant39: this.NeutralVariant39,
NeutralVariant40: this.NeutralVariant40, NeutralVariant41: this.NeutralVariant41, NeutralVariant42: this.NeutralVariant42,
NeutralVariant43: this.NeutralVariant43, NeutralVariant44: this.NeutralVariant44, NeutralVariant45: this.NeutralVariant45,
NeutralVariant46: this.NeutralVariant46, NeutralVariant47: this.NeutralVariant47, NeutralVariant48: this.NeutralVariant48,
NeutralVariant49: this.NeutralVariant49, NeutralVariant50: this.NeutralVariant50, NeutralVariant51: this.NeutralVariant51,
NeutralVariant52: this.NeutralVariant52, NeutralVariant53: this.NeutralVariant53, NeutralVariant54: this.NeutralVariant54,
NeutralVariant55: this.NeutralVariant55, NeutralVariant56: this.NeutralVariant56, NeutralVariant57: this.NeutralVariant57,
NeutralVariant58: this.NeutralVariant58, NeutralVariant59: this.NeutralVariant59, NeutralVariant60: this.NeutralVariant60,
NeutralVariant61: this.NeutralVariant61, NeutralVariant62: this.NeutralVariant62, NeutralVariant63: this.NeutralVariant63,
NeutralVariant64: this.NeutralVariant64, NeutralVariant65: this.NeutralVariant65, NeutralVariant66: this.NeutralVariant66,
NeutralVariant67: this.NeutralVariant67, NeutralVariant68: this.NeutralVariant68, NeutralVariant69: this.NeutralVariant69,
NeutralVariant70: this.NeutralVariant70, NeutralVariant71: this.NeutralVariant71, NeutralVariant72: this.NeutralVariant72,
NeutralVariant73: this.NeutralVariant73, NeutralVariant74: this.NeutralVariant74, NeutralVariant75: this.NeutralVariant75,
NeutralVariant76: this.NeutralVariant76, NeutralVariant77: this.NeutralVariant77, NeutralVariant78: this.NeutralVariant78,
NeutralVariant79: this.NeutralVariant79, NeutralVariant80: this.NeutralVariant80, NeutralVariant81: this.NeutralVariant81,
NeutralVariant82: this.NeutralVariant82, NeutralVariant83: this.NeutralVariant83, NeutralVariant84: this.NeutralVariant84,
NeutralVariant85: this.NeutralVariant85, NeutralVariant86: this.NeutralVariant86, NeutralVariant87: this.NeutralVariant87,
NeutralVariant88: this.NeutralVariant88, NeutralVariant89: this.NeutralVariant89, NeutralVariant90: this.NeutralVariant90,
NeutralVariant91: this.NeutralVariant91, NeutralVariant92: this.NeutralVariant92, NeutralVariant93: this.NeutralVariant93,
NeutralVariant94: this.NeutralVariant94, NeutralVariant95: this.NeutralVariant95, NeutralVariant96: this.NeutralVariant96,
NeutralVariant97: this.NeutralVariant97, NeutralVariant98: this.NeutralVariant98, NeutralVariant99: this.NeutralVariant99,
NeutralVariant100: this.NeutralVariant100,
    }

    public static readonly AllValues = [
        this.Primary0, this.Primary1, this.Primary2, this.Primary3, this.Primary4,
        this.Primary5, this.Primary6, this.Primary7, this.Primary8, this.Primary9,
        this.Primary10, this.Primary11, this.Primary12, this.Primary13, this.Primary14,
        this.Primary15, this.Primary16, this.Primary17, this.Primary18, this.Primary19,
        this.Primary20, this.Primary21, this.Primary22, this.Primary23, this.Primary24,
        this.Primary25, this.Primary26, this.Primary27, this.Primary28, this.Primary29,
        this.Primary30, this.Primary31, this.Primary32, this.Primary33, this.Primary34,
        this.Primary35, this.Primary36, this.Primary37, this.Primary38, this.Primary39,
        this.Primary40, this.Primary41, this.Primary42, this.Primary43, this.Primary44,
        this.Primary45, this.Primary46, this.Primary47, this.Primary48, this.Primary49,
        this.Primary50, this.Primary51, this.Primary52, this.Primary53, this.Primary54,
        this.Primary55, this.Primary56, this.Primary57, this.Primary58, this.Primary59,
        this.Primary60, this.Primary61, this.Primary62, this.Primary63, this.Primary64,
        this.Primary65, this.Primary66, this.Primary67, this.Primary68, this.Primary69,
        this.Primary70, this.Primary71, this.Primary72, this.Primary73, this.Primary74,
        this.Primary75, this.Primary76, this.Primary77, this.Primary78, this.Primary79,
        this.Primary80, this.Primary81, this.Primary82, this.Primary83, this.Primary84,
        this.Primary85, this.Primary86, this.Primary87, this.Primary88, this.Primary89,
        this.Primary90, this.Primary91, this.Primary92, this.Primary93, this.Primary94,
        this.Primary95, this.Primary96, this.Primary97, this.Primary98, this.Primary99, this.Primary100,
        this.Secondary0, this.Secondary1, this.Secondary2, this.Secondary3, this.Secondary4,
        this.Secondary5, this.Secondary6, this.Secondary7, this.Secondary8, this.Secondary9,
        this.Secondary10, this.Secondary11, this.Secondary12, this.Secondary13, this.Secondary14,
        this.Secondary15, this.Secondary16, this.Secondary17, this.Secondary18, this.Secondary19,
        this.Secondary20, this.Secondary21, this.Secondary22, this.Secondary23, this.Secondary24,
        this.Secondary25, this.Secondary26, this.Secondary27, this.Secondary28, this.Secondary29,
        this.Secondary30, this.Secondary31, this.Secondary32, this.Secondary33, this.Secondary34,
        this.Secondary35, this.Secondary36, this.Secondary37, this.Secondary38, this.Secondary39,
        this.Secondary40, this.Secondary41, this.Secondary42, this.Secondary43, this.Secondary44,
        this.Secondary45, this.Secondary46, this.Secondary47, this.Secondary48, this.Secondary49,
        this.Secondary50, this.Secondary51, this.Secondary52, this.Secondary53, this.Secondary54,
        this.Secondary55, this.Secondary56, this.Secondary57, this.Secondary58, this.Secondary59,
        this.Secondary60, this.Secondary61, this.Secondary62, this.Secondary63, this.Secondary64,
        this.Secondary65, this.Secondary66, this.Secondary67, this.Secondary68, this.Secondary69,
        this.Secondary70, this.Secondary71, this.Secondary72, this.Secondary73, this.Secondary74,
        this.Secondary75, this.Secondary76, this.Secondary77, this.Secondary78, this.Secondary79,
        this.Secondary80, this.Secondary81, this.Secondary82, this.Secondary83, this.Secondary84,
        this.Secondary85, this.Secondary86, this.Secondary87, this.Secondary88, this.Secondary89,
        this.Secondary90, this.Secondary91, this.Secondary92, this.Secondary93, this.Secondary94,
        this.Secondary95, this.Secondary96, this.Secondary97, this.Secondary98, this.Secondary99, this.Secondary100,
        this.Tertiary0, this.Tertiary1, this.Tertiary2, this.Tertiary3, this.Tertiary4,
        this.Tertiary5, this.Tertiary6, this.Tertiary7, this.Tertiary8, this.Tertiary9,
        this.Tertiary10, this.Tertiary11, this.Tertiary12, this.Tertiary13, this.Tertiary14,
        this.Tertiary15, this.Tertiary16, this.Tertiary17, this.Tertiary18, this.Tertiary19,
        this.Tertiary20, this.Tertiary21, this.Tertiary22, this.Tertiary23, this.Tertiary24,
        this.Tertiary25, this.Tertiary26, this.Tertiary27, this.Tertiary28, this.Tertiary29,
        this.Tertiary30, this.Tertiary31, this.Tertiary32, this.Tertiary33, this.Tertiary34,
        this.Tertiary35, this.Tertiary36, this.Tertiary37, this.Tertiary38, this.Tertiary39,
        this.Tertiary40, this.Tertiary41, this.Tertiary42, this.Tertiary43, this.Tertiary44,
        this.Tertiary45, this.Tertiary46, this.Tertiary47, this.Tertiary48, this.Tertiary49,
        this.Tertiary50, this.Tertiary51, this.Tertiary52, this.Tertiary53, this.Tertiary54,
        this.Tertiary55, this.Tertiary56, this.Tertiary57, this.Tertiary58, this.Tertiary59,
        this.Tertiary60, this.Tertiary61, this.Tertiary62, this.Tertiary63, this.Tertiary64,
        this.Tertiary65, this.Tertiary66, this.Tertiary67, this.Tertiary68, this.Tertiary69,
        this.Tertiary70, this.Tertiary71, this.Tertiary72, this.Tertiary73, this.Tertiary74,
        this.Tertiary75, this.Tertiary76, this.Tertiary77, this.Tertiary78, this.Tertiary79,
        this.Tertiary80, this.Tertiary81, this.Tertiary82, this.Tertiary83, this.Tertiary84,
        this.Tertiary85, this.Tertiary86, this.Tertiary87, this.Tertiary88, this.Tertiary89,
        this.Tertiary90, this.Tertiary91, this.Tertiary92, this.Tertiary93, this.Tertiary94,
        this.Tertiary95, this.Tertiary96, this.Tertiary97, this.Tertiary98, this.Tertiary99, this.Tertiary100,
        this.Error0, this.Error1, this.Error2, this.Error3, this.Error4,
        this.Error5, this.Error6, this.Error7, this.Error8, this.Error9,
        this.Error10, this.Error11, this.Error12, this.Error13, this.Error14,
        this.Error15, this.Error16, this.Error17, this.Error18, this.Error19,
        this.Error20, this.Error21, this.Error22, this.Error23, this.Error24,
        this.Error25, this.Error26, this.Error27, this.Error28, this.Error29,
        this.Error30, this.Error31, this.Error32, this.Error33, this.Error34,
        this.Error35, this.Error36, this.Error37, this.Error38, this.Error39,
        this.Error40, this.Error41, this.Error42, this.Error43, this.Error44,
        this.Error45, this.Error46, this.Error47, this.Error48, this.Error49,
        this.Error50, this.Error51, this.Error52, this.Error53, this.Error54,
        this.Error55, this.Error56, this.Error57, this.Error58, this.Error59,
        this.Error60, this.Error61, this.Error62, this.Error63, this.Error64,
        this.Error65, this.Error66, this.Error67, this.Error68, this.Error69,
        this.Error70, this.Error71, this.Error72, this.Error73, this.Error74,
        this.Error75, this.Error76, this.Error77, this.Error78, this.Error79,
        this.Error80, this.Error81, this.Error82, this.Error83, this.Error84,
        this.Error85, this.Error86, this.Error87, this.Error88, this.Error89,
        this.Error90, this.Error91, this.Error92, this.Error93, this.Error94,
        this.Error95, this.Error96, this.Error97, this.Error98, this.Error99, this.Error100,
        this.Neutral0, this.Neutral1, this.Neutral2, this.Neutral3, this.Neutral4,
        this.Neutral5, this.Neutral6, this.Neutral7, this.Neutral8, this.Neutral9,
        this.Neutral10, this.Neutral11, this.Neutral12, this.Neutral13, this.Neutral14,
        this.Neutral15, this.Neutral16, this.Neutral17, this.Neutral18, this.Neutral19,
        this.Neutral20, this.Neutral21, this.Neutral22, this.Neutral23, this.Neutral24,
        this.Neutral25, this.Neutral26, this.Neutral27, this.Neutral28, this.Neutral29,
        this.Neutral30, this.Neutral31, this.Neutral32, this.Neutral33, this.Neutral34,
        this.Neutral35, this.Neutral36, this.Neutral37, this.Neutral38, this.Neutral39,
        this.Neutral40, this.Neutral41, this.Neutral42, this.Neutral43, this.Neutral44,
        this.Neutral45, this.Neutral46, this.Neutral47, this.Neutral48, this.Neutral49,
        this.Neutral50, this.Neutral51, this.Neutral52, this.Neutral53, this.Neutral54,
        this.Neutral55, this.Neutral56, this.Neutral57, this.Neutral58, this.Neutral59,
        this.Neutral60, this.Neutral61, this.Neutral62, this.Neutral63, this.Neutral64,
        this.Neutral65, this.Neutral66, this.Neutral67, this.Neutral68, this.Neutral69,
        this.Neutral70, this.Neutral71, this.Neutral72, this.Neutral73, this.Neutral74,
        this.Neutral75, this.Neutral76, this.Neutral77, this.Neutral78, this.Neutral79,
        this.Neutral80, this.Neutral81, this.Neutral82, this.Neutral83, this.Neutral84,
        this.Neutral85, this.Neutral86, this.Neutral87, this.Neutral88, this.Neutral89,
        this.Neutral90, this.Neutral91, this.Neutral92, this.Neutral93, this.Neutral94,
        this.Neutral95, this.Neutral96, this.Neutral97, this.Neutral98, this.Neutral99, this.Neutral100,
        this.NeutralVariant0, this.NeutralVariant1, this.NeutralVariant2, this.NeutralVariant3, this.NeutralVariant4,
        this.NeutralVariant5, this.NeutralVariant6, this.NeutralVariant7, this.NeutralVariant8, this.NeutralVariant9,
        this.NeutralVariant10, this.NeutralVariant11, this.NeutralVariant12, this.NeutralVariant13, this.NeutralVariant14,
        this.NeutralVariant15, this.NeutralVariant16, this.NeutralVariant17, this.NeutralVariant18, this.NeutralVariant19,
        this.NeutralVariant20, this.NeutralVariant21, this.NeutralVariant22, this.NeutralVariant23, this.NeutralVariant24,
        this.NeutralVariant25, this.NeutralVariant26, this.NeutralVariant27, this.NeutralVariant28, this.NeutralVariant29,
        this.NeutralVariant30, this.NeutralVariant31, this.NeutralVariant32, this.NeutralVariant33, this.NeutralVariant34,
        this.NeutralVariant35, this.NeutralVariant36, this.NeutralVariant37, this.NeutralVariant38, this.NeutralVariant39,
        this.NeutralVariant40, this.NeutralVariant41, this.NeutralVariant42, this.NeutralVariant43, this.NeutralVariant44,
        this.NeutralVariant45, this.NeutralVariant46, this.NeutralVariant47, this.NeutralVariant48, this.NeutralVariant49,
        this.NeutralVariant50, this.NeutralVariant51, this.NeutralVariant52, this.NeutralVariant53, this.NeutralVariant54,
        this.NeutralVariant55, this.NeutralVariant56, this.NeutralVariant57, this.NeutralVariant58, this.NeutralVariant59,
        this.NeutralVariant60, this.NeutralVariant61, this.NeutralVariant62, this.NeutralVariant63, this.NeutralVariant64,
        this.NeutralVariant65, this.NeutralVariant66, this.NeutralVariant67, this.NeutralVariant68, this.NeutralVariant69,
        this.NeutralVariant70, this.NeutralVariant71, this.NeutralVariant72, this.NeutralVariant73, this.NeutralVariant74,
        this.NeutralVariant75, this.NeutralVariant76, this.NeutralVariant77, this.NeutralVariant78, this.NeutralVariant79,
        this.NeutralVariant80, this.NeutralVariant81, this.NeutralVariant82, this.NeutralVariant83, this.NeutralVariant84,
        this.NeutralVariant85, this.NeutralVariant86, this.NeutralVariant87, this.NeutralVariant88, this.NeutralVariant89,
        this.NeutralVariant90, this.NeutralVariant91, this.NeutralVariant92, this.NeutralVariant93, this.NeutralVariant94,
        this.NeutralVariant95, this.NeutralVariant96, this.NeutralVariant97, this.NeutralVariant98, this.NeutralVariant99, this.NeutralVariant100,
    ] as const

    public static readonly AllKeys = Palette.AllValues.map((palette) => palette.key)

}
