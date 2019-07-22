Nova.booting((Vue, router, store) => {
    Vue.component('uploader-component', require('./components/UploaderComponent.vue').default);
    Vue.component('index-resumable-upload-field', require('./components/IndexField'))
    Vue.component('detail-resumable-upload-field', require('./components/DetailField'))
    Vue.component('form-resumable-upload-field', require('./components/FormField'))
})
