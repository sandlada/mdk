export interface ICSSDeclaration<
    KEY extends string = string,
    VALUE = unknown,
    CSSDECELARATION extends string = string
> {
    readonly key: KEY
    readonly value: VALUE

    toCSSDeclaration(options?: {
        semicolon?: boolean
        wrapVariable?: boolean
    }): CSSDECELARATION | string
    toString(): string
    toJSON(): Record<string, unknown>
}
