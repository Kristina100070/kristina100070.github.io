import React from 'react';


export const Header = ({ head1, head2, head3, company }) => {
 
  return (
    <tr>
      <th></th>
      <th></th>
      {!company && <th>№</th>}
      <th>{head1}</th>
      <th>{head2}</th>
      <th>{head3}</th>
</tr>
  )
}
