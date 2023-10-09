<template>
    <div class="flex flex-col items-center justify-center py-4 px-10 w-full">
        <h2>Top 20 Scorers in the '22 - '23 Season</h2>
        <canvas id="top-scorer"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    data() {
        return {
            playerDataByScore: [],
            loading: false,
            year: new Date().getFullYear()
        }
    },
    methods: {
        async getPlayerData() {
            this.loading = !this.loading
            try {
                const res = await fetch(
                    `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${this.year}/`
                )
                const data = await res.json()
                this.getPlayerNamesAndPoints(data)
                this.initChart()
            } catch (err) {
                console.error(err.message)
            } finally {
                this.loading = false
            }
        },
        getPlayerNamesAndPoints(data) {
            data.results.slice(0, 20).map((player) => {
                let newPlayer = {}
                newPlayer.name = player.player_name
                newPlayer.points = player.PTS
                this.playerDataByScore.push(newPlayer)
            })
        },
        initChart() {
            const canvas = document.getElementById('top-scorer')
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: this.playerDataByScore.map((player) => player.name),
                    datasets: [
                        {
                            label: "Player's total scores",
                            data: this.playerDataByScore.map((player) => player.points),
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    indexAxis: 'y',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    },
    created() {
        this.getPlayerData()
    }
}
</script>
