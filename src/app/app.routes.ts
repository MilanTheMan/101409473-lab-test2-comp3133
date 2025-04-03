import { Routes } from '@angular/router';

import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';


export const routes: Routes = [
    { path: '', component: CharacterlistComponent },
    { path: 'filter', component: CharacterfilterComponent },
];
