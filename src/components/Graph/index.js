import Chart from 'react-apexcharts'

function LineChart() {
  return (
    <div className="container-fluid mt-3 mb-3 m-3">
      <h2>Activities</h2>
      <p>May-June 2021</p>
      <Chart
        type="line"
        width={700}
        height={280}
        series={[
          {
            name: 'Guest',
            data: [
              100, 200, 300, 400, 415, 360, 150, 100, 200, 300, 400, 450, 400,
              300, 200, 180,
            ],
          },
          {
            name: 'Users',
            data: [
              200, 300, 400, 405, 300, 200, 150, 200, 300, 400, 435, 400, 300,
              200, 180, 250,
            ],
          },
        ]}
        options={{
          xaxis: {
            categories: [
              '     week1    ',
              'week2      ',
              'week3    ',
              'week4    ',
            ],
          },
          yaxis: {
            categories: ['0', '100', '200', '300', '400', '500'],
          },
        }}
      />
    </div>
  )
}

export default LineChart
