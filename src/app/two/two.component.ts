import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.less']
})
export class TwoComponent implements OnInit {

  @Input() childValue: string;
  @Output() outer: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitData(): void {
    this.outer.emit('我是子组件传给父组件的值');
  }
}
