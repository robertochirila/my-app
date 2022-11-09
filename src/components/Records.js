import React from "react";
import {
    EuiBasicTable,
    EuiLink,
    EuiHealth,
} from '@elastic/eui';


const Records = (props) => {
    const records = props.records
    const nrRecords = records.length
    const truncate = (str, n) => {
        let splitString = str.split(" ")
        let newArrayString;
        let text = "";
        if (splitString.length > 10) {
            newArrayString = splitString.splice(0, n - 1)
            for (let i = 0; i < newArrayString.length; i++) {
                text = text + newArrayString[i] + " "
            }
            return (
                <>
                    {text}
                </>
            )
        } else if (str === " ") {
            return (<span style={{ "color": "#ff0000" }}>
                No Description
            </span>)
        }
        return (
            <>
                {str}
            </>
        )
    }
    const columns = [
        {
            field: 'name',
            name: 'Product Name',
            sortable: true,
            'data-test-subj': 'productNameCell',
            footer: <em>Total Records: {nrRecords}</em>,
            mobileOptions: {
                render: item => (
                    <span style={{ "fontWeight": "bold" }}>
                        {item.Name}{' '}
                    </span>
                ),
                header: false,
                truncateText: false,
                enlarge: true,
                fullWidth: true,
            },
        },
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
                        {truncate(item.Description, 10)}
                    </span>
                ),
                header: false,
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
    const getRowProps = item => {
        const { Id } = item;
        return {
            'data-test-subj': `row-${Id}`,
            className: 'customRowClass',
            onClick: () => console.log(`Clicked row ${Id}`),
        };
    };

    const getCellProps = (item, column) => {
        const { id } = item;
        const { field } = column;
        return {
            className: 'customCellClass',
            'data-test-subj': `cell-${id}-${field}`,
            textOnly: true,
        };
    };
    console.log(records)

    return <>
        <EuiBasicTable
            items={records}
            rowHeader="firstName"
            columns={columns}
            rowProps={getRowProps}
            cellProps={getCellProps}

        />
    </>

}

export default Records;