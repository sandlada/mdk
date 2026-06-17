# @sandlada/mdk

`@sandlada/mdk`, Material Design Kit, a JavaScript library based on Material Design 3, providing data such as color, shape, shadow level, etc:

+ Palette
+ Color
+ ElevationLevel
+ Duration
+ Easing
+ Shape
+ State
+ Space
+ Typeface
+ Typescale

## Installation

```shell
npm i @sandlada/mdk
```

## Usage

Including:

- `Color`
- `Palette`
- `Duration`
- `Easing`
- `Elevation`
- `Shape`
- `Space`
- `State`
- `Typeface`
- `Typescale`
- `Variant`
- `ContrastLevel`

### Use Color

```typescript
import { Color } from '@sandlada/mdk'

const surface = Color.Surface

/**
 * @output
 * ```
 * --md-sys-color-surface
 * ```
 */
console.log(surface.Key)

/**
 * @output
 * ```
 * light-dark(#f4fbf1, #0e150f)
 * ```
 */
console.log(surface.Value)

/**
 * @output
 * ```
 * --md-sys-color-surface: light-dark(#f4fbf1, #0e150f)
 * ```
 */
console.log(surface.ToCSSDeclaration())

/**
 * @output
 * ```
 * var(--md-sys-color-surface, light-dark(#f4fbf1, #0e150f))
 * ```
 */
console.log(surface.ToCSSDeclaration({ WrapVariable: true }))

const yourDiv = document.querySelector('body')
yourDiv.style.setProperty('background-color', surface.ToCSSDeclaration({ WrapVariable: true }))
```

### Use Shape

```typescript
import { Shape } from '@sandlada/mdk'

const shapeLarge = Shape.Large

/**
 * @output
 * ```
 * --md-sys-shape-corner-large
 * ```
 */
console.log(shapeLarge.Key)

/**
 * @output
 * ```
 * 16
 * ```
 */
console.log(shapeLarge.Value)

/**
 * @output
 * ```
 * px
 * ```
 */
console.log(shapeLarge.Unit)

/**
 * @output
 * ```
 * --md-sys-shape-corner-large: 16px
 * ```
 */
console.log(shapeLarge.ToCSSDeclaration())

/**
 * @output
 * ```
 * var(--md-sys-shape-corner-large, 16px)
 * ```
 */
console.log(shapeLarge.ToCSSDeclaration({ WrapVariable: true }))

const myBox = document.querySelector('#my-box')
myBox.style.setProperty('border-radius', shapeLarge.ToCSSDeclaration({ WrapVariable: true }))
```

### Use Typescale

```typescript
import { Typescale } from '@sandlada/mdk'

const displayLarge = Typescale.DisplayLarge

const fontSize = displayLarge.FontSize

/**
 * @output
 * ```
 * --md-sys-typescale-display-large-font-size
 * ```
 */
console.log(fontSize.Key)

/**
 * @output
 * ```
 * 57
 * ```
 */
console.log(fontSize.Value)

/**
 * @output
 * ```
 * px
 * ```
 */
console.log(fontSize.Unit)

/**
 * @output
 * ```
 * --md-sys-typescale-display-large-font-size: 57px
 * ```
 */
console.log(fontSize.ToCSSDeclaration())

/**
 * @output
 * ```
 * var(--md-sys-typescale-display-large-font-size, 57px)
 * ```
 */
console.log(fontSize.ToCSSDeclaration({ WrapVariable: true }))
```

## API

### `ToCSSDeclaration(options?)`

All token classes implement the `ICSSDeclaration` interface and provide the `ToCSSDeclaration` method.

| Option         | Type      | Default | Description                                             |
| -------------- | --------- | ------- | ------------------------------------------------------- |
| `Semicolon`    | `boolean` | `false` | Append a Semicolon to the declaration                   |
| `WrapVariable` | `boolean` | `false` | Output as `var(--key, value)` instead of `--key: value` |

When `WrapVariable` is `true`, the output becomes a CSS `var()` function call suitable for direct use as a CSS property Value. The `Semicolon` option is ignored when `WrapVariable` is `true`.

```typescript
Color.Primary.ToCSSDeclaration()                           // --md-sys-color-primary: light-dark(#006d38, #76f29e)
Color.Primary.ToCSSDeclaration({ Semicolon: true })        // --md-sys-color-primary: light-dark(#006d38, #76f29e);
Color.Primary.ToCSSDeclaration({ WrapVariable: true })     // var(--md-sys-color-primary, light-dark(#006d38, #76f29e))
