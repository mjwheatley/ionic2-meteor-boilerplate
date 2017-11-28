import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: "welcome-header",
    templateUrl: "welcome-header.html"
})
export class WelcomeHeaderComponent {
    constructor(public translate:TranslateService) {
    }
}