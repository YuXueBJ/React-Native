//
//  RequestTool.m
//  AwsomeProject
//
//  Created by purple on 15/9/21.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "XSYRequestTool.h"

@implementation XSYRequestTool

+(AFHTTPRequestOperationManager * ) get:(NSString *) url param:(NSDictionary *) param success:(void (^)(id responseObject))success failure:(void (^)(NSError *error))failure{
  
  [[NSUserDefaults standardUserDefaults] setValue:@"https://crm.xiaoshouyi.com" forKey:@"hostKey"];
  
  AFHTTPRequestOperationManager * manager =  [self requestManager];
  
  NSMutableDictionary * parameters = [self requestPrePrarms];
  if (param.count > 0) {
    [parameters setValuesForKeysWithDictionary:param];
  }
  NSMutableURLRequest * requestUrl = [[AFHTTPRequestSerializer serializer] requestWithMethod:@"GET" URLString:[self commonUrl:url] parameters:parameters error:nil];
  NSLog(@"%@",requestUrl.URL);
  [manager GET:[self commonUrl:url] parameters:parameters success:^(AFHTTPRequestOperation *operation, id responseObject) {
    if (success) {
      success(responseObject);
    }

  }failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    if (failure) {
      failure(error);
    }
  }];
  return manager;
}
+(AFHTTPRequestOperationManager * ) post:(NSString *) url param:(NSDictionary *) param success:(void (^)(id responseObject))success failure:(void (^)(NSError *error))failure
{
  [[NSUserDefaults standardUserDefaults] setValue:@"https://crm.xiaoshouyi.com" forKey:@"hostKey"];
  
  AFHTTPRequestOperationManager * manager =  [self requestManager];
  
  NSMutableDictionary * parameters = [self requestPrePrarms];
  if (param.count > 0) {
    [parameters setValuesForKeysWithDictionary:param];
  }
  NSMutableURLRequest * requestUrl = [[AFHTTPRequestSerializer serializer] requestWithMethod:@"POST" URLString:[self commonUrl:url] parameters:parameters error:nil];
  
  NSLog(@"%@",requestUrl.URL);
  
  [manager POST:[self commonUrl:url] parameters:parameters success:^(AFHTTPRequestOperation *operation, id responseObject) {
    if (success) {
      success(responseObject);
    }
  } failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    if (failure) {
      failure(error);
    }
  }];
  
  return manager;
}

+(AFHTTPRequestOperationManager *) requestManager{
  AFHTTPRequestOperationManager *manager = [AFHTTPRequestOperationManager manager];
  manager.securityPolicy.allowInvalidCertificates = YES;
  [manager.requestSerializer setValue:@"gzip" forHTTPHeaderField:@"Accept-Encoding"];
  NSHTTPCookie *cookie;
  NSArray * cookies = [self cookieArr];
  for (cookie in cookies) {
    [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];
  }
  return manager;
}

+(NSMutableArray *) cookieArr{
  
  NSMutableDictionary * properties = [[NSMutableDictionary alloc]init];
  NSString * tokenStr = @"rixbIupkMgg0rAibXQo9JFQ9tzcSy58p";
  NSString * token = [NSString stringWithFormat:@"\"%@\"",tokenStr];
  NSMutableArray * cookieArr;
  if (tokenStr &&  tokenStr.length) {
    [properties setValue:token forKey:NSHTTPCookieValue];
    [properties setValue:@"x-ienterprise-passport" forKey:NSHTTPCookieName];
    [properties setValue:@"/" forKey:NSHTTPCookiePath];
    NSString * cacheHost =  [[NSUserDefaults standardUserDefaults] objectForKey:@"hostKey"];
    NSString * tryHost =  [[NSUserDefaults standardUserDefaults] stringForKey:@"try_hostKey"];
    if (tryHost && tryHost.length) {
      cacheHost = tryHost;
    }
    [properties setValue:cacheHost forKey:NSHTTPCookieOriginURL];
    NSHTTPCookie * cookie = [[NSHTTPCookie alloc]initWithProperties:properties];
    cookieArr = [[NSMutableArray alloc]initWithObjects:cookie,nil];
  }

  return cookieArr;
}


+(NSMutableDictionary *) requestPrePrarms{
  NSMutableDictionary * paramDict = [NSMutableDictionary dictionary];
  [paramDict setValue:@"2" forKey:@"source"];
  [paramDict setValue:[[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"] forKey:@"_vs"];
  [paramDict setValue:[[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"] forKey:@"appVersion"];
  [paramDict setValue:[[[NSBundle mainBundle] infoDictionary] objectForKey:[UIDevice currentDevice].model] forKey:@"model"];
  [paramDict setValue:@"0" forKey:@"inhouse"];
  [paramDict setValue:@"0" forKey:@"appType"];
  return paramDict;
}


+(NSString *) commonUrl:(NSString *) url{
  if (!url) {
    return nil;
  }
  NSString * cacheHost =  [[NSUserDefaults standardUserDefaults] objectForKey:@"hostKey"];
  NSString * tryHost =  [[NSUserDefaults standardUserDefaults] stringForKey:@"try_hostKey"];
  if (tryHost.length) {
    cacheHost = tryHost;
  }
  NSString * host;
  if (cacheHost.length) {
    host = cacheHost;
  }else{
    host = @"https://dev.ingageapp.com";
  }
  if ([url rangeOfString:host].location != NSNotFound) {//找到了 直接返回，不拼了
    return url;
  }
  return [NSString stringWithFormat:@"%@/mobile%@",cacheHost,url] ;
}

@end
