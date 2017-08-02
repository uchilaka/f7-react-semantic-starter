import { About } from './components/pages/About';
import { Form } from './components/pages/Form';
import { KitchenSink } from './components/pages/KitchenSink';
import { SemanticKitchenSink } from './components/pages/SemanticKitchenSink';
import { SemanticForm } from './components/pages/SemanticForm';

export const routes = [
    {
        path: '/about/',
        component: About
    }, {
        path: '/form/',
        component: Form
    }, {
        path: '/kitchen-sink/',
        component: KitchenSink
    }, {
        path: '/semantic-kitchen-sink/',
        component: SemanticKitchenSink
    }, {
        path: '/semantic-form/',
        component: SemanticForm
    }
];