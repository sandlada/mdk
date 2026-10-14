import { describe, it, expect } from 'vitest'
import { Color } from '../src/domain/color.js'
import { Palette } from '../src/domain/palette.js'
import { Duration } from '../src/domain/duration.js'
import { Easing } from '../src/domain/easing.js'
import { ElevationLevel } from '../src/domain/elevation.js'
import { Shape } from '../src/domain/shape.js'
import { Space } from '../src/domain/spacing.js'
import { State } from '../src/domain/state.js'
import { Typeface } from '../src/domain/typeface.js'
import { Typescale } from '../src/domain/typescale.js'
import { Variant } from '../src/domain/variant.js'

describe('ICSSDeclaration.ToCSSValue', () => {
    it('should return the raw value for unit-less tokens', () => {
        expect(Color.From().Primary.ToCSSValue()).toBe('light-dark(#006d38, #76f29e)')
        expect(Palette.From().Primary40.ToCSSValue()).toBe('#006d38')
        expect(Typeface.FontBrand.ToCSSValue()).toBe('Roboto')
    })

    it('should append the Unit for unit-bearing tokens', () => {
        expect(Duration.Short1.ToCSSValue()).toBe('50ms')
        expect(ElevationLevel.Level1.ToCSSValue()).toBe('1px')
        expect(Shape.Medium.ToCSSValue()).toBe('12px')
        expect(Space.Space100.ToCSSValue()).toBe('8px')
        expect(State.HoveredStateLayerOpacity.ToCSSValue()).toBe('0.08')
        expect(Typescale.DisplayLarge.FontSize.ToCSSValue()).toBe('57px')
    })
})

describe('Easing.ToCSSValue', () => {
    it('should format cubic-bezier with comma + space separators, matching ToCSSDeclaration', () => {
        expect(Easing.Standard.ToCSSValue()).toBe('cubic-bezier(0.2, 0, 0, 1)')
    })
})

describe('Variant', () => {
    it('should expose enum values and a name-based toString', () => {
        expect(Variant.TonalSpot.Value).toBe(2)
        expect(Variant.TonalSpot.toString()).toBe('TonalSpot')
    })
})
