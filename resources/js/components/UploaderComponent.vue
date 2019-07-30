<template>
    <uploader :options="options" class="uploader-example">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
            <p>Drop files here to upload or</p>
            <br/>
            <uploader-btn :attrs="attrs">select files</uploader-btn>
            <!--<uploader-btn :attrs="attrs">select images</uploader-btn>-->
            <!--<uploader-btn :directory="true">select folder</uploader-btn>-->
        </uploader-drop>
        <uploader-list></uploader-list>
    </uploader>
</template>

<script>
    export default {
        props: ['uploadUrl', 'apiUrl'],
        data () {
            return {
                options: {
                    target: this.apiUrl + this.uploadUrl,
                    testChunks: false,
                    headers : {
                        'Accept' : 'application/json',
                    }
                },
                attrs: {
                    accept: 'document/zip'
                }
            }
        },
        created() {
            console.log(this.apiUrl + this.uploadUrl)
            console.log("YOOHHHAAHAA")
        }
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
