import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoneyConverterComponent} from "./money-converter.component";
import {RouterModule, Routes} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: MoneyConverterComponent,
  },
]

@NgModule({
  declarations: [MoneyConverterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
    ]
})
export class MoneyConverterModule {
}
