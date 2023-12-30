import { Component } from "@angular/core"
import { Routes } from "@angular/router"
import { FormComponent } from "./form/form.component"
import { ItemsComponent } from "./items/items.component"

export const TasksRoutes:Routes=[
    {
        path: "",
        pathMatch: "full",
        redirectTo: "list"
      },
      {
        path: "list",
        component: FormComponent
      }

]