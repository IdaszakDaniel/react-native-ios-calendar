#import "IosCalendar.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation IosCalendar

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  NSString *description = [RCTConvert NSString:details[@"description"]];

  RCTLogInfo(@"Pretending to create an event %@ at %@ %@ %@", name, location, time, description);
}

RCT_REMAP_METHOD(findEvents,
                findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events = @[@"event1", @"event2"];
  resolve(events);
}

@end
