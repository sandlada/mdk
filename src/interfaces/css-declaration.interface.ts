export interface ICSSDeclaration<
    KEY extends string = string,
    VALUE = unknown,
    CSSDECLARATION extends string = string,
    CSSVARIABLE extends string = string
> {
    readonly Key: KEY
    readonly Value: VALUE

    ToCSSDeclaration(options?: {
        Semicolon?: boolean
    }): CSSDECLARATION | string
    ToCSSVariable(): CSSVARIABLE | string
    toString(): string
    toJSON(): Record<string, unknown>
}