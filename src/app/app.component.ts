import { Component } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-root',
    template: `
    <!-- <button (click)="captureScreen(data)">Capture</button> -->
            <div #data style="display: flex;padding:0;margin:0">
                <div id="wrapper" style="width: 25%">
                    <basic-info [data]="userData"></basic-info>
                    <skills *ngFor="let sd of skillsData" [data]="sd"></skills>
                </div>
                <div style="padding:10px;width: 75%;">
                    <projects-table *ngFor='let pd of projectsData' [data]='pd' [keys]='keys'></projects-table>
                    <h3>Further communications</h3>
                    <ul class="contact-list">
                        <li><i class="fa fa-github"></i> Ibrahim9595</li>
                        <li><i class="fa fa-codepen"></i>ibrahim95</li>
                        <li><i class="fa fa-linkedin-square" style="color:rgb(0, 119, 181)"></i>Ibrahim9595</li>
                    </ul>
                </div>
            </div>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    captureScreen(data) {
        html2canvas(data).then(canvas => {
            // Few necessary setting options
            let imgWidth = 208;
            let pageHeight = 295;
            let imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
            let position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    }
    userData = {
        src: 'assets/images/1.jpeg',
        name: 'Ibrahim Mamdouh Ibrahim',
        spicialization: 'Software Engineer',
        email: 'ibrahim13013@feng.bu.edu.eg',
        phone: '01151017012',
        colledge: 'Shoubra Faculty of Engineering',
        major: 'Computer Engineering',
        grade: 93.13
    };
    skillsData = [
        {
            title: 'Programming Languages:-',
            skills: [
                {
                    name: 'C',
                    level: 2
                },
                {
                    name: 'C++',
                    level: 2
                },
                {
                    name: 'C#',
                    level: 3.5
                },
                {
                    name: 'Java',
                    level: 3.5
                },
                {
                    name: 'Python',
                    level: 4.5
                },
                {
                    name: 'PHP',
                    level: 4
                },
                {
                    name: 'Javascript/Typescript',
                    level: 5
                }
            ]
        },
        {
            title: 'FrameWorks & Technologies:-',
            skills: [
                {
                    name: 'Angular2+',
                    level: 4.5
                },
                {
                    name: 'Laravel',
                    level: 4
                },
                {
                    name: 'Socket.io',
                    level: 4
                },
                {
                    name: 'React',
                    level: 4
                },
                {
                    name: 'React Native',
                    level: 4
                },
                {
                    name: 'Mobx',
                    level: 4
                },
                {
                    name: 'Redux',
                    level: 3.5
                },
            ]
        },
        {
            title: 'Core Concepts:-',
            skills: [
                {
                    name: 'OOP',
                    level: 5
                },
                {
                    name: 'Database design',
                    level: 4
                },
                {
                    name: 'REST api',
                    level: 4
                },
                {
                    name: 'MVC',
                    level: 4
                },
                {
                    name: 'MVVM',
                    level: 3.5
                }
            ]
        },
        {
            title: 'Furthur knowledge:-',
            skills: [
                {
                    name: 'Datastructures',
                    level: 4
                },
                {
                    name: 'Algorithms',
                    level: 3.5
                },
                {
                    name: 'Machine Learning',
                    level: 3
                },
                {
                    name: 'Search Algorithms',
                    level: 4
                },
                {
                    name: 'Neural Networks',
                    level: 3.5
                }
            ]
        },
    ];

    projectsData = [
        {
            title: 'Learning Projects',
            projects: [
                {
                    title: 'Line follower robot',
                    purpose: 'Electronics semester project',
                    technologies: 'Arduino'
                },
                {
                    title: 'Library System',
                    purpose: 'Application on web technologies',
                    technologies: 'PHP, JS, AJAX, HTML, CSS'
                },
                {
                    title: 'Personality testing website',
                    purpose: 'Application on Angularjs',
                    technologies: 'PHP, JS, Angularjs, HTML, CSS'
                },
                {
                    title: 'One page dynamic protofolio',
                    purpose: 'Application on Angularjs',
                    technologies: 'PHP, JS, Angularjs, HTML, CSS'
                },
                {
                    title: 'Encrypted mails system',
                    purpose: 'Application on Java language',
                    technologies: 'Java, JDBMS, Eclipse GUI builder'
                },
                {
                    title: 'Book store & live discussion website',
                    purpose: 'Application on Angular2 and firebase for live discussion',
                    technologies: 'PHP, JS, Angular2, firebase, HTML, CSS'
                },
                {
                    title: 'Operating system virtualization',
                    purpose: 'Symester project in OS',
                    technologies: 'Java, Netbeans GUI builder'
                }
            ]
        },
        {
            title: 'Freelancing Projects',
            projects: [
                {
                    title: 'Travel management System',
                    purpose: 'The application helps a traveling company to organize and manage thier travels and agents',
                    technologies: 'Laravel, Angular2, HTML, CSS'
                },
                {
                    title: 'Yousophia Mobile App',
                    purpose: 'Application that\'s going to help people to get thier every day shopping list by Yousophia company',
                    technologies: 'PHP, Angular2, Cordova'
                },
                {
                    title: 'QE markets',
                    purpose: 'The application helps for online grossery shopping',
                    technologies: 'nodejs, Graphql, Angular'
                }
            ]
        },
        {
            title: 'The Elephant tech (1/2/2019 - 1/12/2019)',
            projects: [
                {
                    title: 'Nature Valley',
                    purpose: 'Nature Valley company health app',
                    technologies: 'React Native, firebase, nodejs'
                },
                {
                    title: 'Harmonica',
                    purpose: 'Marrige facilitation app',
                    technologies: 'React Native, firebase, nodejs'
                },
                {
                    title: 'Foodbus',
                    purpose: 'Food delivery app in smart village',
                    technologies: 'React Native, firebase, nodejs'
                },
                {
                    title: 'Heygurus',
                    purpose: 'Online interviews practicing platform',
                    technologies: 'Angular, firebase, nodejs'
                },
            ]
        },
        // {
        //     title: 'For Fun Projects',
        //     projects: [
        //         {
        //             title: `
        //             these projects were built in my free time most of them are
        //             2d games built to run in the browser using Design patterns you can find these projects on
        //             my codepen.io (https://codepen.io/ibrahim95)`,
        //             // tslint:disable-next-line:max-line-length
        //             purpose: 'Because I love building games as mush as I love playing them and to sharpen my experience with Design patterns',
        //             technologies: 'HTML5, Typescript, AngularJs'
        //         }
        //     ]
        // }
    ];

    keys = ['title', 'purpose', 'technologies'];
}