import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export interface Profile
  extends Partial<{
    id: string;
    firstname: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
  }> {}
