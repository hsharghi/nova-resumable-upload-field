import * as uploader from "vue-simple-uploader";

Nova.booting((Vue, router, store) => {
    Vue.use(uploader);
    Vue.component('uploader-component', require('./components/UploaderComponent.vue'));
    Vue.component('index-resumable-upload-field', require('./components/IndexField'))
    Vue.component('detail-resumable-upload-field', require('./components/DetailField'))
    Vue.component('form-resumable-upload-field', require('./components/FormField'))
})
