<template>
    <div v-show="editModalVisible" class="fixed inset-0 w-full h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 h-3/5">
                <h1 class="text-3xl text-gray-600 ml-3">Edit Modal</h1>
                 <hr class="w-full h-0.5 bg-gray-300 rounded" />
            <div class="flex flex-col justify-center w-5/6 h-4/5 mx-auto ">
                <div class="mb-4" style="width:100%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        name="name"
                        type="text" 
                        placeholder="Write your name"
                        :value="editableData.name"
                        @input="$emit(editableData.name,$event.target.value)"
                       >
                </div>
                <div class="mb-4" style="width:100%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input 
                        :value="editableData.email"
                        @input="$emit(editableData.email,$event.target.value)"

                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Write your email"
                        >
                </div>
                <div class="mb-4" style="width:100%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="desc">
                            Description
                        </label>
                        <textarea 
                        :value="editableData.body"
                        @input="$emit(editableData.body,$event.target.value)"
                        class="
                        h-full
                        shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" name="body" type="text" placeholder="Write your description"> </textarea>
                </div>
            </div>
                <div class="flex justify-end items-end w-5/6 mx-auto">
                    <button @click="handleSubmit" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    <button class="ml-4 bg-red-500 text-white font-bold py-2 px-4 rounded" @click="handleClose(false)">
                        <span class="font-bold text-white text-xl">x</span>
                    </button>
                </div>
                
                
        </div>
    </div>
</template>

<script>
export default {
    props:['editModalVisible','editableData','handleClose','handleSubmit']
    
}
</script>