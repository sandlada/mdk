import type { ICSSDeclaration } from '../interfaces/css-declaration.interface.js'

export type CSSTokenDeclaration<K extends string, V extends number | string, U extends string> = `${K}: ${V}${U}${';' | ''}`
export type CSSTokenVariable<K extends string, V extends number | string, U extends string> = `var(${K}, ${V}${U})`
export type CSSTokenValue<V extends number | string, U extends string> = `${V}${U}`

export function toCSSDeclaration<K extends string, V extends number | string, U extends string>(key: K, value: V, unit: U, semicolon: boolean): CSSTokenDeclaration<K, V, U> {
    return `${key}: ${value}${unit}${semicolon ? ';' : ''}` as CSSTokenDeclaration<K, V, U>
}

export function toCSSVariable<K extends string, V extends number | string, U extends string>(key: K, value: V, unit: U): CSSTokenVariable<K, V, U> {
    return `var(${key}, ${value}${unit})` as CSSTokenVariable<K, V, U>
}

export function toCSSValue<V extends number | string, U extends string>(value: V, unit: U): CSSTokenValue<V, U> {
    return `${value}${unit}` as CSSTokenValue<V, U>
}

/**
 * Base class for design tokens that serialize to a `--key: value<unit>` CSS custom
 * property declaration and a `var(--key, value<unit>)` variable reference.
 *
 * Subclasses only need to declare their static tokens; serialization is inherited.
 */
export class CSSToken<K extends string, V extends number | string, U extends string = ''> implements ICSSDeclaration<K, V, CSSTokenDeclaration<K, V, U>, CSSTokenVariable<K, V, U>> {
    public readonly Key: K
    public readonly Value: V
    public readonly Unit: U

    public toJSON() {
        return { Key: this.Key, Value: this.Value, Unit: this.Unit }
    }
    public toString(): CSSTokenDeclaration<K, V, U> {
        return this.ToCSSDeclaration()
    }

    public ToCSSDeclaration(): `${K}: ${V}${U}`
    public ToCSSDeclaration(options: { Semicolon: true }): `${K}: ${V}${U};`
    public ToCSSDeclaration(options?: { Semicolon?: boolean }): CSSTokenDeclaration<K, V, U>
    public ToCSSDeclaration({ Semicolon = false }: { Semicolon?: boolean } = {}): CSSTokenDeclaration<K, V, U> {
        return toCSSDeclaration(this.Key, this.Value, this.Unit, Semicolon)
    }

    public ToCSSVariable(): CSSTokenVariable<K, V, U> {
        return toCSSVariable(this.Key, this.Value, this.Unit)
    }

    public ToCSSValue(): CSSTokenValue<V, U> {
        return toCSSValue(this.Value, this.Unit)
    }

    protected constructor(Key: K, Value: V, Unit: U) {
        this.Key = Key
        this.Value = Value
        this.Unit = Unit
    }
}
