<template>
    <div>
        <h1>title: {{title}}</h1>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>