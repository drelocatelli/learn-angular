import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildSlotComponent } from "./components/child-slot/child-slot.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { LearnComponent } from "./components/learn/learn.component";

const routes : Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'child', component: ChildSlotComponent},
    {path: 'learn', component: LearnComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}