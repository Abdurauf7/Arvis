<template>
    <div class="w-full">
            <div class="border-b border-gray-200 shadow">
                <table class="shadow-lg w-full bg-white table-auto">
                    <tr>
                        <th class="bg-blue-100 border text-left px-8 py-4">№</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Name</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Email</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Describtion</th>
                        <th class="bg-blue-100 border text-left px-8 py-4 w-1/5">Actions</th>
                    </tr>
                    <tr v-for="data in data" :key='data.id'>
                        <td class="border px-8 py-4">{{data.id}}</td>
                        <td class="border px-8 py-4">{{data.name}}</td>
                        <td class="border px-8 py-4">{{data.email}}</td>
                        <td class="border px-8 py-4">{{data.body}}</td>
                        <td class="border px-8 py-4">
                            <div class="flex justify-around">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                @click="handleEdit(data)"><img src="../../assets/icons/edit.png" alt="" srcset=""></button>
                                <button class="bg-white border-2 text-white font-bold py-2 px-4 rounded-full"
                                @click="handleDelete(data.id)"><img src="../../assets/icons/delete-button.png" alt="" srcset=""></button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <Pagination 
            :currentPage="currentPage"
            :total="total"
            :handlePageChange="handlePageChange"
            :previousPage="previousPage"
            :nextPage='nextPage'
            />
    </div>
</template>

<script>
import Pagination from '../common/pagination.vue'

export default {
   props:['data',"handleDelete","handleEdit","currentPage","total","handlePageChange",'previousPage','nextPage'],
   components:{
       Pagination
   }
}
</script>