//
//  RequestTool.h
//  AwsomeProject
//
//  Created by purple on 15/9/21.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AFNetworking.h"

@interface XSYRequestTool : NSObject

+ (BOOL)getResponseCode:(NSDictionary*)data;

+(AFHTTPRequestOperationManager * ) get:(NSString *) url
                                  param:(NSDictionary *) param
                                   type:(int)requestType
                                success:(void (^)(id responseObject))success
                                failure:(void (^)(NSError *error))failure;

+(AFHTTPRequestOperationManager * ) get:(NSString *) url
                                  param:(NSDictionary *) param
                                success:(void (^)(id responseObject))success
                                failure:(void (^)(NSError *error))failure;

+(AFHTTPRequestOperationManager * ) post:(NSString *) url
                                   param:(NSDictionary *) param
                                    type:(int)requestType
                                 success:(void (^)(id responseObject))success
                                 failure:(void (^)(NSError *error))failure;



@end
