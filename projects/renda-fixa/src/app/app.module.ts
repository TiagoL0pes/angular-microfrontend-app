import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosRendaFixaComponent } from './components/produtos-renda-fixa/produtos-renda-fixa.component';

@NgModule({
  declarations: [AppComponent, ProdutosRendaFixaComponent],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  appName = 'mf-renda-fixa';

  constructor(private injector: Injector) {
    const component = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    if (!customElements.get(this.appName)) {
      customElements.define(this.appName, component);
    }
  }

  ngDoBootstrap(): void {}
}
