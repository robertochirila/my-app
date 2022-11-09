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
            field: 'firstName',
            name: 'First Name',
            sortable: true,
            'data-test-subj': 'firstNameCell',
            mobileOptions: {
                render: item => (
                    <span>
                        {item.firstName}{' '}
                        <EuiLink href="#" target="_blank">
                            {item.lastName}
                        </EuiLink>
                    </span>
                ),
                header: false,
                truncateText: false,
                enlarge: true,
                fullWidth: true,
            },
        },
        {
            field: 'lastName',
            name: 'Last Name',
            truncateText: true,
            render: name => (
                <EuiLink href="#" target="_blank">
                    {name}
                </EuiLink>
            ),
            mobileOptions: {
                show: false,
            },
        },
        {
            field: 'github',
            name: 'Github',
        },
        {
            field: 'online',
            name: 'Online',
            dataType: 'boolean',
            render: online => {
                const color = online ? 'success' : 'danger';
                const label = online ? 'Online' : 'Offline';
                return <EuiHealth color={color}>{label}</EuiHealth>;
            },
        },
    ];
    const getRowProps = item => {
        const { id } = item;
        return {
            'data-test-subj': `row-${id}`,
            className: 'customRowClass',
            onClick: () => console.log(`Clicked row ${id}`),
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
            cellProps={getCellProps} />
    </>

}

export default Records;