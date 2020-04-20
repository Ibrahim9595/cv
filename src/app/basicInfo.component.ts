import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'basic-info',
    template: `
        <div class='row'>
        <!-- <img [src]="data.src" width="130" height="130" class="col-md-5"> -->
            <ul class='col-md-7'>
                <li *ngFor="let d of dataArray">
                    <i *ngIf='d == "grade"'>Grade: </i>
                    <span style="font-weight: bold">{{data[d]}}</span>
                    <i *ngIf='d == "grade"'>%</i>
                </li>
            </ul>
        <div>
    `,
    styles: [`
        div{
            width:100%;
            margin-bottom: 50px;
        }

        img{
            border-radius: 50%;
        }

        ul{
            display: block;
            margin: 10px auto 0 auto;
            padding-left:30px;
            list-style-type: none;
        }

        li{
            margin-left:-30px;
            text-align: center;
        }
    `]
})

export class BasicInfoComponent implements OnInit {
    @Input('data') data: any;
    dataArray: any[] = [];
    ngOnInit() {
        for (const i in this.data) {
            if (i === 'src') {
                continue;
            }
            this.dataArray.push(i);
        }
    }

}
