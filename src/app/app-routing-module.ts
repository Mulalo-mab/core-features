import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnFeature } from './core-feature/column-feature/column-feature';
import { ColumnGroup } from './core-feature/column-group/column-group';
import { SortingComponent } from './core-feature/sorting-component/sorting-component';
import { CombinedStyle } from './core-feature/combined-style/combined-style';

const routes: Routes = [
  { path: '', component: ColumnFeature },
  { path: 'column', component: ColumnFeature },
  { path: 'group', component: ColumnGroup },
  { path: 'sorting', component: SortingComponent },
  { path: 'combined', component: CombinedStyle },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
