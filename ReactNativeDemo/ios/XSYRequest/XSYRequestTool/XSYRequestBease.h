//
//  XSYRequestBease.h
//  ReactNativeDemo
//
//  Created by 朱洪伟 on 16/4/22.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AFHTTPRequestOperationManager.h"

static NSString * XSY_Host    = @"https://crm-staging.xiaoshouyi.com";
static NSString * XSY_HostKey =  @"hostKey";
static NSString * userTokenValue = @"tadicL/7tNAwEBL5XWfL8lfqOM3R6hohe9B+NlT5z2g=";

typedef NS_ENUM(NSUInteger,cacheType){
  NotCacheManagement = 0,  //实时请求，不需要缓存
  FromNetWork,             //网络优先
  FromSandBox,             //沙盒优先
  AsyNetWork               //异步优先
  
};

@interface XSYRequestBease : NSObject

//请求头设置
+(AFHTTPRequestOperationManager *) requestManager;
//cookie
+(NSMutableArray *) cookieArr;
//公共参数
+(NSMutableDictionary *) requestPrePrarms;
//hostURL
+(NSString *) commonUrl:(NSString *) url;
@end
