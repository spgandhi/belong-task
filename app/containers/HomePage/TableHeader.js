import React from 'react';

const TableHeader = (props) => {
  return (
    <thead>
      <tr className="table-header">
        <td className="text-center" style={{ width: '5%' }}><input type="checkbox" /></td>
        <td style={{ width: '15%' }} onClick={props.onSortByName}>
          Name
                <i className="material-icons header-icon font-14">
            {props.sorting === 'DESC' ? 'arrow_downward' : 'arrow_upward'}
          </i>
        </td>
        <td style={{ width: '15%' }}>
          Company
                <i className="material-icons header-icon font-14">arrow_upwards</i>
        </td>
        <td style={{ width: '15%' }}>
          Status
                <i className="material-icons header-icon">keyboard_arrow_down</i>
        </td>
        <td style={{ width: '15%' }}>
          Last Updated
                <i className="material-icons header-icon">keyboard_arrow_down</i>
        </td>
        <td style={{ width: '30%' }}>Notes</td>
        <td style={{ width: '5%' }}></td>
      </tr>
    </thead>
  );
};

export default TableHeader;
