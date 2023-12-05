import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {ImagesModule} from '@images/images.module';


@NgModule({
    declarations: [],
    imports: [
        CoreModule,
        ImagesModule,
    ],
    exports: [
        CoreModule,
    ],
    providers: []

})
export class GlobalModule {
}
