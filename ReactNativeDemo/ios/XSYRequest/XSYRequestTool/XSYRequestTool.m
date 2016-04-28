//
//  RequestTool.m
//  AwsomeProject
//
//  Created by purple on 15/9/21.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "XSYRequestTool.h"
#import "XSYRequestBease.h"

/*系统反馈常量*/
#define kRecieveDataSuccess  @"0"   //返回数据成功

@implementation XSYRequestTool

+(BOOL)getResponseCode:(NSDictionary*)data
{
  
   NSString * scode =  [data valueForKey:@"scode"];
  if ([scode isEqualToString:kRecieveDataSuccess] ) {
    return YES;
  }
  return NO;
}

+(AFHTTPRequestOperationManager * ) get:(NSString *) url
                                  param:(NSDictionary *) param
                                   type:(int)requestType
                                success:(void (^)(id responseObject))success
                                failure:(void (^)(NSError *error))failure{
  
  
  
  BOOL needCache = requestType != NotCacheManagement;
  if (needCache){
    
  }
  
  [[NSUserDefaults standardUserDefaults] setValue:XSY_Host forKey:XSY_HostKey];
  
  AFHTTPRequestOperationManager * manager =  [XSYRequestBease requestManager];
  
  NSMutableDictionary * parameters = [XSYRequestBease requestPrePrarms];
  if (param) {
    if (param.count > 0) {
      [parameters setValuesForKeysWithDictionary:param];
    }
  }
  NSMutableURLRequest * requestUrl = [[AFHTTPRequestSerializer serializer] requestWithMethod:@"GET" URLString:[XSYRequestBease commonUrl:url] parameters:parameters error:nil];
  NSLog(@"%@",requestUrl.URL);
  [manager GET:[XSYRequestBease commonUrl:url] parameters:parameters success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"%@",responseObject);
    
    BOOL code  = [XSYRequestTool getResponseCode:responseObject];
    if (code) {
      BOOL needCache = requestType != NotCacheManagement;
      if (needCache){
        
      }else{
        
      }
      
    }else{
      
    };
    
    if (success) {
      success(responseObject);
    }
  }failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"%@",error);
    if (failure) {
       failure(error);
    }
  }];
  return manager;
}
- (void)jsonElement:(id)responseObject  type:(int)requestType{
    BOOL needCache = requestType != NotCacheManagement;
  
  
//    if (needCache && [[e getScode] isEqualToString:kRecieveDataSuccess]){
//  
//    }
}

+(AFHTTPRequestOperationManager * ) get:(NSString *) url
                                  param:(NSDictionary *) param
                                success:(void (^)(id responseObject))success
                                failure:(void (^)(NSError *error))failure{
  
  [[NSUserDefaults standardUserDefaults] setValue:XSY_Host forKey:XSY_HostKey];
  
  AFHTTPRequestOperationManager * manager =  [XSYRequestBease requestManager];
  
  NSMutableDictionary * parameters = [XSYRequestBease requestPrePrarms];
  if (param) {
    if (param.count > 0) {
      [parameters setValuesForKeysWithDictionary:param];
    }
  }
  NSMutableURLRequest * requestUrl = [[AFHTTPRequestSerializer serializer] requestWithMethod:@"GET" URLString:[XSYRequestBease commonUrl:url] parameters:parameters error:nil];
  NSLog(@"%@",requestUrl.URL);
  [manager GET:[XSYRequestBease commonUrl:url] parameters:parameters success:^(AFHTTPRequestOperation *operation, id responseObject) {
     NSString * scode =  [responseObject valueForKey:@"scode"];
    
    NSLog(@"%@",responseObject);
    if (success) {
      success(responseObject);
    }
  }failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"%@",error);
    if (failure) {
      failure(error);
    }
  }];
  return manager;
  
}



+(AFHTTPRequestOperationManager * ) post:(NSString *) url
                                   param:(NSDictionary *) param
                                    type:(int)requestType
                                 success:(void (^)(id responseObject))success
                                 failure:(void (^)(NSError *error))failure
{
  [[NSUserDefaults standardUserDefaults] setValue:XSY_Host forKey:XSY_HostKey];
  
  AFHTTPRequestOperationManager * manager =  [XSYRequestBease requestManager];
  
  NSMutableDictionary * parameters = [XSYRequestBease requestPrePrarms];
  if (param.count > 0) {
    [parameters setValuesForKeysWithDictionary:param];
  }
  NSMutableURLRequest * requestUrl = [[AFHTTPRequestSerializer serializer] requestWithMethod:@"POST" URLString:[XSYRequestBease commonUrl:url] parameters:parameters error:nil];
  
  NSLog(@"%@",requestUrl.URL);
  
  [manager POST:[XSYRequestBease commonUrl:url] parameters:parameters success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"%@",responseObject);
    if (success) {
      success(responseObject);
    }
  } failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"%@",error);
    if (failure) {
      failure(error);
    }
  }];
  
  return manager;
}


@end
