import { Routes } from '@angular/router';
import { TestComponent } from './sidebar/test/test.component';
import { HomeComponent } from './sidebar/home/home.component';
import { ContentComponent } from './sidebar/content/content.component';
import { SubitemunoComponent } from './sidebar/subitemuno/subitemuno.component';
import { SubitemdosComponent } from './sidebar/subitemdos/subitemdos.component';
import { SubitemtresComponent } from './sidebar/subitemtres/subitemtres.component';


export const routes: Routes = [
  {path:'',component:TestComponent},
  {path:'home',component:HomeComponent},
  {path:'test',component:TestComponent},
  {path:'content',component:ContentComponent},
  {path:'subitemuno',component:SubitemunoComponent},
  {path:'subitemdos',component:SubitemdosComponent},
  {path:'subitemtres',component:SubitemtresComponent},




]
