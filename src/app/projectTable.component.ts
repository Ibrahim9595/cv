import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'projects-table',
    template: `
        <h3>{{data.title}}</h3>
        <table class="table">
            <thead class="thead-default">
                <tr>
                    <th *ngFor='let k of keys'>{{k}}</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor='let d of data.projects'>
                    <td *ngFor='let k of keys'>{{d[k]}}</td>
                </tr>
            </tbody>
    </table>
    <hr>
    `,
    styles: [`
    .table {
        width: 100%;
        text-align: center;
    }
    `]
})

export class ProjectTableComponent implements OnInit{
    @Input('data') data: any;
    @Input('keys') keys: any[];

    ngOnInit(){
        console.log(this.data, this.keys)
    }
}