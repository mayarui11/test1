import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IndexService} from '../parent/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  classFlag = true;
  inputText: string;
  data = '这是一个变量';
  arrData = [
    {name: '小明', age: 25},
    {name: '小红', age: 55},
    {name: '小兰', age: 21}
  ];
  currentValue = '父组件的值';
  apple = 'asdfasdfasfd';
  constructor(private router: Router,
              private indexService: IndexService) { }

  ngOnInit(): void {
  }

  jumpTwo(): void {
    this.router.navigateByUrl('/two');
  }

  changeFlag(): void {
    this.classFlag = !this.classFlag;
  }

  consoleValue(): void {
    console.log(this.inputText);
  }

  changeInputValue(): void {
    this.inputText = '初始值';
  }

  getLocation(): void {
    this.indexService.getLocation('北京').subscribe((res: any) => {
      console.log(1222, res);
    });
  }

  onReceiveChildData($event: any): void {
    console.log($event);
  }
}
