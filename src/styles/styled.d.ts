import "styled-components"
import { ITheme } from "./themes/Itheme";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}