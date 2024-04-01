import Chart from 'react-apexcharts'

import './index.css'

function PieChart1() {
  return (
    <div className="vaccination-by-age-contaier">
      <div className="bottom-section1">
        <h1>Top Products</h1>
        <Chart
          type="pie"
          width={420}
          height={250}
          series={[110, 60, 190]}
          options={{
            labels: ['Basic Tees', 'Custom SHort Pants', 'Super Hoodies'],
          }}
        />
      </div>
      <div className="bottom-section2">
        <h1 className="b-header2">Today Schedule</h1>
        <div className="b-div1" style={{borderLeft: '2px solid red'}}>
          <h1 className="b-header2">Meeting with suppliers from Kuta Bali</h1>
          <p className="b-date">14:00-15:00</p>
          <p className="b-address">Sunset road, Kuta Bali.</p>
        </div>
        <div className="b-div2" style={{borderLeft: '2px solid green'}}>
          <h1 className="b-header2">Check operation at Giga factory</h1>
          <p className="b-date">18:00-20:00</p>
          <p className="b-address">at central V.</p>
        </div>
      </div>
    </div>
  )
}

export default PieChart1
