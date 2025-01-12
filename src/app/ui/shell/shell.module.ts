import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { IconModule } from "../shared/components/icon/icon.module"
import { ShellComponent } from "./components/shell/shell.component"
import { TagsFilterModule} from "src/app/ui/shared/components/tags-filter/tags-filter.module"

@NgModule({
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    TagsFilterModule
  ]
})
export class ShellModule {
}
