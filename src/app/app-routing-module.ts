import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnFeature } from './core-feature/column-feature/column-feature';
import { ColumnGroup } from './core-feature/column-group/column-group';
import { SortingComponent } from './core-feature/sorting-component/sorting-component';
import { CombinedStyle } from './core-feature/combined-style/combined-style';
import { ExternalDrop } from './core-feature/external-drop/external-drop';
import { Filter } from './core-feature/filter/filter';
import { Edit } from './core-feature/edit/edit';

const routes: Routes = [
  { path: '', component: ColumnFeature },
  { path: 'column', component: ColumnFeature },
  { path: 'group', component: ColumnGroup },
  { path: 'sorting', component: SortingComponent },
  { path: 'combined', component: CombinedStyle },
  { path: 'external', component: ExternalDrop },
  { path: 'filter', component: Filter },
  { path: 'edit', component: Edit },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
