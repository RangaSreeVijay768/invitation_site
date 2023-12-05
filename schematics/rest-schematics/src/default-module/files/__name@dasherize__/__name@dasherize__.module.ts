import {NgModule} from "@angular/core";
import {CoreModule} from "@core/core.module";

@NgModule({
    declarations: [

    ],
    imports: [
        CoreModule
    ],
    exports: [

    ],
    // entryComponents:[
    //
    // ]
})

export class <%= classify(name) % >Module { }
