import React from "react";
import {
    EuiBasicTable,
    EuiLink,
    EuiHealth,
} from '@elastic/eui';


const Records = (props) => {
    const records = props.records
    const columns = [
        {
            field: 'name',
            name: 'Product Name',
            sortable: true,
            'data-test-subj': 'productNameCell',
            mobileOptions: {
                render: item => (
                    <span>
                        {item.Name}{' '}
                    </span>
                ),
                header: false,
                truncateText: false,
                enlarge: true,
                fullWidth: true,
            },
        }, ,
        {
            field: 'price',
            name: 'Price',
            dataType: 'number',
            mobileOptions: {
                render: item => {
                    return (
                        <span>
                            {item.Price}{''}{item.CurrencyCode}
                        </span>
                    )
                },
                header: false,
            }
        },
        {
            field: 'description',
            name: 'Description',
            sortable: true,
            'data-test-subj': 'descriptionCell',
            mobileOptions: {
                render: item => (
                    <span>
                        {item.Description}{' '}
                    </span>
                ),
                header: false,
                truncateText: true,
                enlarge: true,
                fullWidth: true,
            },
        },
        {
            field: 'online',
            name: 'Online',
            dataType: 'boolean',
            mobileOptions: {
                render: item => {
                    const color = item.Visible ? 'success' : 'danger';
                    const label = item.Visible ? 'Available' : 'Unavailable';
                    return <EuiHealth color={color}>{label}</EuiHealth>;
                },
                header: false,
            }
        }
    ];
    console.log(records)

    return <>
        <EuiBasicTable
            items={records}
            rowHeader="firstName"
            columns={columns}
        />
    </>

}

export default Records;