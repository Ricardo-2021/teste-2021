export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apartamento 2 dormitórios com sacada',
    price: 50.00,  
    description: 'Valor da diaria, contato (51)99999999'
    
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 669,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/