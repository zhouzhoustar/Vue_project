import querystring from "querystring";

export default{
    namespaced:true,
    state:{
        arr:[],
        total:0,
        page:1,
        pagesize:10,
        sort:"weight",
        order:"desc",
        filters:{
            nation:["满族","汉族"],
            blood:["A","B"]
        }
         
    },
    mutations:{
        changeArr(state,{data}){
            state.arr = data
        },
        changeTotal(state,{total}){
            state.total = total
        },
        changePage(state,{page}){
            state.page = page
        },
        changePagesize(state,{pagesize}){
            state.pagesize = pagesize
        },
        changeSort(state,{sort,order}){
            state.sort=sort,
            state.order=order
        }
    },
    actions:{
        getData({state,commit}){
            //使用querystring模块，把对象变为字符串
            var queryparamstring = querystring.stringify({
                "_page":state.page,
                "_limit":state.pagesize,
                "_sort":state.sort,
                "_order":state.order

            }) 

            $.get("/api/students?"+queryparamstring,function(data,status,xhr){
                // console.log(data)
                    const total = Number(xhr.getResponseHeader("x-total-count"))
                    // console.log(total)
                commit("changeArr",{data})
                commit("changeTotal",{total})
            })
        },
        changePage({state,commit,dispatch},{page}){
            commit("changePage",{page})
            dispatch("getData")
        },
        changePagesize({state,commit,dispatch},{pagesize}){
            commit("changePagesize",{pagesize})
            dispatch("getData")
        },
        changeSort({commit,dispatch},{sort,order}){
             commit("changePage",{"page":1}) //让页码改为第一页，是一般的用户需求
            commit("changeSort",{sort,order})
            dispatch("getData")
        }
         
    }
}