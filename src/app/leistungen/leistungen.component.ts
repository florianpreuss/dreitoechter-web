import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-leistungen',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.scss'],
})
export class LeistungenComponent implements OnInit {
  page: Map<string, string> = new Map<string, string>();
  constructor() {
//    content.getContent().subscribe(data => {
//      const obj = data[Object.keys(data).find(it => it === 'Leistungen')];
//      Object.keys(obj).forEach(k => this.page.set(k, obj[k]));
//    });
  }

  ngOnInit(): void {
  }

}
