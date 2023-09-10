export const COLUMNS = [
    {
        Header: 'TransactionId',
        accessor: 'transactionId',
        Footer: 'TransactionId',
        disableFilters: true
    },
    {
        Header: 'Name',
        accessor: 'studentName',
        Footer: 'Name'
    },
    {
        Header: 'Email Address',
        accessor: 'studentEmail',
        Footer: 'Email Address'
    },
    {
        Header: 'Date of Payment',
        accessor: 'transactionDate',
        Footer: 'Date of Payment'
        // Cell: ({ value }) => {return format(value, 'dd-mm-yyyy')}
    },
    {
        Header: 'Fees for Month',
        accessor: 'month',
        Footer: 'Fees for Month'
    },
    {
        Header: 'Amount',
        accessor: 'amount',
        Footer: 'Amount'
    },
    {
        Header: 'Notification Sent',
        accessor: 'notificationTriggered',
        Footer: 'Notification Sent'
    }
]

