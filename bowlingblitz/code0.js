gdjs.FuLoCode = {};
gdjs.FuLoCode.GDNewObjectObjects1= [];
gdjs.FuLoCode.GDNewObjectObjects2= [];
gdjs.FuLoCode.GDNewObject2Objects1= [];
gdjs.FuLoCode.GDNewObject2Objects2= [];
gdjs.FuLoCode.GDNewObject3Objects1= [];
gdjs.FuLoCode.GDNewObject3Objects2= [];
gdjs.FuLoCode.GDKarenNoticeObjects1= [];
gdjs.FuLoCode.GDKarenNoticeObjects2= [];
gdjs.FuLoCode.GDNewObject4Objects1= [];
gdjs.FuLoCode.GDNewObject4Objects2= [];

gdjs.FuLoCode.conditionTrue_0 = {val:false};
gdjs.FuLoCode.condition0IsTrue_0 = {val:false};
gdjs.FuLoCode.condition1IsTrue_0 = {val:false};


gdjs.FuLoCode.eventsList0 = function(runtimeScene) {

{


gdjs.FuLoCode.condition0IsTrue_0.val = false;
{
gdjs.FuLoCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.FuLoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.FuLoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FuLoCode.GDNewObjectObjects1.length = 0;
gdjs.FuLoCode.GDNewObjectObjects2.length = 0;
gdjs.FuLoCode.GDNewObject2Objects1.length = 0;
gdjs.FuLoCode.GDNewObject2Objects2.length = 0;
gdjs.FuLoCode.GDNewObject3Objects1.length = 0;
gdjs.FuLoCode.GDNewObject3Objects2.length = 0;
gdjs.FuLoCode.GDKarenNoticeObjects1.length = 0;
gdjs.FuLoCode.GDKarenNoticeObjects2.length = 0;
gdjs.FuLoCode.GDNewObject4Objects1.length = 0;
gdjs.FuLoCode.GDNewObject4Objects2.length = 0;

gdjs.FuLoCode.eventsList0(runtimeScene);
return;

}

gdjs['FuLoCode'] = gdjs.FuLoCode;
