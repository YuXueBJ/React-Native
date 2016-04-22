//
//  CalendarManager.m
//  ReactNativeDemo
//
//  Created by 朱洪伟 on 16/3/21.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import "RCTLog.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(addNumber:(int)num)
{
  RCTLogInfo(@"%d",num);
}
@end

