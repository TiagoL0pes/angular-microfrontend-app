import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

export interface Microfrontend {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  microfrontends: Microfrontend[] = [
    { id: Guid.create().toString(), name: 'mf-renda-fixa' },
    { id: Guid.create().toString(), name: 'mf-renda-variavel' },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router
  ) {}

  ngOnInit() {
    this.microfrontends?.forEach((mf: Microfrontend) => {
      const script = this.document.createElement('script');
      script.src = `http://localhost:8080/${mf.name.substring(3)}/main.js`;
      this.document.body.appendChild(script);

      const microfrontend = this.document.createElement(mf.name);
      microfrontend.setAttribute(
        'visibility',
        this.isRouteActive(mf.name.substring(3).replace('-', ''))
      );
      this.document.querySelector('#mf-app')?.appendChild(microfrontend);
    });
  }

  private isRouteActive(path: string) {
    return this.router.url.replace('/#/', '') === path ? 'visible' : 'hidden';
  }

  isInitialNavigation() {
    return this.router.url === '/' || this.router.url === '/#/';
  }
}
