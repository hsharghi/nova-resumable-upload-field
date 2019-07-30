<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <uploader-component
                    :id="field.name"
                    class="w-full"
                    :class="errorClasses"
                    v-model="value"
            >
            </uploader-component>
        </template>
    </default-field>
</template>

<script>
    import {FormField, HandlesValidationErrors} from 'laravel-nova';
    // import uploader from 'vue-simple-uploader'
    // Vue.use(uploader);

    export default {
        mixins: [FormField, HandlesValidationErrors],

        props: ['resourceName', 'resourceId', 'field'],
        data() {
            return {
                apiUrl: null,
                uploadUrl: null,
                options: {
                    target: this.apiUrl + this.uploadUrl,
                    testChunks: false,
                    headers: {
                        'Accept': 'application/json',
                    }
                },
                attrs: {
                    accept: 'document/zip'
                }
            }
        },
        computed: {
            fileName: function () {
                // let fileName = this.fileUri.split('\\').pop().split('/').pop();
                // const fileLength = fileName.length;
                // let maxLength = 45;
                //
                // if (this.$refs[this.field.name + '-text']) {
                //     maxLength = this.$refs[this.field.name + '-text'].clientWidth
                //         / parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])
                //         * 1.25;
                // }
                //
                // if (fileLength > maxLength) {
                //     fileName = "&hellip;" + fileName.substring(fileLength - maxLength);
                // }
                //
                // return fileName;
            },
        },
        created() {
            console.log('target' + this.apiUrl + this.uploadUrl)
        },
        methods: {

            fill: function (formData) {
                formData.append(this.field.attribute, this.value || '')
            },

            handleChange: function (value) {
                // this.fileUri = value;
                // this.imagePreviewData = value;
                this.value = value;
            },

            setInitialValue: function () {
                // const originalImage = this.field.value
                //     ? "/" + this.field.value
                //     : "";
                // this.imagePreviewData = originalImage;
                // this.fileUri = originalImage;
            },
        },
    }
</script>


<style>
    .uploader-example {
        width: 880px;
        padding: 15px;
        margin: 40px auto 0;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }

    .uploader-example .uploader-btn {
        margin-right: 4px;
    }

    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>

