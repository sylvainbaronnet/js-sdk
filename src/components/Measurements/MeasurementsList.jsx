import React from 'react';
import MeasurementsTeaser from './MeasurementsTeaser'

function MeasurementsList({ data }) {
  return (
    <table className="measurements-list" style={{width:'100%'}}>
      <thead>
        <tr >
          <td>id</td>
          <td>name</td>
          <td>values</td>
          <td>unit</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key) => {
          return (
            <MeasurementsTeaser
              key={data[key].id}
              data={data[key]}
            />
          )
        })}
      </tbody>
    </table>
  );
}

export default MeasurementsList;
