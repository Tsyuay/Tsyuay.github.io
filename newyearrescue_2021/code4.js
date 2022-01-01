gdjs.Level1Code = {};
gdjs.Level1Code.GDMoonObjects1= [];
gdjs.Level1Code.GDMoonObjects2= [];
gdjs.Level1Code.GDMoonObjects3= [];
gdjs.Level1Code.GDBGObjects1= [];
gdjs.Level1Code.GDBGObjects2= [];
gdjs.Level1Code.GDBGObjects3= [];
gdjs.Level1Code.GDFadeInObjects1= [];
gdjs.Level1Code.GDFadeInObjects2= [];
gdjs.Level1Code.GDFadeInObjects3= [];
gdjs.Level1Code.GDGrassObjects1= [];
gdjs.Level1Code.GDGrassObjects2= [];
gdjs.Level1Code.GDGrassObjects3= [];
gdjs.Level1Code.GDKarenStaticObjects1= [];
gdjs.Level1Code.GDKarenStaticObjects2= [];
gdjs.Level1Code.GDKarenStaticObjects3= [];
gdjs.Level1Code.GDBlock3Objects1= [];
gdjs.Level1Code.GDBlock3Objects2= [];
gdjs.Level1Code.GDBlock3Objects3= [];
gdjs.Level1Code.GDBlock2Objects1= [];
gdjs.Level1Code.GDBlock2Objects2= [];
gdjs.Level1Code.GDBlock2Objects3= [];
gdjs.Level1Code.GDBlock1Objects1= [];
gdjs.Level1Code.GDBlock1Objects2= [];
gdjs.Level1Code.GDBlock1Objects3= [];
gdjs.Level1Code.GDBlockObjects1= [];
gdjs.Level1Code.GDBlockObjects2= [];
gdjs.Level1Code.GDBlockObjects3= [];
gdjs.Level1Code.GDDecorationObjects1= [];
gdjs.Level1Code.GDDecorationObjects2= [];
gdjs.Level1Code.GDDecorationObjects3= [];
gdjs.Level1Code.GDDialogObjects1= [];
gdjs.Level1Code.GDDialogObjects2= [];
gdjs.Level1Code.GDDialogObjects3= [];
gdjs.Level1Code.GDDialogText1Objects1= [];
gdjs.Level1Code.GDDialogText1Objects2= [];
gdjs.Level1Code.GDDialogText1Objects3= [];
gdjs.Level1Code.GDDialogtext5Objects1= [];
gdjs.Level1Code.GDDialogtext5Objects2= [];
gdjs.Level1Code.GDDialogtext5Objects3= [];
gdjs.Level1Code.GDDialogtext4Objects1= [];
gdjs.Level1Code.GDDialogtext4Objects2= [];
gdjs.Level1Code.GDDialogtext4Objects3= [];
gdjs.Level1Code.GDDialogtext3Objects1= [];
gdjs.Level1Code.GDDialogtext3Objects2= [];
gdjs.Level1Code.GDDialogtext3Objects3= [];
gdjs.Level1Code.GDDialogtext2Objects1= [];
gdjs.Level1Code.GDDialogtext2Objects2= [];
gdjs.Level1Code.GDDialogtext2Objects3= [];
gdjs.Level1Code.GDRestartObjects1= [];
gdjs.Level1Code.GDRestartObjects2= [];
gdjs.Level1Code.GDRestartObjects3= [];
gdjs.Level1Code.GDMessageBoxObjects1= [];
gdjs.Level1Code.GDMessageBoxObjects2= [];
gdjs.Level1Code.GDMessageBoxObjects3= [];
gdjs.Level1Code.GDLevelCompletedObjects1= [];
gdjs.Level1Code.GDLevelCompletedObjects2= [];
gdjs.Level1Code.GDLevelCompletedObjects3= [];
gdjs.Level1Code.GDGoToMapObjects1= [];
gdjs.Level1Code.GDGoToMapObjects2= [];
gdjs.Level1Code.GDGoToMapObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.condition4IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};
gdjs.Level1Code.condition4IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFadeInObjects1Objects = Hashtable.newFrom({"FadeIn": gdjs.Level1Code.GDFadeInObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlock1Objects1Objects = Hashtable.newFrom({"Block1": gdjs.Level1Code.GDBlock1Objects1});gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13146380);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBlock1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level1Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level1Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level1Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level1Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level1Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level1Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDBlock1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBlock1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block1"), gdjs.Level1Code.GDBlock1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlock1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlock2Objects1Objects = Hashtable.newFrom({"Block2": gdjs.Level1Code.GDBlock2Objects1});gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13148956);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBlock2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level1Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level1Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level1Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level1Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level1Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level1Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDBlock2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBlock2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlock3Objects1Objects = Hashtable.newFrom({"Block3": gdjs.Level1Code.GDBlock3Objects1});gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13151548);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBlock3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level1Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level1Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level1Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level1Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level1Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level1Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDBlock3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBlock3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.Level1Code.GDRestartObjects1});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Level1Code.GDRestartObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDecorationObjects2Objects = Hashtable.newFrom({"Decoration": gdjs.Level1Code.GDDecorationObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.Level1Code.GDBlockObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGoToMapObjects1Objects = Hashtable.newFrom({"GoToMap": gdjs.Level1Code.GDGoToMapObjects1});gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level1Code.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Decoration"), gdjs.Level1Code.GDDecorationObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDDecorationObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlockObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDDecorationObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.Level1Code.GDDecorationObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDDecorationObjects2[i].activateBehavior("Physics2", false);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13156868);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "LevelCompleted");
}{gdjs.evtTools.sound.playSound(runtimeScene, "7_FXSound_Success.mp3", false, 100, 1);
}}

}


{



}


{



}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)), "Unlocked");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GoToMap"), gdjs.Level1Code.GDGoToMapObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
gdjs.Level1Code.condition3IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGoToMapObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.Level1Code.condition2IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition3IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14052572);
}
}}
}
}
if (gdjs.Level1Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13142436);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDFadeInObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFadeInObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Level1Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFadeInObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level1Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFadeInObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level1Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFadeInObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeIn", 0, "easeInQuad", 1500, true);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "14_FXSound_Loop.mp3", true, 100, 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "946709_Ready-to-Burgle.mp3", true, 0, 1);
}}

}


{


gdjs.Level1Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Block2"), gdjs.Level1Code.GDBlock2Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlock2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block3"), gdjs.Level1Code.GDBlock3Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBlock3Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.eventsList5(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDMoonObjects1.length = 0;
gdjs.Level1Code.GDMoonObjects2.length = 0;
gdjs.Level1Code.GDMoonObjects3.length = 0;
gdjs.Level1Code.GDBGObjects1.length = 0;
gdjs.Level1Code.GDBGObjects2.length = 0;
gdjs.Level1Code.GDBGObjects3.length = 0;
gdjs.Level1Code.GDFadeInObjects1.length = 0;
gdjs.Level1Code.GDFadeInObjects2.length = 0;
gdjs.Level1Code.GDFadeInObjects3.length = 0;
gdjs.Level1Code.GDGrassObjects1.length = 0;
gdjs.Level1Code.GDGrassObjects2.length = 0;
gdjs.Level1Code.GDGrassObjects3.length = 0;
gdjs.Level1Code.GDKarenStaticObjects1.length = 0;
gdjs.Level1Code.GDKarenStaticObjects2.length = 0;
gdjs.Level1Code.GDKarenStaticObjects3.length = 0;
gdjs.Level1Code.GDBlock3Objects1.length = 0;
gdjs.Level1Code.GDBlock3Objects2.length = 0;
gdjs.Level1Code.GDBlock3Objects3.length = 0;
gdjs.Level1Code.GDBlock2Objects1.length = 0;
gdjs.Level1Code.GDBlock2Objects2.length = 0;
gdjs.Level1Code.GDBlock2Objects3.length = 0;
gdjs.Level1Code.GDBlock1Objects1.length = 0;
gdjs.Level1Code.GDBlock1Objects2.length = 0;
gdjs.Level1Code.GDBlock1Objects3.length = 0;
gdjs.Level1Code.GDBlockObjects1.length = 0;
gdjs.Level1Code.GDBlockObjects2.length = 0;
gdjs.Level1Code.GDBlockObjects3.length = 0;
gdjs.Level1Code.GDDecorationObjects1.length = 0;
gdjs.Level1Code.GDDecorationObjects2.length = 0;
gdjs.Level1Code.GDDecorationObjects3.length = 0;
gdjs.Level1Code.GDDialogObjects1.length = 0;
gdjs.Level1Code.GDDialogObjects2.length = 0;
gdjs.Level1Code.GDDialogObjects3.length = 0;
gdjs.Level1Code.GDDialogText1Objects1.length = 0;
gdjs.Level1Code.GDDialogText1Objects2.length = 0;
gdjs.Level1Code.GDDialogText1Objects3.length = 0;
gdjs.Level1Code.GDDialogtext5Objects1.length = 0;
gdjs.Level1Code.GDDialogtext5Objects2.length = 0;
gdjs.Level1Code.GDDialogtext5Objects3.length = 0;
gdjs.Level1Code.GDDialogtext4Objects1.length = 0;
gdjs.Level1Code.GDDialogtext4Objects2.length = 0;
gdjs.Level1Code.GDDialogtext4Objects3.length = 0;
gdjs.Level1Code.GDDialogtext3Objects1.length = 0;
gdjs.Level1Code.GDDialogtext3Objects2.length = 0;
gdjs.Level1Code.GDDialogtext3Objects3.length = 0;
gdjs.Level1Code.GDDialogtext2Objects1.length = 0;
gdjs.Level1Code.GDDialogtext2Objects2.length = 0;
gdjs.Level1Code.GDDialogtext2Objects3.length = 0;
gdjs.Level1Code.GDRestartObjects1.length = 0;
gdjs.Level1Code.GDRestartObjects2.length = 0;
gdjs.Level1Code.GDRestartObjects3.length = 0;
gdjs.Level1Code.GDMessageBoxObjects1.length = 0;
gdjs.Level1Code.GDMessageBoxObjects2.length = 0;
gdjs.Level1Code.GDMessageBoxObjects3.length = 0;
gdjs.Level1Code.GDLevelCompletedObjects1.length = 0;
gdjs.Level1Code.GDLevelCompletedObjects2.length = 0;
gdjs.Level1Code.GDLevelCompletedObjects3.length = 0;
gdjs.Level1Code.GDGoToMapObjects1.length = 0;
gdjs.Level1Code.GDGoToMapObjects2.length = 0;
gdjs.Level1Code.GDGoToMapObjects3.length = 0;

gdjs.Level1Code.eventsList7(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
