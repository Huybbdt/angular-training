import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { HomePageComponent } from './example/home-page/home-page.component';
import { ParentComponent } from './example/component-interaction/parent/parent.component';
import { ChildComponent } from './example/component-interaction/parent/child/child.component';
import { ShareServiceService } from './modules/shared/share-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { fomatPhonePipe } from './modules/shared/fomat-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ParentComponent,
    ChildComponent,
    fomatPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShareServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
