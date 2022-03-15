import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css']
})
export class NgIfNgForComponent implements OnInit {
  myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  viewFlag: boolean = true;
  buttonMessage: string = 'Clique para desaparecer';
  constructor() { }

  ngOnInit(): void {
  }

  disappear() {
    this.viewFlag = !this.viewFlag;
    if (!this.viewFlag) this.buttonMessage = 'Clique para aparecer';
      else this.buttonMessage = 'Clique para desaparecer';
  }

}
