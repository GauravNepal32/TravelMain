import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
const BookingTable = (props) => {
    const [data, setData] = useState(props.bookingInfo)

    const columns = useMemo(() => [
        {
            Header: 'Order ID',
            accessor: 'booking_id'
        },
        {
            Header: 'Title',
            accessor: 'package_name'
        },
        {
            Header: 'Booked For',
            accessor: `booking_date`
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        }
    ])

    return (
        <div className="edit-pass-container mt-3 d-flex align-items-center">
            {console.log(props.bookingInfo)}
            <Table columns={columns} data={data} />
        </div>
    )
}

export default BookingTable