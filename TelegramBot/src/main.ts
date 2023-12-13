import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfigs } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, ApplicationConfigs)
  .catch((err) => console.error(err));
