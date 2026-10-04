import { Routes } from '@angular/router';
import { Producto } from '../components/producto/producto/producto';

export const routes: Routes = [

    // Enlaces para acceder a los modulos del sistema (Componentes principales)
    {
        path: 'productos',
        component: Producto
    },
    {
        path: 'categorias',
        component: Producto
    }

];