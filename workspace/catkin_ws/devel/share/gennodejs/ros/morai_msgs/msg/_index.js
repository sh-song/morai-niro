
"use strict";

let IntscnTL = require('./IntscnTL.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let SyncModeAddObj = require('./SyncModeAddObj.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let VehicleSpec = require('./VehicleSpec.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let ObjectStatus = require('./ObjectStatus.js');
let MapSpecIndex = require('./MapSpecIndex.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let CollisionData = require('./CollisionData.js');
let GhostMessage = require('./GhostMessage.js');
let CtrlCmd = require('./CtrlCmd.js');
let TrafficLight = require('./TrafficLight.js');
let PREvent = require('./PREvent.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let ReplayInfo = require('./ReplayInfo.js');
let IntersectionControl = require('./IntersectionControl.js');
let Lamps = require('./Lamps.js');
let SensorPosControl = require('./SensorPosControl.js');
let RadarDetection = require('./RadarDetection.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let WaitForTick = require('./WaitForTick.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let PRStatus = require('./PRStatus.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');
let SyncModeRemoveObj = require('./SyncModeRemoveObj.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let SaveSensorData = require('./SaveSensorData.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let MapSpec = require('./MapSpec.js');
let EventInfo = require('./EventInfo.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let VehicleCollision = require('./VehicleCollision.js');
let ERP42Info = require('./ERP42Info.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let RadarDetections = require('./RadarDetections.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let GPSMessage = require('./GPSMessage.js');
let ObjectStatusList = require('./ObjectStatusList.js');

module.exports = {
  IntscnTL: IntscnTL,
  GetTrafficLightStatus: GetTrafficLightStatus,
  SyncModeAddObj: SyncModeAddObj,
  SyncModeInfo: SyncModeInfo,
  NpcGhostInfo: NpcGhostInfo,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  VehicleSpec: VehicleSpec,
  EgoVehicleStatus: EgoVehicleStatus,
  DdCtrlCmd: DdCtrlCmd,
  MultiEgoSetting: MultiEgoSetting,
  ObjectStatus: ObjectStatus,
  MapSpecIndex: MapSpecIndex,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  CollisionData: CollisionData,
  GhostMessage: GhostMessage,
  CtrlCmd: CtrlCmd,
  TrafficLight: TrafficLight,
  PREvent: PREvent,
  SetTrafficLight: SetTrafficLight,
  ScenarioLoad: ScenarioLoad,
  ReplayInfo: ReplayInfo,
  IntersectionControl: IntersectionControl,
  Lamps: Lamps,
  SensorPosControl: SensorPosControl,
  RadarDetection: RadarDetection,
  SyncModeCmdResponse: SyncModeCmdResponse,
  MoraiSrvResponse: MoraiSrvResponse,
  WaitForTick: WaitForTick,
  MoraiSimProcStatus: MoraiSimProcStatus,
  VehicleCollisionData: VehicleCollisionData,
  MoraiTLIndex: MoraiTLIndex,
  PRStatus: PRStatus,
  IntersectionStatus: IntersectionStatus,
  WaitForTickResponse: WaitForTickResponse,
  NpcGhostCmd: NpcGhostCmd,
  SyncModeRemoveObj: SyncModeRemoveObj,
  PRCtrlCmd: PRCtrlCmd,
  SyncModeResultResponse: SyncModeResultResponse,
  SaveSensorData: SaveSensorData,
  VehicleSpecIndex: VehicleSpecIndex,
  MapSpec: MapSpec,
  EventInfo: EventInfo,
  SyncModeSetGear: SyncModeSetGear,
  MoraiTLInfo: MoraiTLInfo,
  VehicleCollision: VehicleCollision,
  ERP42Info: ERP42Info,
  MoraiSimProcHandle: MoraiSimProcHandle,
  RadarDetections: RadarDetections,
  SyncModeCmd: SyncModeCmd,
  GPSMessage: GPSMessage,
  ObjectStatusList: ObjectStatusList,
};
