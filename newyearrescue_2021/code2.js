gdjs.MenuCode = {};
gdjs.MenuCode.GDMenuBGObjects1= [];
gdjs.MenuCode.GDMenuBGObjects2= [];
gdjs.MenuCode.GDFooterObjects1= [];
gdjs.MenuCode.GDFooterObjects2= [];
gdjs.MenuCode.GDBBStaticObjects1= [];
gdjs.MenuCode.GDBBStaticObjects2= [];
gdjs.MenuCode.GDCopyrightObjects1= [];
gdjs.MenuCode.GDCopyrightObjects2= [];
gdjs.MenuCode.GDPlayText2Objects1= [];
gdjs.MenuCode.GDPlayText2Objects2= [];
gdjs.MenuCode.GDPlayText1Objects1= [];
gdjs.MenuCode.GDPlayText1Objects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDTryMoreObjects1= [];
gdjs.MenuCode.GDTryMoreObjects2= [];
gdjs.MenuCode.GDFooter3Objects1= [];
gdjs.MenuCode.GDFooter3Objects2= [];
gdjs.MenuCode.GDLogo1Objects1= [];
gdjs.MenuCode.GDLogo1Objects2= [];
gdjs.MenuCode.GDLogo2Objects1= [];
gdjs.MenuCode.GDLogo2Objects2= [];
gdjs.MenuCode.GDLogo3Objects1= [];
gdjs.MenuCode.GDLogo3Objects2= [];
gdjs.MenuCode.GDZJIconObjects1= [];
gdjs.MenuCode.GDZJIconObjects2= [];
gdjs.MenuCode.GDBBIconObjects1= [];
gdjs.MenuCode.GDBBIconObjects2= [];
gdjs.MenuCode.GDBPIconObjects1= [];
gdjs.MenuCode.GDBPIconObjects2= [];
gdjs.MenuCode.GDMoonObjects1= [];
gdjs.MenuCode.GDMoonObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDZJIconObjects1Objects = Hashtable.newFrom({"ZJIcon": gdjs.MenuCode.GDZJIconObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13091172);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://tsyuay.github.io/zatannajump/index.html", runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBBIconObjects1Objects = Hashtable.newFrom({"BBIcon": gdjs.MenuCode.GDBBIconObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13092524);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://tsyuay.github.io/bowlingblitz/index.html", runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBPIconObjects1Objects = Hashtable.newFrom({"BPIcon": gdjs.MenuCode.GDBPIconObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13093900);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://tsyuay.github.io/birdpairs/index.html", runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "14_FXSound_Loop.mp3", true, 0, 1);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "946709_Ready-to-Burgle.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZJIcon"), gdjs.MenuCode.GDZJIconObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDZJIconObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BBIcon"), gdjs.MenuCode.GDBBIconObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBBIconObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BPIcon"), gdjs.MenuCode.GDBPIconObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBPIconObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMenuBGObjects1.length = 0;
gdjs.MenuCode.GDMenuBGObjects2.length = 0;
gdjs.MenuCode.GDFooterObjects1.length = 0;
gdjs.MenuCode.GDFooterObjects2.length = 0;
gdjs.MenuCode.GDBBStaticObjects1.length = 0;
gdjs.MenuCode.GDBBStaticObjects2.length = 0;
gdjs.MenuCode.GDCopyrightObjects1.length = 0;
gdjs.MenuCode.GDCopyrightObjects2.length = 0;
gdjs.MenuCode.GDPlayText2Objects1.length = 0;
gdjs.MenuCode.GDPlayText2Objects2.length = 0;
gdjs.MenuCode.GDPlayText1Objects1.length = 0;
gdjs.MenuCode.GDPlayText1Objects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDTryMoreObjects1.length = 0;
gdjs.MenuCode.GDTryMoreObjects2.length = 0;
gdjs.MenuCode.GDFooter3Objects1.length = 0;
gdjs.MenuCode.GDFooter3Objects2.length = 0;
gdjs.MenuCode.GDLogo1Objects1.length = 0;
gdjs.MenuCode.GDLogo1Objects2.length = 0;
gdjs.MenuCode.GDLogo2Objects1.length = 0;
gdjs.MenuCode.GDLogo2Objects2.length = 0;
gdjs.MenuCode.GDLogo3Objects1.length = 0;
gdjs.MenuCode.GDLogo3Objects2.length = 0;
gdjs.MenuCode.GDZJIconObjects1.length = 0;
gdjs.MenuCode.GDZJIconObjects2.length = 0;
gdjs.MenuCode.GDBBIconObjects1.length = 0;
gdjs.MenuCode.GDBBIconObjects2.length = 0;
gdjs.MenuCode.GDBPIconObjects1.length = 0;
gdjs.MenuCode.GDBPIconObjects2.length = 0;
gdjs.MenuCode.GDMoonObjects1.length = 0;
gdjs.MenuCode.GDMoonObjects2.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
