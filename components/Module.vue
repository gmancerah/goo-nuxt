<template>  
  <div>  
    <div  
      v-for="module in modules"  
      :key="module.id"  
      class="relative w-full transition-all duration-300 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20 p-6"  
    >  
      <!-- Header Section -->  
      <div role="button" class="flex items-center justify-between" @click="toggleCollapse(module.id)">  
        <div>  
          <p class="text-xs uppercase leading-none text-muted-500 dark:text-muted-100">  
            Modulo {{ module.order }}  
          </p>  
          <h2 class="text-base font-medium capitalize tracking-wide text-muted-800 dark:text-muted-100">  
            {{ module.name }}  
          </h2>  
        </div>  
        <div  
          class="pointer-events-none transition-all duration-300"  
          :class="{ 'rotate-90': !isCollapsed[module.id], 'rotate-0': isCollapsed[module.id] }"  
        >  
          <svg  
            xmlns="http://www.w3.org/2000/svg"  
            aria-hidden="true"  
            role="img"  
            class="text-muted-400 iconify iconify--lucide"  
            width="1em"  
            height="1em"  
            viewBox="0 0 24 24"  
          >  
            <path  
              fill="none"  
              stroke="currentColor"  
              stroke-linecap="round"  
              stroke-linejoin="round"  
              stroke-width="2"  
              d="m9 18l6-6l-6-6"  
            ></path>  
          </svg>  
        </div>  
      </div>  

      <!-- Video List Section -->  
      <div  
        class="grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out mt-3"  
        :class="{ hidden: isCollapsed[module.id], block: !isCollapsed[module.id] }"  
      >  
        <div class="mt-4">  
          <ul class="space-y-4 pb-4 ps-2">  
            <li  
              v-for="video in module.videos"  
              :key="video.id"  
              class="flex items-center gap-3"  
            >  
              <div class="relative">  
                <button  
                  type="button"  
                  class="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 border-primary-500 bg-primary-500 text-white hover:enabled:bg-primary-600"  
                  @click="selectVideo(video, module)"  
                >  
                  <svg  
                    xmlns="http://www.w3.org/2000/svg"  
                    aria-hidden="true"  
                    role="img"  
                    class="pointer-events-none h-4 w-4 iconify iconify--iconamoon"  
                    width="1em"  
                    height="1em"  
                    viewBox="0 0 24 24"  
                  >  
                    <path  
                      fill="currentColor"  
                      fill-rule="evenodd"  
                      d="M19.5 14.598c2-1.155 2-4.041 0-5.196l-9-5.196C8.5 3.05 6 4.494 6 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598z"  
                      clip-rule="evenodd"  
                    ></path>  
                  </svg>  
                </button>  
              </div>  
              <button  
                type="button"  
                class="block text-start text-sm transition-colors duration-300 font-semibold text-primary-500"  
                @click="selectVideo(video, module)"  
              >  
                {{ video.name }}  
              </button>  
              <div class="ms-auto">  
                <span class="text-xs text-muted-400">{{ video.duration || '' }}</span>  
              </div>  
            </li>  
          </ul>  
        </div>  
      </div>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  props: {  
    modules: {  
      type: Array,  
      required: true,  
    },  
  },  
  emits: ['video-selected'], // Declare the custom event here  
  data() {  
    return {  
      isCollapsed: {}, // Tracks whether each module's video list is collapsed  
    };  
  },  
  created() {  
    // Initialize isCollapsed for all modules  
    this.modules.forEach((module) => {  
      this.isCollapsed[module.id] = true; // Default to collapsed  
    });  
  },  
  methods: {  
    toggleCollapse(moduleId) {  
      this.isCollapsed[moduleId] = !this.isCollapsed[moduleId];  
    },  
    selectVideo(video, module) {  
      // Emit the selected video and module to the parent  
      this.$emit('video-selected', { video, module });  
    },  
  },  
};  
</script>  