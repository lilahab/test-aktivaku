<template>
    <div>
        <b-card-group deck>
            <b-card>
                <b-card-text>
                    <div>
                        <div>max value : {{jsonProgress.max_value}}</div>
                        <div>real value : {{jsonProgress.real_value}}</div>
                    </div>
                    <br>
                    <b-progress :max="jsonProgress.max_value">
                        <b-progress-bar :value="jsonProgress.real_value" :label="`${((jsonProgress.real_value / jsonProgress.max_value) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>
                </b-card-text>
            </b-card>
            <b-card>
                <b-card-text>
                    <div>
                        <div>max value : {{jsonProgress.max_value}}</div>
                        <div>real value : {{jsonProgress.real_value}}</div>
                    </div>
                    <br>
                    <b-progress :max="jsonProgress.max_value">
                        <b-progress-bar :value="jsonProgress.real_value" :label="`${((jsonProgress.real_value / jsonProgress.max_value) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>
                </b-card-text>
            </b-card>
           <b-card>
                <b-card-text>
                    <div>
                        <div>max value : {{jsonProgress.max_value}}</div>
                        <div>real value : {{jsonProgress.real_value}}</div>
                    </div>
                    <br>
                    <b-progress :max="jsonProgress.max_value">
                        <b-progress-bar :value="jsonProgress.real_value" :label="`${((jsonProgress.real_value / jsonProgress.max_value) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
        
</template>

<script>
    import json from '@/json/progress.json'

    export default {
        name: 'TestProgress',
        data() {
            return {
                jsonProgress: json
            }
        }
    }
</script>
