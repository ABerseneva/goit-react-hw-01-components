import React from "react";
import TableBody from "./TableBody";
import styled from 'styled-components';
import PropTypes from 'prop-types'

const TransactionHistory = ({ transactions }) => {
    return <Table>
        <thead>
            <tr>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </tr>
        </thead>
            <tbody>
                {transactions.map(item => (
                    <TableBody
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                    ))}
            </tbody>
    </Table>
}

export default TransactionHistory;

const Table = styled.table`
    width: 70%;
	border: none;
	margin-bottom: 20px;
    margin-top: 100px;
    margin: 100px auto;
`;

const TableHeader = styled.th`
    font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: #d8d8d8;
	font-size: 14px;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
`;


TransactionHistory.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};
