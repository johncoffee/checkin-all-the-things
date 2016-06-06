import {Component} from '@angular/core';

@Component({
    selector: 'quotes-table',
    template: `

<div class="row">
    <div class="small-12 medium-6">
        <table class=" standard-table standard-table--stack">
            <thead>
                <tr>
                    <th *ngFor="let header of headers" (click)="sortBy(header)">
                        {{header.label}}
                        <span *ngIf="currentSort">(s)</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let row of rows">
                    <td>{{row.id}}</td>
                    <td>{{row.value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
})


export class QuotesTable3Component {

    currentSort: Boolean = true;

    rows:Array<Row>;
    headers:Array<Row>;

    constructor() {

        this.headers = [
            new Row('Instrument'),
            new Row('BID'),
            new Row('MID'),
            new Row('ASK'),
            new Row('% CHANGE'),
            new Row('Time'),
            new Row(''),
        ];

        this.rows = [];

        for (var i:number = 0; i < 3; i++) {
            var row = new Row("USDDSK");
            row.id = i;
            row.mid = row.bid = row.ask = "1.12342";
            row.pct = "12.0001%";
            row.time = "12:10";
            this.rows.push(row);
        }
    }

    public static sortBy (header:Row) {
        console.log(header);
    }
}

class Row {
    id: number;
    value: number = Math.random();
    label: string;
    mid: string;
    bid: string;
    ask: string;
    pct: string;
    time: string;

    constructor(label:string) {
        if (label) {
            this.label = label;
        }
    }
}


