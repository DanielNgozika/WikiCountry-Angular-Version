import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-result',
  templateUrl: './each-result.component.html',
  styleUrls: ['./each-result.component.css']
})
export class EachResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() result: any = null;

}
