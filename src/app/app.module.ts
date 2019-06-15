import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { CreatorComponent } from './creator/creator.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PictureComponent } from './picture/picture.component';
import { PicturesService } from './pictures.service';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentCreateComponent } from './content-create/content-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentEditComponent } from './content-edit/content-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    CreatorComponent,
    ContentListComponent,
    PictureComponent,
    ContentDetailComponent,
    ContentCreateComponent,
    ContentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    PicturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
