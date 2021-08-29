gdjs.GlobalVarTestCode = {};
gdjs.GlobalVarTestCode.GDNewObjectObjects1= [];
gdjs.GlobalVarTestCode.GDNewObjectObjects2= [];

gdjs.GlobalVarTestCode.conditionTrue_0 = {val:false};
gdjs.GlobalVarTestCode.condition0IsTrue_0 = {val:false};


gdjs.GlobalVarTestCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.GlobalVarTestCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.GlobalVarTestCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.GlobalVarTestCode.GDNewObjectObjects1[i].setString(" " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.GlobalVarTestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GlobalVarTestCode.GDNewObjectObjects1.length = 0;
gdjs.GlobalVarTestCode.GDNewObjectObjects2.length = 0;

gdjs.GlobalVarTestCode.eventsList0(runtimeScene);
return;

}

gdjs['GlobalVarTestCode'] = gdjs.GlobalVarTestCode;
