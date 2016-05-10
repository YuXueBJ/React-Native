/**
 * Action 的任务是描述“发生了什么事情？”
 */
import React from 'react-native';
import * as types from './actionTypes';
import CustomListRow from '../component/customListRow'
import CustomListEmpty from '../component/listEmptyView';

const userToken = "BFV9kp6s3wwsbUwccvfgsdH6Ii8RgmtljOByHJHCTvM="
const userID    = "55102"

// const cookie = 'x-ienterprise-passport="BFV9kp6s3wwsbUwccvfgsdH6Ii8RgmtljOByHJHCTvM=";userId="55102"';
// const URL = 'https://crm-dev11.xiaoshouyi.com/mobile/customize/adv-search-platform.action?_vs=4.0&appType=0&appVersion=4.0&belongId=346204&conditions=%5B%7B%22item%22%3A607156%2C%22type%22%3A10%2C%22value%22%3A%2255102%22%7D%5D&inhouse=0&os=iPhone%20OS%2C8.1%2CiPhone%20Simulator&page=1&size=20&smartViewId=1&sortdatafield=createdAt&sortorder=desc&source=2';

const cookie = `x-ienterprise-passport="${userToken}";userId="${userID}"`;
let page = 1;

function getRequestURL(page) {
    return `https://crm-dev11.xiaoshouyi.com/mobile/customize/adv-search-platform.action?_vs=4.0&appType=0&appVersion=4.0&belongId=346204&conditions=%5B%7B%22item%22:607156,%22type%22:10,%22value%22:%2255102%22%7D%5D&inhouse=0&os=iPhone%20OS,8.1,iPhone%20Simulator&page=${page}&size=20&smartViewId=1&sortdatafield=createdAt&sortorder=desc&source=2`;
}

function customizeEnment(json) {
   console.log(json.body);
    let belongID   = json.body.belongId;
    let customizes = json.body.customizes;
    let itemList   = json.body.itemList;
    let ListData = new Array();
    //遍历数组
    customizes.map((item,index)=>{
        // console.log(`${item.key}${item.value}`);
        //遍历出customizes 中对象的所有key
        let temp = item;
        for(var key in temp){  
           //用key找出对应的值 替换原有的key
          itemList.map((list,index)=>{
            let name=list.name;
            let keyName = null;            
            if(name==key){
                keyName = list.label;
                // 复制原来的值
                temp[keyName]=temp[key];
                // 删除原来的键
               delete temp[key];
            }
          })
        }  
        ListData.push(temp);
    })
    return ListData;
}

export function refreshAction(id){
  return function (dispatch,state,a,b) {
     let URL = getRequestURL(page);
    return fetch(URL,{
        
         method: "POST",
         headers:{
            'Cookie': cookie
        }        
    }).then(response => response.json())
    .then(json =>{
      
      if(json.scode=="0"){
         let listData =  customizeEnment(json);
          console.log(`解析：${listData}`); 
         let ismore = listData.length>19?true:false;
          console.log(ismore); 
          dispatch(refresh(listData,ismore))
          page =1;
      }else{
          return "返回数据错误";
      }
    }).catch(error=>{
      
    })
  }
}

 export function loadMoreAction(){
   page ++;
   let URL = getRequestURL(page);
   console.log(page);
   
  return function (dispatch) {
    return fetch(URL,{
         method: "POST",
         headers:{
            'Cookie': cookie
        }        
    }).then(response => response.json()) 
     .then(json =>{
      if(json.scode=="0"){
          let moreData =  customizeEnment(json);
          console.log(`解析：${moreData}`); 
          let ismore = moreData.length>19;
          console.log(ismore); 
          dispatch(loadMore(moreData,ismore))
      }else{
          return "返回数据错误";
      }
     }).catch(error=>{})
    }
 }

function refresh(dataList,ismore) {
      console.log('refresh');
      return {
        type:types.START_REFRESH_ACTION,
        data:dataList,
        customRow:customListRow,
        customEmpty:customListEmptyView,
        isLoadMore:ismore,
        error:null,
     }
 }
function loadMore(moreData,ismore) {
     console.log('loadMore');
       return {
        type:types.LOAD_MORE_ACTION,
        data:moreData,
        customRow:customListRow,
        isLoadMore:ismore,
        error:null,
    };
}

function NotFoundError(error) {
    return{
        type:types.REFRESH_ERROR_ACTION,
        data:null,
        error:{
            text:'请求错误',
        },
    }
}

export function customListRow(rowData){
      return (
            <CustomListRow row={rowData}/>
        );
}

export function  customListEmptyView(params) {
    return (
       <CustomListEmpty/>  
    );
}
