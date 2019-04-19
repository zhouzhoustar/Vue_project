export default (sort,order)=>{
    // 下面这个c函数的目的就是验证传入的k和真正的按谁排序是否一致，如果一致返回order这个词语
    // 如果不一致，返回空字符串即可
     function c(key){
        if(key==sort){
            return order
        }else{
            return ""
        }
     }
   return  [
        {title : "id",  key  : "id" , sortable: 'custom',sortType:c("id")},
        {title : "姓名",  key  : "name",sortable:'custom',sortType:c("name")},
        {title : "年龄",  key  : "age" , sortable: 'custom' ,sortType:c("age")},
        {title : "性别",  key  : "sex"},
        {title : "身高",  key  : "height" , sortable: 'custom',sortType:c("height")},
        {title : "体重",  key  : "weight"  , sortable: 'custom',sortType:c("weight")},
        {title : "学历",  key  : "education"},
        {title : "血型",  key  : "blood"},
        {title : "星座",  key  : "constellation"},
        {title : "家乡",  key  : "home"},
        {title : "民族",  key  : "nation"}
    ]
}
    
        
   
 