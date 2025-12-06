export interface IValueObject<T> {
    readonly value: T
    toString(): string
}