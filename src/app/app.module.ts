import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/LayoutComponents/header/header.component';
import { FooterComponent } from './Components/LayoutComponents/footer/footer.component';
import { ContentComponent } from './Components/LayoutComponents/content/content.component';
import { HomeComponent } from './Components/home/home.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    HighlightDirective,
    USDtoEGPPipe

        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
