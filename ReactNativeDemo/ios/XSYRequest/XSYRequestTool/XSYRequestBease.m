//
//  XSYRequestBease.m
//  ReactNativeDemo
//
//  Created by 朱洪伟 on 16/4/22.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "XSYRequestBease.h"

@implementation XSYRequestBease

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
  NSString * tokenStr = userTokenValue;
  NSString * token = [NSString stringWithFormat:@"\"%@\"",tokenStr];
  NSMutableArray * cookieArr;
  if (tokenStr &&  tokenStr.length) {
    [properties setValue:token forKey:NSHTTPCookieValue];
    [properties setValue:@"x-ienterprise-passport" forKey:NSHTTPCookieName];
    [properties setValue:@"/" forKey:NSHTTPCookiePath];
    NSString * cacheHost =  [[NSUserDefaults standardUserDefaults] objectForKey:XSY_HostKey];
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
  NSString * cacheHost =  [[NSUserDefaults standardUserDefaults] objectForKey:XSY_HostKey];
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
