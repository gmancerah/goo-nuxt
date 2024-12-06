<template>
  <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-muted-200 py-6 dark:border-muted-800">
    <!-- Left Section -->
    <div class="mb-6 md:mb-0">
      <p class="text-sm uppercase text-muted-500 dark:text-muted-100">{{ chapter }}</p>
      <h2 class="text-xl font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">{{ title }}</h2>
    </div>

    <!-- Right Section -->
    <div class="flex items-center gap-2">
      <!-- Tooltip Button 1 -->
      <div class="tooltip-wrapper">
        <div class="tooltip-children">
          <button
            @click="saveToLocalStorage"
            class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 w-10 [&>span>.loader]:text-danger-500 bg-danger-500/10 dark:bg-danger-500/20 text-danger-500 enabled:hover:bg-danger-500/20 dark:enabled:hover:bg-danger-500/30 active:enabled:bg-danger-500/10 dark:active:enabled:bg-danger-500/10 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 iconify iconify--pepicons-pencil"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Tooltip Button 2 -->
      <div class="tooltip-wrapper">
        <div class="tooltip-children">
          <button
            class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 w-10 [&>span>.loader]:text-muted-500 dark:[&>span>.loader]:text-muted-200 bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-700 border border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 dark:bg-muted-950 dark:hover:enabled:bg-muted-900 dark:active:enabled:bg-muted-950 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 iconify iconify--majesticons"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Tooltip Button 3 -->
      <div class="tooltip-wrapper">
        <div class="tooltip-children">
          <button
            class="cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 rounded-lg h-10 w-10 [&>span>.loader]:text-muted-500 dark:[&>span>.loader]:text-muted-200 bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-700 border border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 dark:bg-muted-950 dark:hover:enabled:bg-muted-900 dark:active:enabled:bg-muted-950 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 iconify iconify--fluent"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M18 7.373V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.746 4.558a.5.5 0 0 0 .508 0zM15.5 4a2.5 2.5 0 0 1 2.485 2.223L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chapter: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    saveToLocalStorage() {
      const data = {
        url: this.url,
        courseName: this.courseName,
        coverImage: this.coverImage,
        videoId: this.videoId,
      };
      localStorage.setItem("courseData", JSON.stringify(data));
      alert("Data saved to local storage!");
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>