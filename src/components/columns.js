import { format } from 'date-fns'
 export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Footer: 'Id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Footer: 'First Name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Footer: 'Last Name'
    },
    {
        Header: 'Email Address',
        accessor: 'email',
        Footer: 'Email Address'
    },
    {
        Header: 'Date of Payment',
        accessor: 'date_of_payment',
        Footer: 'Date of Payment',
        // Cell: ({ value }) => {return format(value, 'dd-mm-yyyy')}
    },
    {
        Header: 'Notification Sent',
        accessor: 'emil_Sent',
        Footer: 'Notification'
    }
]

