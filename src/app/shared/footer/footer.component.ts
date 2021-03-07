import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import{ CommonService } from './../common.service'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(public commonService:CommonService) { }

    ngOnInit() {
        this.commonService.currentData.subscribe(currentData => this.showFooter())
   }

    showFooter(){
        let el = document.getElementById('footNav');
        el.scrollIntoView();

    }

}
