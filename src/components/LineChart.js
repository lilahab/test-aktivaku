import { Line } from 'vue-chartjs'
import json from '@/json/graph.json'

export default {
	extends: Line,
	data: () => ({
		chartData: {
			labels: [],
			datasets: []
		},
		options: {
			responsive: true,
			maintainAspectRatio: false
		},
		graphData: json
	}),
	mounted () {
		let labels = []
		let dataset = {
            label: 'Value',
            fill: false,
			backgroundColor: '#f87979',
			data: []
		}

		for(const data of this.graphData) {
			labels.push(data.year)
			dataset.data.push(data.value)
		}
		this.chartData.labels = labels
		this.chartData.datasets = [dataset]
		this.renderChart(this.chartData, this.options)
	}
}