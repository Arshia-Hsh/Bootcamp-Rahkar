import { Routes } from '@angular/router';
import { MemoryRecieverComponent } from './memory-reciever/memory-reciever.component';
import { MemoryListComponent } from './memory-list/memory-list.component';

export const routes: Routes = [
    {
            path: "",
            pathMatch: "full",
            redirectTo: "list"
    },
    {
        path: "add",
        component: MemoryRecieverComponent
      },
      {
        path: "list",
        component: MemoryListComponent
      }
];
