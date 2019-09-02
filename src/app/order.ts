import { User } from './user';
import { Product } from './product';

export class Order {
    id: number;
    user: User;
    product: Product;
    explanation: string;
    active: boolean;
}