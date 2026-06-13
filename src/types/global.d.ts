declare global {

    export interface ICSSDeclaration<
        KEY extends string = string,
        VALUE,
        CSSDECELARATION extends string
    > {
        readonly key: KEY
        readonly value: VALUE

        toCSSDeclaration(options?: {
            semicolon?: boolean
            wrapVariable?: boolean
        }): CSSDECELARATION | string
        toString(): string
        toJSON(): Record
    }

}

export {}
