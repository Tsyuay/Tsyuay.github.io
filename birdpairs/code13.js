gdjs.HighScoresCode = {};
gdjs.HighScoresCode.GDHighScoresObjects1= [];
gdjs.HighScoresCode.GDHighScoresObjects2= [];
gdjs.HighScoresCode.GDYouNameObjects1= [];
gdjs.HighScoresCode.GDYouNameObjects2= [];
gdjs.HighScoresCode.GDYouScoreObjects1= [];
gdjs.HighScoresCode.GDYouScoreObjects2= [];
gdjs.HighScoresCode.GDDaianaNameObjects1= [];
gdjs.HighScoresCode.GDDaianaNameObjects2= [];
gdjs.HighScoresCode.GDDaianaScoreObjects1= [];
gdjs.HighScoresCode.GDDaianaScoreObjects2= [];
gdjs.HighScoresCode.GDBarbaraNameObjects1= [];
gdjs.HighScoresCode.GDBarbaraNameObjects2= [];
gdjs.HighScoresCode.GDBarbaraScoreObjects1= [];
gdjs.HighScoresCode.GDBarbaraScoreObjects2= [];
gdjs.HighScoresCode.GDPandaNameObjects1= [];
gdjs.HighScoresCode.GDPandaNameObjects2= [];
gdjs.HighScoresCode.GDPandaScoreObjects1= [];
gdjs.HighScoresCode.GDPandaScoreObjects2= [];
gdjs.HighScoresCode.GDKaraNameObjects1= [];
gdjs.HighScoresCode.GDKaraNameObjects2= [];
gdjs.HighScoresCode.GDKaraScoreObjects1= [];
gdjs.HighScoresCode.GDKaraScoreObjects2= [];
gdjs.HighScoresCode.GDJessNameObjects1= [];
gdjs.HighScoresCode.GDJessNameObjects2= [];
gdjs.HighScoresCode.GDJessScoreObjects1= [];
gdjs.HighScoresCode.GDJessScoreObjects2= [];
gdjs.HighScoresCode.GDBeecherNameObjects1= [];
gdjs.HighScoresCode.GDBeecherNameObjects2= [];
gdjs.HighScoresCode.GDBeecherScoreObjects1= [];
gdjs.HighScoresCode.GDBeecherScoreObjects2= [];
gdjs.HighScoresCode.GDZeeNameObjects1= [];
gdjs.HighScoresCode.GDZeeNameObjects2= [];
gdjs.HighScoresCode.GDZeeScoreObjects1= [];
gdjs.HighScoresCode.GDZeeScoreObjects2= [];
gdjs.HighScoresCode.GDPressMObjects1= [];
gdjs.HighScoresCode.GDPressMObjects2= [];

gdjs.HighScoresCode.conditionTrue_0 = {val:false};
gdjs.HighScoresCode.condition0IsTrue_0 = {val:false};
gdjs.HighScoresCode.condition1IsTrue_0 = {val:false};


gdjs.HighScoresCode.eventsList0 = function(runtimeScene) {

{


gdjs.HighScoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighScoresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HighScoresCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "music.mo3(4).wav", true, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("YouScore"), gdjs.HighScoresCode.GDYouScoreObjects1);
{for(var i = 0, len = gdjs.HighScoresCode.GDYouScoreObjects1.length ;i < len;++i) {
    gdjs.HighScoresCode.GDYouScoreObjects1[i].setString("" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.HighScoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighScoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.HighScoresCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.HighScoresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HighScoresCode.GDHighScoresObjects1.length = 0;
gdjs.HighScoresCode.GDHighScoresObjects2.length = 0;
gdjs.HighScoresCode.GDYouNameObjects1.length = 0;
gdjs.HighScoresCode.GDYouNameObjects2.length = 0;
gdjs.HighScoresCode.GDYouScoreObjects1.length = 0;
gdjs.HighScoresCode.GDYouScoreObjects2.length = 0;
gdjs.HighScoresCode.GDDaianaNameObjects1.length = 0;
gdjs.HighScoresCode.GDDaianaNameObjects2.length = 0;
gdjs.HighScoresCode.GDDaianaScoreObjects1.length = 0;
gdjs.HighScoresCode.GDDaianaScoreObjects2.length = 0;
gdjs.HighScoresCode.GDBarbaraNameObjects1.length = 0;
gdjs.HighScoresCode.GDBarbaraNameObjects2.length = 0;
gdjs.HighScoresCode.GDBarbaraScoreObjects1.length = 0;
gdjs.HighScoresCode.GDBarbaraScoreObjects2.length = 0;
gdjs.HighScoresCode.GDPandaNameObjects1.length = 0;
gdjs.HighScoresCode.GDPandaNameObjects2.length = 0;
gdjs.HighScoresCode.GDPandaScoreObjects1.length = 0;
gdjs.HighScoresCode.GDPandaScoreObjects2.length = 0;
gdjs.HighScoresCode.GDKaraNameObjects1.length = 0;
gdjs.HighScoresCode.GDKaraNameObjects2.length = 0;
gdjs.HighScoresCode.GDKaraScoreObjects1.length = 0;
gdjs.HighScoresCode.GDKaraScoreObjects2.length = 0;
gdjs.HighScoresCode.GDJessNameObjects1.length = 0;
gdjs.HighScoresCode.GDJessNameObjects2.length = 0;
gdjs.HighScoresCode.GDJessScoreObjects1.length = 0;
gdjs.HighScoresCode.GDJessScoreObjects2.length = 0;
gdjs.HighScoresCode.GDBeecherNameObjects1.length = 0;
gdjs.HighScoresCode.GDBeecherNameObjects2.length = 0;
gdjs.HighScoresCode.GDBeecherScoreObjects1.length = 0;
gdjs.HighScoresCode.GDBeecherScoreObjects2.length = 0;
gdjs.HighScoresCode.GDZeeNameObjects1.length = 0;
gdjs.HighScoresCode.GDZeeNameObjects2.length = 0;
gdjs.HighScoresCode.GDZeeScoreObjects1.length = 0;
gdjs.HighScoresCode.GDZeeScoreObjects2.length = 0;
gdjs.HighScoresCode.GDPressMObjects1.length = 0;
gdjs.HighScoresCode.GDPressMObjects2.length = 0;

gdjs.HighScoresCode.eventsList0(runtimeScene);
return;

}

gdjs['HighScoresCode'] = gdjs.HighScoresCode;
