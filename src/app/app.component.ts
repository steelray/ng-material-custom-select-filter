import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOption, SelectComponent } from './select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SelectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  customers: IOption[] = [
    {
      value: 1,
      title: 'Vi'
    },
    {
      value: 2,
      title: 'Pari'
    },
    {
      value: 3,
      title: 'John'
    },
    {
      value: 4,
      title: 'Juna'
    },
    {
      value: 5,
      title: 'Rafik'
    },
    {
      value: 6,
      title: 'Dinara'
    },
    {
      value: 7,
      title: 'Sveta'
    },
    {
      value: 8,
      title: 'Mai'
    },
    {
      value: 9,
      title: 'Puti'
    },
    {
      value: 10,
      title: 'Pao'
    },
  ];

  ngOnInit(): void {
    // for testing, if the filter input disappears if the length is <= 5
    setTimeout(() => {
      this.customers = [
        {
          value: 4,
          title: 'Juna'
        },
        {
          value: 7,
          title: 'Sveta'
        },
        {
          value: 8,
          title: 'Mai'
        },
        {
          value: 9,
          title: 'Puti'
        },
        {
          value: 10,
          title: 'Pao'
        },
      ];
    }, 5000);
  }
}
