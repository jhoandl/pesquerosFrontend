<template>
  <div class="flex items-center justify-center mt-4">
    <button
      @click="previousPage()"
      :disabled="currentPage === 1"
      class="p-2 cursor-pointer text-xs text-gray-600 hover:text-gray-800 dark:bg-slate-600 dark:rounded-full dark:text-white"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="flex items-center mx-2">
      <span class="text-gray-600">Página</span>
      <div class="relative inline-block mx-2">
        <select
          v-model="selectedPageSize"
          @change="updatePageSize"
          class="dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900 p-2 pl-4 pr-8 text-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-transparent"
        >
          <option v-for="option in pageSizes" :value="option" :key="option">
            {{ option }}
          </option>
        </select>
      </div>
      <span class="text-gray-600">de</span>
      <span class="px-2 font-semibold">{{ totalPages }}</span>
    </div>
    <button
      @click="nextPage()"
      :disabled="currentPage === totalPages"
      class="p-2 cursor-pointer text-xs text-gray-600 hover:text-gray-800 dark:bg-slate-600 dark:rounded-full dark:text-white"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
    <div class="flex ml-4">
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'p-2 mx-1 rounded-full text-xs',
          {
            'bg-green-500/50 text-white dark:bg-slate-600':
              page === currentPage,
          },
        ]"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    pageSizes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedPageSize: this.pageSize,
    };
  },
  computed: {
    visiblePages() {
      const range = 2; // Número de páginas visibles antes y después de la página actual
      const start = Math.max(1, this.currentPage - range);
      const end = Math.min(this.totalPages, this.currentPage + range);
      const pages = [];

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("update:currentPage", page);
      }
    },
    changePageSize() {
      this.$emit("update:pageSize", this.selectedPageSize);
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("update:current-page", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPageCount) {
        this.$emit("update:current-page", this.currentPage + 1);
      }
    },
    updatePageSize() {
      this.$emit("update:page-size", this.selectedPageSize);
    },
  },
};
</script>
