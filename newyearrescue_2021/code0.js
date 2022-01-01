gdjs.PFP2Code = {};
gdjs.PFP2Code.GDSkyObjects1= [];
gdjs.PFP2Code.GDSkyObjects2= [];
gdjs.PFP2Code.GDHouseObjects1= [];
gdjs.PFP2Code.GDHouseObjects2= [];
gdjs.PFP2Code.GDSnowObjects1= [];
gdjs.PFP2Code.GDSnowObjects2= [];
gdjs.PFP2Code.GDLogoObjects1= [];
gdjs.PFP2Code.GDLogoObjects2= [];
gdjs.PFP2Code.GDAfangamebyObjects1= [];
gdjs.PFP2Code.GDAfangamebyObjects2= [];
gdjs.PFP2Code.GDPlayObjects1= [];
gdjs.PFP2Code.GDPlayObjects2= [];
gdjs.PFP2Code.GDPlayTextObjects1= [];
gdjs.PFP2Code.GDPlayTextObjects2= [];

gdjs.PFP2Code.conditionTrue_0 = {val:false};
gdjs.PFP2Code.condition0IsTrue_0 = {val:false};
gdjs.PFP2Code.condition1IsTrue_0 = {val:false};


gdjs.PFP2Code.eventsList0 = function(runtimeScene) {

{


gdjs.PFP2Code.condition0IsTrue_0.val = false;
{
gdjs.PFP2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PFP2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PFP", false);
}}

}


};

gdjs.PFP2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PFP2Code.GDSkyObjects1.length = 0;
gdjs.PFP2Code.GDSkyObjects2.length = 0;
gdjs.PFP2Code.GDHouseObjects1.length = 0;
gdjs.PFP2Code.GDHouseObjects2.length = 0;
gdjs.PFP2Code.GDSnowObjects1.length = 0;
gdjs.PFP2Code.GDSnowObjects2.length = 0;
gdjs.PFP2Code.GDLogoObjects1.length = 0;
gdjs.PFP2Code.GDLogoObjects2.length = 0;
gdjs.PFP2Code.GDAfangamebyObjects1.length = 0;
gdjs.PFP2Code.GDAfangamebyObjects2.length = 0;
gdjs.PFP2Code.GDPlayObjects1.length = 0;
gdjs.PFP2Code.GDPlayObjects2.length = 0;
gdjs.PFP2Code.GDPlayTextObjects1.length = 0;
gdjs.PFP2Code.GDPlayTextObjects2.length = 0;

gdjs.PFP2Code.eventsList0(runtimeScene);
return;

}

gdjs['PFP2Code'] = gdjs.PFP2Code;
