<template>
    <div class="flex justify-end mt-4 mb-4">
        <button :disabled="currentPage === 1" :class="{'opacity-50 cursor-not-allowed':currentPage === 1}" @click="previousPage(currentPage - 1)" class="border-4 bg-blue-700 rounded-lg text-white text-center p-2">PreviosPage</button>
        <div 
        class="border-2 rounded p-3 ml-2 cursor-pointer" style="width:40px"
        v-for="total in total" :key="total"
        :class="{'bg-red-500 text-white': total === currentPage}"
        @click="handlePageChange(total)"
        >
            {{total}}
        </div>
        <button @click="nextPage(currentPage + 1 )" class="border-4 bg-blue-700 rounded-lg text-white text-center p-2"> Next Page</button>
    </div>
</template>


<script>
export default {
    props:['currentPage','total','handlePageChange','previousPage','nextPage'],
   
}
</script>