type MeasurementSpaceDeclaration<K extends string, V extends number | string, U extends string> = `${K}: ${V}${U}${';' | ''}`

export class MeasurementSpace<
    K extends string,
    V extends number | string,
    U extends string
> implements ICSSDeclaration<K, V, MeasurementSpaceDeclaration<K, V, U>> {
    public readonly key  : K
    public readonly value: V
    public readonly unit : U

    public toJSON() { return ({ key: this.key, value: this.value, unit: this.unit }) }
    public toCSSDeclaration({ semicolon = false, wrapVariable = false }: { semicolon?: boolean, wrapVariable?: boolean } = {}): string {
        return wrapVariable
            ? `var(${this.key}, ${this.value}${this.unit})`
            : `${this.key}: ${this.value}${this.unit}${semicolon ? ';' : ''}`
    }
    public toString() { return this.toCSSDeclaration() }

    private constructor(key: K, value: V, unit: U) {
        this.key   = key
        this.value = value
        this.unit  = unit
    }

    public static readonly Space0   = new MeasurementSpace('--md-sys-measurement-space0',   0,  'px')
    public static readonly Space25  = new MeasurementSpace('--md-sys-measurement-space25',  2,  'px')
    public static readonly Space50  = new MeasurementSpace('--md-sys-measurement-space50',  4,  'px')
    public static readonly Space75  = new MeasurementSpace('--md-sys-measurement-space75',  6,  'px')
    public static readonly Space100 = new MeasurementSpace('--md-sys-measurement-space100', 8,  'px')
    public static readonly Space125 = new MeasurementSpace('--md-sys-measurement-space125', 10, 'px')
    public static readonly Space150 = new MeasurementSpace('--md-sys-measurement-space150', 12, 'px')
    public static readonly Space175 = new MeasurementSpace('--md-sys-measurement-space175', 14, 'px')
    public static readonly Space200 = new MeasurementSpace('--md-sys-measurement-space200', 16, 'px')
    public static readonly Space250 = new MeasurementSpace('--md-sys-measurement-space250', 20, 'px')
    public static readonly Space300 = new MeasurementSpace('--md-sys-measurement-space300', 24, 'px')
    public static readonly Space400 = new MeasurementSpace('--md-sys-measurement-space400', 32, 'px')
    public static readonly Space450 = new MeasurementSpace('--md-sys-measurement-space450', 36, 'px')
    public static readonly Space500 = new MeasurementSpace('--md-sys-measurement-space500', 40, 'px')
    public static readonly Space600 = new MeasurementSpace('--md-sys-measurement-space600', 48, 'px')
    public static readonly Space700 = new MeasurementSpace('--md-sys-measurement-space700', 56, 'px')
    public static readonly Space800 = new MeasurementSpace('--md-sys-measurement-space800', 64, 'px')
    public static readonly Space900 = new MeasurementSpace('--md-sys-measurement-space900', 72, 'px')

    public static readonly AllEnums = {
        Space0  : MeasurementSpace.Space0,
        Space25 : MeasurementSpace.Space25,
        Space50 : MeasurementSpace.Space50,
        Space75 : MeasurementSpace.Space75,
        Space100: MeasurementSpace.Space100,
        Space125: MeasurementSpace.Space125,
        Space150: MeasurementSpace.Space150,
        Space175: MeasurementSpace.Space175,
        Space200: MeasurementSpace.Space200,
        Space250: MeasurementSpace.Space250,
        Space300: MeasurementSpace.Space300,
        Space400: MeasurementSpace.Space400,
        Space450: MeasurementSpace.Space450,
        Space500: MeasurementSpace.Space500,
        Space600: MeasurementSpace.Space600,
        Space700: MeasurementSpace.Space700,
        Space800: MeasurementSpace.Space800,
        Space900: MeasurementSpace.Space900
    } as const

}
