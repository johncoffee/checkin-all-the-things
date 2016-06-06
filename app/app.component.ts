import {Component} from '@angular/core';
import {QuotesTable3Component} from "./quotesTable.component";

@Component({
    selector: 'my-app',
    template: `<h1>Quotes table</h1>
    <quotes-table></quotes-table>
`,
    directives: [QuotesTable3Component]
})

export class AppComponent {

    constructor() {
    }
}

