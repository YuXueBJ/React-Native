


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var {
    XSYRequest,UserDefaults
} = require('NativeModules');

import api  from './RequestURL.js';

import * as RequestTool  from './XSYRequestTool.js';

let  feedPram = {
    'source':'2',
    'prePageLastId':'0',
    'size':'25',
    'start':'0'
};


// const cookie = 'x-ienterprise-passport="tadicL/7tNAwEBL5XWfL8rm+VYC+MyPmVbW8ZXVUV3g=";userId="407138"';
const cookie = 'x-ienterprise-passport="BFV9kp6s3wwsbUwccvfgsdH6Ii8RgmtljOByHJHCTvM=";userId="55102"';
 
const URL = 'https://crm-dev11.xiaoshouyi.com/mobile/customize/adv-search-platform.action?_vs=4.0&appType=0&appVersion=4.0&belongId=346204&conditions=%5B%7B%22item%22%3A607156%2C%22type%22%3A10%2C%22value%22%3A%2255102%22%7D%5D&inhouse=0&os=iPhone%20OS%2C8.1%2CiPhone%20Simulator&page=1&size=20&smartViewId=1&sortdatafield=createdAt&sortorder=desc&source=2';


function customizeEnment(json) {
    debugger
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


function request(url) {
    return fetch(url,{
         method: "POST",
         headers:{
                'Cookie': cookie
        }        
    }).then(response => response.json())
    .then(json =>{
      
      if(json.scode=="0"){
         let listData =  customizeEnment(json);
         console.log(`解析：${listData}`); 
         return listData;
      }else{
          return "返回数据错误";
      }
    }).catch(error=>{
       console.log(`请求出错：${error}`); 
    })
}
request(URL).then(data =>{
    console.log(`结果${data}`);
     console.log(data);
});



// function request (url) {
    
//     XSYRequest.get(api.getPackUrl,null,RequestTool.FromNetWork,function (response){
        
//         if(response.scode == '0'){
//             console.log(response);
//         }
        
//     },function (failRes) {
//         console.log(failRes);
//     });
// }
// request();

 class ingageplatform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = ingageplatform;