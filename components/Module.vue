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
                <div 
        class="h-16 w-24 rounded-lg overflow-hidden cursor-pointer"
        @click="selectVideo(video, module)"
      >
        <!-- Thumbnail with fallback -->
        <img
          :src="video.DailyMotionThumbnail || '/path-to-default-thumbnail.jpg'"
          :alt="video.name"
          class="w-full h-full object-cover"
          @error="handleImageError"
        >
        <!-- Play button overlay -->
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M8 5v14l11-7z"
            />
          </svg>
        </div>
      </div>
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
        <div v-if="module.quiz" class="mt-4">
        <button
          type="button"
          class="w-full py-2 px-4 text-sm font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800 transition-colors duration-300"
          @click="loadQuiz(module.quiz.documentId)"
        >
          {{ module.quiz.name }}
        </button>
      </div>
      </div>  


      
    </div>  
    

    <div v-if="showQuizModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div class="bg-white dark:bg-muted-950 rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
    <!-- Close button moved to top right -->
    <button
      type="button"
      class="absolute top-4 right-4 text-muted-400 hover:text-muted-600 transition-colors duration-300"
      @click="closeQuizModal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <h2 class="text-lg font-semibold text-muted-800 dark:text-muted-100 mb-4">{{ currentQuiz.name }}</h2>
    <p class="text-sm text-muted-500 dark:text-muted-400 mb-6">{{ currentQuiz.summary }}</p>
    
    <ul class="space-y-4">
      <li v-for="question in currentQuiz.quiz_questions" :key="question.id">
        <p class="font-medium text-muted-800 dark:text-muted-100">{{ question.question }}</p>
        <ul class="mt-2 space-y-2">
          <li
            v-for="answer in question.quiz_question_answers"
            :key="answer.id"
            class="flex items-center gap-2"
          >
            <input
              type="radio"
              :name="'question-' + question.id"
              :value="answer.id"
              v-model="userAnswers[question.id]"
              class="form-radio text-primary-500"
            />
            <label class="text-sm text-muted-800 dark:text-muted-400">{{ answer.answer }}</label>
          </li>
        </ul>
      </li>
    </ul>

    <!-- Results message -->
    <div v-if="showResults" class="mt-4 p-4 rounded-lg" :class="isQuizPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
      <p class="text-center font-medium">
        {{ isQuizPassed ? 'Felicidades aprobaste el modulo' : 'Necesitas repasar el modulo' }}
      </p>
      <p class="text-center text-sm mt-2">
        Respuestas correctas: {{ correctAnswers }} de {{ totalQuestions }}
      </p>
    </div>

    <div class="mt-6 flex justify-end gap-4">
      <button
        v-if="!showResults"
        type="button"
        class="py-2 px-4 text-sm font-semibold text-white bg-gray-500 rounded-lg hover:bg-primary-600 transition-colors duration-300"
        @click="checkAnswers"
      >
        Verificar Respuestas
      </button>
     
    </div>
  </div>
</div>

  </div>  
</template>  

<script>  
import axios from "axios";
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
      defaultThumbnail: '/video-notfound.jpg', 
      showQuizModal: false, // Tracks whether the quiz modal is open
      currentQuiz: null, // Stores the current quiz data
      userAnswers: {},
      showResults: false,
      correctAnswers: 0,
      isQuizPassed: false,
    };  
  },
  computed: {
    totalQuestions() {
      return this.currentQuiz?.quiz_questions?.length || 0;
    },
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
    handleImageError(e) {
      e.target.src = this.defaultThumbnail;
    },  
    selectVideo(video, module) {  
      // Emit the selected video and module to the parent  
      this.$emit('video-selected', { video, module });  
    },
    checkAnswers() {
      this.correctAnswers = 0;
      
      this.currentQuiz.quiz_questions.forEach(question => {
        const userAnswer = this.userAnswers[question.id];
        const correctAnswer = question.quiz_question_answers.find(answer => answer.is_correct)?.id;
        
        if (userAnswer === correctAnswer) {
          this.correctAnswers++;
        }
      });

      this.isQuizPassed = this.correctAnswers > this.totalQuestions / 2;
      this.showResults = true;
    },
    closeQuizModal() {
      this.showQuizModal = false;
      this.currentQuiz = null;
      this.userAnswers = {};
      this.showResults = false;
      this.correctAnswers = 0;
      this.isQuizPassed = false;
    },
    async loadQuiz(quizId) {
  try {
    const response = await axios.get(`https://www.goouniversity.com/api/quizzes/${quizId}`);
    this.currentQuiz = response.data.data;
    this.showQuizModal = true;
    this.userAnswers = {};
    this.showResults = false;
    this.correctAnswers = 0;
    this.isQuizPassed = false;
  } catch (error) {
    console.error("Error loading quiz:", error);
  }
}
  },
};
</script>  