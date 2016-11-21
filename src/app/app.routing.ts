import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InputBoxComponent} from './inputBox/inputBox.component';
import {IdeasComponent} from './ideas/ideas.component';

const appRoutes = [
    {
        path: '',
        component: InputBoxComponent
    },
    {
        path: 'ideas',
        component: IdeasComponent
    }
]

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);