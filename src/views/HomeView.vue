<template>
  <main>
    <div class="mx-auto max-w-6xl py-10">
      <div v-if="!loading && playerData">
        <PlayerStats :players="playerData.results" />
        <div class="mt-4 flex gap-5">
          <button
            class="rounded bg-blue-400 px-3 py-2 text-white"
            @click="prevPage"
            v-if="playerData.previous"
          >
            Previous Page
          </button>
          <button
            class="rounded bg-blue-400 px-3 py-2 text-white"
            @click="nextPage"
            v-if="playerData.next"
          >
            Next Page
          </button>
        </div>
      </div>
      <p v-else>Data is Loading</p>
    </div>
  </main>
</template>

<script>
import PlayerStats from '../components/PlayerStats.vue'
export default {
  components: {
    PlayerStats
  },
  data() {
    return {
      playerData: null,
      year: new Date().getFullYear(),
      page: 1,
      loading: false
    }
  },
  methods: {
    async fetchPlayerData() {
      this.loading = !this.loading
      this.playerData = await fetch(
        `https://nba-stats-db.herokuapp.com/api/playerdata/season/${this.year}/?page=${this.page}`
      )
        .then((data) => data.json())
        .catch((err) => console.error(err.message))
        .finally(() => (this.loading = !this.loading))
    },
    nextPage() {
      this.page++
    },
    prevPage() {
      this.page--
    }
  },
  created() {
    this.fetchPlayerData()
  },
  watch: {
    page() {
      this.fetchPlayerData()
    }
  }
}
</script>
