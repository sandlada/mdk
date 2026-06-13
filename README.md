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
console.log(surface.key)

/**
 * @output
 * ```
 * light-dark(#f4fbf1, #0e150f)
 * ```
 */
console.log(surface.value)

/**
 * @output
 * ```
 * --md-sys-color-surface: light-dark(#f4fbf1, #0e150f)
 * ```
 */
console.log(surface.toCSSDeclaration())

/**
 * @output
 * ```
 * var(--md-sys-color-surface, light-dark(#f4fbf1, #0e150f))
 * ```
 */
console.log(surface.toCSSDeclaration({ wrapVariable: true }))

const yourDiv = document.querySelector('body')
yourDiv.style.setProperty('background-color', surface.toCSSDeclaration({ wrapVariable: true }))
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
console.log(shapeLarge.key)

/**
 * @output
 * ```
 * 16
 * ```
 */
console.log(shapeLarge.value)

/**
 * @output
 * ```
 * px
 * ```
 */
console.log(shapeLarge.unit)

/**
 * @output
 * ```
 * --md-sys-shape-corner-large: 16px
 * ```
 */
console.log(shapeLarge.toCSSDeclaration())

/**
 * @output
 * ```
 * var(--md-sys-shape-corner-large, 16px)
 * ```
 */
console.log(shapeLarge.toCSSDeclaration({ wrapVariable: true }))

const myBox = document.querySelector('#my-box')
myBox.style.setProperty('border-radius', shapeLarge.toCSSDeclaration({ wrapVariable: true }))
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
console.log(fontSize.key)

/**
 * @output
 * ```
 * 57
 * ```
 */
console.log(fontSize.value)

/**
 * @output
 * ```
 * px
 * ```
 */
console.log(fontSize.unit)

/**
 * @output
 * ```
 * --md-sys-typescale-display-large-font-size: 57px
 * ```
 */
console.log(fontSize.toCSSDeclaration())

/**
 * @output
 * ```
 * var(--md-sys-typescale-display-large-font-size, 57px)
 * ```
 */
console.log(fontSize.toCSSDeclaration({ wrapVariable: true }))
```

## API

### `toCSSDeclaration(options?)`

All token classes implement the `ICSSDeclaration` interface and provide the `toCSSDeclaration` method.

| Option         | Type      | Default | Description                                             |
| -------------- | --------- | ------- | ------------------------------------------------------- |
| `semicolon`    | `boolean` | `false` | Append a semicolon to the declaration                   |
| `wrapVariable` | `boolean` | `false` | Output as `var(--key, value)` instead of `--key: value` |

When `wrapVariable` is `true`, the output becomes a CSS `var()` function call suitable for direct use as a CSS property value. The `semicolon` option is ignored when `wrapVariable` is `true`.

```typescript
Color.Primary.toCSSDeclaration()                           // --md-sys-color-primary: light-dark(#006d38, #76f29e)
Color.Primary.toCSSDeclaration({ semicolon: true })        // --md-sys-color-primary: light-dark(#006d38, #76f29e);
Color.Primary.toCSSDeclaration({ wrapVariable: true })     // var(--md-sys-color-primary, light-dark(#006d38, #76f29e))
