import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { App } from '@app/app.component';
//  import { environment } from '@env/environment';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


// fetch(environment.apiUrl);
