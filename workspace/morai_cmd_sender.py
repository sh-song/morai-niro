import rospy
from morai_msgs.msg import CtrlCmd

class MoraiCmdSender:
    def __init__(self):
        rospy.init_node('morai_cmd_sender', anonymous=False)
        self.pub = rospy.Publisher('/ctrl_cmd', CtrlCmd, queue_size=1)

        self.msg = CtrlCmd()

    def set_msg(self):
        self.msg.longlCmdType=2 #int32 
        self.msg.accel=0.8 #float64
        self.msg.brake=0.0 #float64
        self.msg.steering=0.8 #float64 
        self.msg.velocity=80 #float64
        self.msg.acceleration=0.8 #float64 

    def run(self):

        self.set_msg()
        print(self.msg)
        print('---------')
        self.pub.publish(self.msg)

if __name__ == "__main__":
    sender = MoraiCmdSender()
    rate = rospy.Rate(10)
    while not rospy.is_shutdown():
        sender.run()
        rate.sleep()
        
