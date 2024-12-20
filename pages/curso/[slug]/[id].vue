<template>  
  <div class="mx-auto max-w-7xl">  
    <div class="pb-[100px] pt-4">  
      <main id="course-details">  
        <div class="grid grid-cols-12 gap-6">  
          <!-- Main column -->  
          <div class="col-span-12 lg:col-span-8 ltablet:col-span-8">  
            <div class="relative w-full overflow-hidden rounded-md">  
              <!-- Video Player -->  
              <VideoPlayer  
                v-if="currentVideo"  
                :daily-motion-id="currentVideo.DailyMotionId"  
                :background-image="currentVideo.DailyMotionThumbnail || 'https://via.placeholder.com/1280x720.png?text=DailyMotion+Poster'"  
                :autoplay="true"  
              />  

              <!-- Module Title -->  
              <ModuleTitle  
                v-if="currentModule"  
                :chapter="currentModule.name"  
                :title="currentVideo?.name"  
                :courseName="course?.name"  
                :coverImage="course?.coverImage || 'https://example.com/cover-image.jpg'"  
                :videoId="currentVideo?.documentId"  
                :url="`/curso/${courseSlug}/${courseId}`"  
              />  


              <CoursesList />
            </div>  
          </div>  

          <!-- Sidebar column -->  
          <div class="col-span-12 lg:col-span-4 ltablet:col-span-4">  
            <!-- Module List -->  
            <Module  
              v-if="modules && modules.length"  
              :modules="modules"  
              @video-selected="updateCurrentVideo"  
            />  
            <p v-else>Loading modules...</p>  
          </div>  
        </div>  
      </main>  
    </div>  
  </div>  
</template>  

<script setup>  
import { ref, onMounted } from 'vue'  
import { useRoute, useRouter } from 'nuxt/app'  

// Import components  
import VideoPlayer from '@/components/VideoPlayer.vue'  
import ModuleTitle from '@/components/ModuleTitle.vue'  
import Module from '@/components/Module.vue'  

// Reactive variables  
const course = ref(null)  
const modules = ref([])  
const currentModule = ref(null)  
const currentVideo = ref(null)  

const route = useRoute()  
const router = useRouter()  

// Fetch course data on mount  
onMounted(async () => {  



  const courseId = route.params.id  
  const courseSlug = route.params.slug  

  if (!courseId || !courseSlug) {  
    // Redirect to videos page if no ID or slug is provided  
    router.push('/videos')  
    return  
  }  

  try {  
    // Fetch course data  
    const response = await fetch(`https://www.goouniversity.com/api/courses/${courseId}`)  
    if (!response.ok) {  
      throw new Error('Curso no encontrado')  
    }  

    const result = await response.json()  
    course.value = result.data  
    modules.value = result.data.modules  

    // Set the first module and video as the default  
    if (modules.value.length > 0) {  
      currentModule.value = modules.value[0]  
      currentVideo.value = modules.value[0].videos[0]  
    }  
  } catch (error) {  
    console.error('Error obteniendo el curso:', error)  
    // Redirect to videos page if there's an error  
    router.push('/videos')  
  }  
})  

// Update the current video and module when a new video is selected  
function updateCurrentVideo({ video, module }) {  
  currentVideo.value = video  
  currentModule.value = module  
}  




</script> 