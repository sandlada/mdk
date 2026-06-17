export interface ICSSDeclaration<
    KEY extends string = string,
    VALUE = unknown,
    CSSDECELARATION extends string = string
> {
    readonly Key: KEY
    readonly Value: VALUE

    ToCSSDeclaration(options?: {
        Semicolon?: boolean
        WrapVariable?: boolean
    }): CSSDECELARATION | string
    toString(): string
    toJSON(): Record<string, unknown>
}
