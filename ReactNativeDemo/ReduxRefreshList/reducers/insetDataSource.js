

export let  insertData = [
    // {id: 1, text: '开始 1'},
    // {id: 2, text: '开始 2'},
    // {id: 3, text: '开始 3'},
    // {id: 4, text: '开始 4'},
    // {id: 5, text: '开始 5'},
    // {id: 6, text: '开始 6'},
    // {id: 7, text: '开始 7'},
    // {id: 8, text: '开始 8'},
    // {id: 9, text: '开始 9'},
    // {id: 10, text: '开始 10'}, 
];

export let  refresData = [
    {id: 1, text: '刷新数据 1'},
    {id: 2, text: '刷新数据 2'},
    {id: 3, text: '刷新数据 3'},
    {id: 4, text: '刷新数据 4'},
    {id: 5, text: '刷新数据 5'},
    {id: 6, text: '刷新数据 6'},
    {id: 7, text: '刷新数据 7'},
    {id: 8, text: '刷新数据 8'},
    {id: 9, text: '刷新数据 9'},
    {id: 10, text: '刷新数据 10'}, 
];

export let loadMoreData = [
    {id: 11, text: '加载更多 1'},
    {id: 12, text: '加载更多 2'},
    {id: 13, text: '加载更多 3'},
    {id: 14, text: '加载更多 4'},
    {id: 15, text: '加载更多 5'},
    {id: 16, text: '加载更多 6'},
    {id: 17, text: '加载更多 7'},
    {id: 18, text: '加载更多 8'},
    {id: 19, text: '加载更多 9'},
    {id: 20, text: '加载更多 10'}, 
];

export function requestNetData(url) {
    console.log(refresData);
     return new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(refresData);
            console.log("对象的值为：",refresData);
        }, 1000)
     });
}

export function  requestMoreNetData(url) {
        console.log(loadMoreData);
     return new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(loadMoreData);
            console.log("对象的值为：",loadMoreData);
        }, 1000)
     });
}