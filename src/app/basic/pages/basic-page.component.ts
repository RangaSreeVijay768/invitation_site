import {PageComponent} from "@core/components/page.component";
import {Directive} from "@angular/core";

@Directive()
export abstract class BasicPageComponent extends PageComponent {

    // noinspection TsLint
    override ngOnInit() {
        super.ngOnInit();
        const _this = this;
        this.authService.getAuthToken()
            .then(session => {
                if (_this.authService.loggedAccount && session) {
                    return _this.router.navigateByUrl(_this.getLoggedInRouterUrl(), {replaceUrl: true});
                }
                return false;
            });
    }

    abstract getLoggedInRouterUrl(): string ;
}
