from apscheduler.scheduler import Scheduler

sched = Scheduler()


@sched.scheduled_job('interval', minutes=1)
def job():
    print 'This job is run every minute.'


sched.start()