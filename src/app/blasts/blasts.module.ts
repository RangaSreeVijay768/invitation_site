import {NgModule} from "@angular/core";
import {CoreModule} from "@core/core.module";
import {
    BlastsGetBlastListsByUserAccountComponent,
    BlastsGetBlastListsByUserAccountNoTemplateComponent, BlastsGetBlastListsByUserAccountScrollingComponent
} from './components/blasts-get-blast-lists-by-user-account/blasts-get-blast-lists-by-user-account.component';
import {
  BlastsGetBlastListItemsByBlastListComponent,
  BlastsGetBlastListItemsByBlastListNoTemplateComponent
} from './components/blasts-get-blast-list-items-by-blast-list/blasts-get-blast-list-items-by-blast-list.component';
import {GetBlastListResolver} from "@app/blasts/blasts.resolvers";
import {
  BlastsGetAllBlastPackagesComponent,
  BlastsGetAllBlastPackagesNoTemplateComponent
} from './components/blasts-get-all-blast-packages/blasts-get-all-blast-packages.component';
import {
    BlastsCopyBlastListComponent,
    BlastsCopyBlastListNoTemplateComponent
} from './components/blasts-copy-blast-list/blasts-copy-blast-list.component';
import { BlastsSearchBlastListsFormComponent } from './components/blasts-search-blast-lists-form/blasts-search-blast-lists-form.component';
import {
    UserProfilesGetEventBlastByBlastListScrollingComponent
} from "@app/user-profiles/components/user-profiles-get-event-blast-by-blast-list/user-profiles-get-event-blast-by-blast-list.component";

@NgModule({
    declarations: [


        BlastsGetBlastListsByUserAccountComponent,
        BlastsGetBlastListsByUserAccountNoTemplateComponent,
        BlastsGetBlastListItemsByBlastListComponent,
        BlastsGetBlastListItemsByBlastListNoTemplateComponent,
        BlastsGetAllBlastPackagesComponent,
        BlastsGetAllBlastPackagesNoTemplateComponent,
        BlastsCopyBlastListComponent,
        BlastsCopyBlastListNoTemplateComponent,
        BlastsSearchBlastListsFormComponent,
    ],
  imports: [
    CoreModule
  ],
    exports: [
        BlastsGetBlastListsByUserAccountNoTemplateComponent,
        BlastsGetBlastListItemsByBlastListNoTemplateComponent,
        BlastsGetAllBlastPackagesNoTemplateComponent,
        BlastsCopyBlastListNoTemplateComponent,
        BlastsSearchBlastListsFormComponent,
    ],
  providers: [
    GetBlastListResolver,
  ]
  // entryComponents:[
  //
  // ]
})

export class BlastsModule {
}
