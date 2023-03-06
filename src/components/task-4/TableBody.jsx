import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types'


const TableBody = ({ type, amount, currency }) => {
    return <Tr>
        <TableCell>{type}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{currency}</TableCell>
    </Tr>
}


export default TableBody;

const TableCell = styled.td`
    text-align: left;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;
`;

const Tr = styled.tr`
:nth-child(even){
	background: #f3f3f3;
}
`;

TableBody.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
};