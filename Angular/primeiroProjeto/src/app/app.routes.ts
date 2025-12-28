import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { CustomerList } from './customer-list/customer-list';
import { PageNotFound } from './page-not-found/page-not-found';
import { FilhoA } from './filho-a/filho-a';
import { FilhoB } from './filho-b/filho-b';
import { CustomersDetails } from './customers-details/customers-details';
import { guardiaoGuard } from './guardiao-guard';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
import { Weather } from './weather/weather'; 
import { Pipes } from './pipes/pipes';

export const routes: Routes = [
    {path: 'hello-world', title: 'Hello World', component: HelloWorld, children: [
        {path: 'filho-a', title: 'Filho A', component: FilhoA},
        {path: 'filho-b', title: 'Filho B', component: FilhoB},
    ]},
    {path: 'data-binding', title: 'Data Binding', component: DataBinding, canActivate: [guardiaoGuard]},
    {path: 'directives', title: 'Directives', component: Directives},
    {path: 'customers', title: 'Custormers', component: CustomerList},
    {path: 'customers/:id', title: 'Detalhes do Cliente', component: CustomersDetails},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveForm},
    {path: 'template-form', title: 'Template Form', component: TemplateForm},
    {path: 'weather', title: 'Clima', component: Weather}, 
    {path: 'pipes', title: 'Pipes', component:Pipes},
    {path: '', redirectTo: '/hello-world', pathMatch: 'full'},
    {path: '**', component: PageNotFound}
];