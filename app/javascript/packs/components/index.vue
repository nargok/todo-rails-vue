<template>
    <div>
        <!--新規作成部分-->
        <!--<div class="row">-->
            <!--<div class="col s10 m11">-->
                <!--<input type="text" class="form-control" placeholder="Add your projecrt!">-->
            <!--</div>-->
            <!--<div class="col s2 m1">-->
                <!--<div class="btn-floating waves-effect waves-light red">-->
                    <!--<i class="material-icons">add</i>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;リスト表示部分&ndash;&gt;-->
        <!--<div>-->
            <!--<ul class="collection">-->
                <!--<li id="row_task_1" class="collection-item">-->
                    <!--<input type="checkbox" id="task_1">-->
                    <!--<label for="task_1">Sample Project</label>-->
                <!--</li>-->
                <!--<li id="row_task_2" class="collection-item">-->
                    <!--<input type="checkbox" id="task_2">-->
                    <!--<label for="task_2">Sample Project</label>-->
                <!--</li>-->
                <!--<li id="row_task_3" class="collection-item">-->
                    <!--<input type="checkbox" id="task_3">-->
                    <!--<label for="task_3">Sample Project</label>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->
        <!--&lt;!&ndash;完了済タスク表示ボタン&ndash;&gt;-->
        <!--<div class="btn">Display completed projects</div>-->
        <!--&lt;!&ndash;完了済タスク一覧&ndash;&gt;-->
        <!--<div id="finished-projects" class="display_none">-->
            <!--<ul class="collection">-->
                <!--<li id="row_task4" class="cllection-item">-->
                    <!--<input type="checkbox" id="task_4">-->
                    <!--<label for="task_4">Done Project</label>-->
                <!--</li>-->
                <!--<li id="row_task5" class="cllection-item">-->
                    <!--<input type="checkbox" id="task_5">-->
                    <!--<label for="task_5">Done Project</label>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                tasks: [],
                newTask: ''
            }
        },
        mounted: function () {
            this.fetchTasks();
        },
        methods: {
            fetchTasks: function () {
                axios.get('/api/tasks').then((response) => {
                    for(var i = 0; i < response.data.tasks.length; i++) {
                        this.tasks.push(response.data.tasks[i]);
                    }
                }, (error) => {
                   console.log(error);
                });
            },
        }
    }
</script>