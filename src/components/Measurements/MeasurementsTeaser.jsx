import React from 'react';
import MeasurementsTeaserValues from './MeasurementsTeaserValues'

function MeasurementsTeaser({ data }) {
  return (
    <tr className="measurements-list__row">
      <td style={{maxWidth:70}}>
        {data.id}
      </td>
      <td style={{maxWidth:45}}>
        {data.name}
      </td>
      <td style={{maxWidth:450, overflow:'hidden'}}>
        <MeasurementsTeaserValues
          values={data.measurements}
        />
      </td>
      <td>{data.unit}</td>

    </tr>
  );
}

export default MeasurementsTeaser;
