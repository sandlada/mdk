declare global {

    export interface ICSSDeclaration<
        KEY extends string = string,
        VALUE,
        CSSDECELARATION extends string
    > {
        readonly key: KEY
        readonly value: VALUE

        toCSSDeclaration(semicolon: boolean = false): CSSDECELARATION
        toString(): string
        toJSON(): Record
    }

}

export {}
