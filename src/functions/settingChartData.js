import { convertDate } from "./convertDate"

export const settingChartData = (setChartData, prices1, prices2, crypto1, crypto2) => {
  
    if(prices2 && prices2.length > 0){
      setChartData({
        labels: prices1.map((date) => convertDate(date[0])),
        datasets: [
          {
            label: crypto1,
            data: prices1.map((data) => data[1]),
            borderColor: '#3a80e9',
            backgroundColor: 'transparent',
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisId: "y"
          },
          {
            label: crypto2,
            data: prices2.map((data) => data[1]),
            borderColor: '#61c96f',
            backgroundColor: 'transparent',
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisId: "y1"
          }
        ]
      }
    )  
  }

  else{
    setChartData({
      labels: prices1.map((date) => convertDate(date[0])),
      datasets: [
        {
          data: prices1.map((data) => data[1]),
          borderColor: '#3a80e9',
          backgroundColor: 'transparent',
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          pointRadius: 0,
          yAxisId: "y"
        }
      ]
    }
  )
 }
}