<template>
    <div class="flex flex-col items-center justify-center py-4 px-10 w-full">
        <h2>Top 20 Rebounds in the '22 - '23 Season</h2>
        <canvas id="top-overall-rebound"></canvas>
        <canvas id="off-def-rebound"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto'

export default {
    data() {
        return {
            playerDataByRebound: [],
            playerData: [],
            playerName: [],
            playerORebounds: [],
            playerDRebounds: [],
            loading: false,
            year: new Date().getFullYear()
        }
    },
    methods: {
        initChart() {
            const canvasOverall = document.getElementById('top-overall-rebound')
            const canvasOffDef = document.getElementById('off-def-rebound')
            new Chart(canvasOverall, {
                type: 'bar',
                data: {
                    labels: this.playerData.map((player) => player.name),
                    datasets: [
                        {
                            label: `Top Rebounds of ${this.year}`,
                            data: this.playerData.map((player) => player.totalRebounds),
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    plugins: { tooltip: { enabled: false } },
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            })
            new Chart(canvasOffDef, {
                type: 'bar',
                data: {
                    labels: this.playerData.map((player) => player.name),
                    datasets: [
                        {
                            label: 'Total Rebounds',
                            data: this.playerData.map((player) => player.totalRebounds),
                            backgroundColor: '#05C3DE',
                            borderWidth: 1,
                            stack: 'Stack 0'
                        },
                        {
                            label: 'Offensive Rebounds',
                            data: this.playerData.map((player) => player.ORB),
                            backgroundColor: '#00FFA2',
                            borderWidth: 1,
                            stack: 'Stack 1'
                        },
                        {
                            label: 'Defensive Rebounds',
                            data: this.playerData.map((player) => player.DRB),
                            backgroundColor: '#FFADAD',
                            borderWidth: 1,
                            stack: 'Stack 2'
                        }
                    ]
                },
                options: { plugins: { tooltip: { enabled: false } } }
            })
        },
        getPlayerNamesAndRebounds(data) {
            data.results.slice(0, 20).map((player) => {
                let newPlayer = {}
                newPlayer.name = player.player_name
                newPlayer.totalRebounds = player.ORB + player.DRB
                newPlayer.ORB = player.ORB
                newPlayer.DRB = player.DRB
                this.playerData.push(newPlayer)
            })
        }
    },
    async created() {
        this.loading = !this.loading
        try {
            const res = await fetch(
                `https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/${this.year}/`
            )
            const data = await res.json()
            this.getPlayerNamesAndRebounds(data)
            this.initChart()
        } catch (err) {
            console.error(err.message)
        } finally {
            this.loading = !this.loading
        }
    }
}
</script>

<style>
canvas {
    width: 2000px !important;
    height: 1000px !important;
}
</style>
