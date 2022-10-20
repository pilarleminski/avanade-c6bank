import TypeDb from "../../../types/TypeDb";


const db: Array<TypeDb> = [
    {
        id: 1,
        type: 'pix',
        amount: 100,
        date: '2022-10-19',
        description: 'Pizza com a galera',
        operation: 'credit'
    },
    {
        id: 2,
        type: 'debit',
        amount: 250,
        date: '2022-10-19',
        description: 'Gasolina',
        operation: 'debit'
    },
    {
        id: 3,
        type: 'pix',
        amount: 200,
        date: '2022-10-18',
        description: 'Maquiagem',
        operation: 'debit'
    },
    {
        id: 4,
        type: 'withdrawl',
        amount: 500,
        date: '2022-10-18',
        description: 'Saque',
        operation: 'debit'
    },
    {
        id: 5,
        type: 'credit',
        amount: 800,
        date: '2022-10-18',
        description: 'Peruca',
        operation: 'credit'
    },
    {
        id: 6,
        type: 'pix',
        amount: 300,
        date: '2022-10-18',
        description: 'Vestido',
        operation: 'debit'
    },
    {
        id: 7,
        type: 'credit',
        amount: 500,
        date: '2022-10-18',
        description: 'Sapato',
        operation: 'credit'
    },
    {
        id: 8,
        type: 'debit',
        amount: 10,
        date: '2022-10-17',
        description: 'uber',
        operation: 'debit'
    },
    {
        id: 9,
        type: 'withdrawl',
        amount: 100,
        date: '2022-10-17',
        description: 'saque',
        operation: 'debit'
    },
    {
        id: 10,
        type: 'pix',
        amount: 100,
        date: '2022-10-17',
        description: 'Pizza com a galera',
        operation: 'credit'
    }
    
];

export default db;