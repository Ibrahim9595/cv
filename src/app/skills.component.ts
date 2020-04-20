import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'skills',
    template: `
        <h4>{{data.title}}</h4>
        <table>
            <tr *ngFor='let d of data.skills'>
                <td>{{d.name}}</td>
                <td>
                    <i *ngFor='let s of fill(d.level)' class="fa fa-star" aria-hidden="true"></i><i *ngIf='isFloat(d.level)' class="fa fa-star-half-o" aria-hidden="true"></i>
                </td>
            </tr>
        </table>
    `,
    styles: [`
        table, tr{
            width: 100%;
        }

        table td:first-child{
            width: 20%;
        }

        table td:last-child{
            width: 80%;
            text-align: center;
        }
    `]
})

export class SkillsComponent {
    @Input('data') data: any;

    fill(num: string) {
        return Array(parseInt(num + '')).fill(1);
    }

    isFloat(num: string) {
        return parseInt(num) - parseFloat(num) !== 0;
    }
}