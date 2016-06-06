"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var QuotesTable3Component = (function () {
    function QuotesTable3Component() {
        this.currentSort = true;
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
        for (var i = 0; i < 3; i++) {
            var row = new Row("USDDSK");
            row.id = i;
            row.mid = row.bid = row.ask = "1.12342";
            row.pct = "12.0001%";
            row.time = "12:10";
            this.rows.push(row);
        }
    }
    QuotesTable3Component.sortBy = function (header) {
        console.log(header);
    };
    QuotesTable3Component = __decorate([
        core_1.Component({
            selector: 'quotes-table',
            template: "\n\n<div class=\"row\">\n    <div class=\"small-12 medium-6\">\n        <table class=\" standard-table standard-table--stack\">\n            <thead>\n                <tr>\n                    <th *ngFor=\"let header of headers\" (click)=\"sortBy(header)\">\n                        {{header.label}}\n                        <span *ngIf=\"currentSort\">(s)</span>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let row of rows\">\n                    <td>{{row.id}}</td>\n                    <td>{{row.value}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], QuotesTable3Component);
    return QuotesTable3Component;
}());
exports.QuotesTable3Component = QuotesTable3Component;
var Row = (function () {
    function Row(label) {
        this.value = Math.random();
        if (label) {
            this.label = label;
        }
    }
    return Row;
}());
//# sourceMappingURL=quotesTable.component.js.map