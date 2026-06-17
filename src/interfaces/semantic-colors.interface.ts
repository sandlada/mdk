import type { SemanticColorNames } from "./semantic-color-names.interface";

export type SemanticColors<V = string> = Record<
    SemanticColorNames,
    V
>
