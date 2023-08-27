import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirecrtive } from "./dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirecrtive
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirecrtive,
        CommonModule
    ],
    /*entryComponents: [AlertComponent]*/
})

export class SharedModule {}