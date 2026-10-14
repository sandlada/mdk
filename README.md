# @sandlada/mdk

`@sandlada/mdk`, Material Design Kit, a JavaScript library based on Material Design 3, providing data such as color, shape, shadow level, etc:

- Palette
- Color
- ElevationLevel
- Duration
- Easing
- Shape
- State
- Space
- Typeface
- Typescale

## Installation

```shell
npm i @sandlada/mdk
# or
pnpm add @sandlada/mdk
```

## Usage

Including:

- `Color`
- `Palette`
- `Duration`
- `Easing`
- `ElevationLevel`
- `Shape`
- `Space`
- `State`
- `Typeface`
- `Typescale`
- `Variant`
- `ContrastLevel`

### Use Color

````typescript
import { Color } from '@sandlada/mdk'

const surface = Color.From().Surface

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
console.log(surface.ToCSSVariable())

const yourDiv = document.querySelector('body')
yourDiv.style.setProperty('background-color', surface.ToCSSVariable())
````

### Use Shape

````typescript
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
console.log(shapeLarge.ToCSSVariable())

const myBox = document.querySelector('#my-box')
myBox.style.setProperty('border-radius', shapeLarge.ToCSSVariable())
````

### Use Typescale

````typescript
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
console.log(fontSize.ToCSSVariable())
````

## API

### `ToCSSDeclaration(options?)`

All token classes implement the `ICSSDeclaration` interface and provide the `ToCSSDeclaration` method, which outputs a CSS custom property declaration (`--key: value`).

| Option      | Type      | Default | Description                           |
| ----------- | --------- | ------- | ------------------------------------- |
| `Semicolon` | `boolean` | `false` | Append a semicolon to the declaration |

```typescript
Color.From().Primary.ToCSSDeclaration() // --md-sys-color-primary: light-dark(#006d38, #76f29e)
Color.From().Primary.ToCSSDeclaration({ Semicolon: true }) // --md-sys-color-primary: light-dark(#006d38, #76f29e);
```

### `ToCSSVariable()`

All token classes also provide the `ToCSSVariable` method, which outputs a CSS `var()` function call (`var(--key, value)`) suitable for direct use as a CSS property value.

```typescript
Color.From().Primary.ToCSSVariable() // var(--md-sys-color-primary, light-dark(#006d38, #76f29e))
Duration.Short1.ToCSSVariable() // var(--md-sys-motion-duration-short1, 50ms)
Shape.Medium.ToCSSVariable() // var(--md-sys-shape-corner-medium, 12px)
```

### `ToCSSValue()`

All token classes provide the `ToCSSValue` method, which outputs the bare value (including its unit when applicable), without the custom property name or `var()` wrapper.

```typescript
Color.From().Primary.ToCSSValue() // light-dark(#006d38, #76f29e)
Duration.Short1.ToCSSValue() // 50ms
Shape.Medium.ToCSSValue() // 12px
Easing.Standard.ToCSSValue() // cubic-bezier(0.2, 0, 0, 1)
```

### `Variant` and `ContrastLevel`

`Variant` and `ContrastLevel` are enum-like helpers used when generating a color scheme. They do not implement `ICSSDeclaration` because they are not CSS custom property tokens.
