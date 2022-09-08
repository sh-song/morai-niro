#!/bin/bash
source /workspace/catkin_ws/devel/setup.bash
roslaunch rosbridge_server rosbridge_websocket.launch & python3 morai_cmd_sender.py
