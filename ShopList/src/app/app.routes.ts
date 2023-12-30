import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"task" ,
        loadChildren:() => import("./tasks/tasks.routes") .then((m) => m.TasksRoutes) ,
    }
];
