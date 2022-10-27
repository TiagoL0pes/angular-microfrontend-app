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
import { ProdutosRendaVariavelComponent } from './components/produtos-renda-variavel/produtos-renda-variavel.component';

@NgModule({
  declarations: [AppComponent, ProdutosRendaVariavelComponent],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  appName = 'mf-renda-variavel';

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
