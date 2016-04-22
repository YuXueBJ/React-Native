//
//  NetTool.m
//  AwsomeProject
//
//  Created by purple on 15/9/22.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "XSYRequest.h"
#import "XSYRequestTool.h"
@implementation XSYRequest

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(get:(NSString *)URLString params:(NSDictionary *)params callback:(RCTResponseSenderBlock)callback fail:(RCTResponseSenderBlock)fail) {
  
  [XSYRequestTool get:URLString param:params success:^(id responseObject) {
    NSString * scode =  [responseObject valueForKey:@"scode"];
    if([scode isEqualToString:@"0"]){
      callback(@[responseObject, @"success"]);
    }else{
      fail(@[scode, @"fail"]);
    }
  } failure:^(NSError *error) {
    fail(@[@(error.code)]);
  }];
  
}

@end
